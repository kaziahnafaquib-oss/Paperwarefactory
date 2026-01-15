import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ChatProvider } from "./context/ChatContext";
import { SocialMediaProvider } from "./context/SocialMediaContext";
import { ChatWidget } from "./components/ChatWidget";
import { Toaster } from "sonner";
import { MainContent } from "./MainContent";

// Fix Recharts dimension errors globally
import "./lib/recharts-fix";

// Simple test to verify app renders
const TEST_MODE = false;

export default function App() {
  // Test mode - just show a simple component
  if (TEST_MODE) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#fabf37] mb-4">✓ Paperware Loaded!</h1>
          <p className="text-zinc-400">Test successful. Set TEST_MODE = false to load full app.</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <ChatProvider>
        <SocialMediaProvider>
          <MainContent />
          <ChatWidget />
          <Toaster position="top-right" richColors closeButton />
        </SocialMediaProvider>
      </ChatProvider>
    </LanguageProvider>
  );
}