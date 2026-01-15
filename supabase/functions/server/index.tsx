import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Initialize Supabase Admin Client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Ensure 'brochures' and 'videos' buckets exist and are public
(async () => {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketName = 'brochures';
    const videoBucketName = 'videos';

    if (!buckets?.find(b => b.name === bucketName)) {
      await supabase.storage.createBucket(bucketName, { public: true });
      console.log(`Created public bucket: ${bucketName}`);
    }

    if (!buckets?.find(b => b.name === videoBucketName)) {
        await supabase.storage.createBucket(videoBucketName, { 
          public: true,
          fileSizeLimit: 524288000 // 500MB
        });
        console.log(`Created public bucket: ${videoBucketName}`);
    } else {
        // Ensure limit is high enough
        await supabase.storage.updateBucket(videoBucketName, {
          public: true,
          fileSizeLimit: 524288000 // 500MB
        });
    }
  } catch (e) {
    console.error("Error setting up buckets:", e);
  }
})();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-bf34c9a5/health", (c) => {
  return c.json({ status: "ok" });
});

// Log a brochure download
app.post("/make-server-bf34c9a5/brochure/log", async (c) => {
  try {
    const body = await c.req.json();
    const timestamp = new Date().toISOString();
    const id = crypto.randomUUID();
    
    const logEntry = {
      id,
      timestamp,
      location: body.location || "Unknown",
      ip: body.ip || "Anonymous",
      device: body.device || "Unknown",
      source: body.source || "Direct"
    };

    // Store with prefix for easy retrieval
    await kv.set(`brochure:log:${timestamp}-${id}`, logEntry);
    
    return c.json({ success: true, log: logEntry });
  } catch (e) {
    console.error("Failed to log brochure download", e);
    return c.json({ success: false, error: e.message }, 500);
  }
});

// Get brochure stats
app.get("/make-server-bf34c9a5/brochure/stats", async (c) => {
  try {
    const logs = await kv.getByPrefix("brochure:log:");
    // Sort logs by timestamp desc
    logs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return c.json({ 
      total: logs.length,
      logs: logs
    });
  } catch (e) {
    console.error("Failed to fetch brochure stats", e);
    return c.json({ success: false, error: e.message }, 500);
  }
});

// Update brochure URL
app.post("/make-server-bf34c9a5/brochure/update-url", async (c) => {
  try {
    const { url } = await c.req.json();
    await kv.set("paperware_brochure_url", url);
    return c.json({ success: true, url });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});

// Get brochure URL
app.get("/make-server-bf34c9a5/brochure/url", async (c) => {
  try {
    const url = await kv.get("paperware_brochure_url");
    return c.json({ url: url || "" });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});

// Update Sustainability Hero Video URL
app.post("/make-server-bf34c9a5/sustainability/hero-video", async (c) => {
  try {
    const { url } = await c.req.json();
    await kv.set("sustainability_hero_video", url);
    return c.json({ success: true, url });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});

// Get Sustainability Hero Video URL
app.get("/make-server-bf34c9a5/sustainability/hero-video", async (c) => {
  try {
    const url = await kv.get("sustainability_hero_video");
    return c.json({ url: url || "" });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});

// Generate Signed Upload URL
app.post("/make-server-bf34c9a5/storage/upload-token", async (c) => {
  try {
    const { bucket, path } = await c.req.json();
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUploadUrl(path);

    if (error) throw error;
    return c.json({ success: true, ...data });
  } catch (e) {
    return c.json({ success: false, error: e.message }, 500);
  }
});

Deno.serve(app.fetch);