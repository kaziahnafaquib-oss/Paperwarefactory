import React from "react";
import { Navbar } from "./components/paperware/navbar";
import { BottomNav } from "./components/paperware/bottom-nav";
import { HUDOverlay as SharedHUDOverlay } from "./components/paperware/hud-overlay";
import { ImmersiveHero } from "./components/paperware/immersive-hero";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Card3D, FloatingCard3D, Parallax3DContainer, DepthLayers } from "./components/paperware/3d-card";
const Particle3DField = React.lazy(() => import("./components/paperware/3d-card").then(m => ({ default: m.Particle3DField })));
const Grid3DBackground = React.lazy(() => import("./components/paperware/3d-card").then(m => ({ default: m.Grid3DBackground })));
import { 
  ArrowRight, ShoppingBasket as BasketIcon,
  Settings, Search, Globe, ShieldCheck, Award, Leaf, Zap, CircleCheck,
  Download, Utensils, Coffee, Hospital, Pill, Building2, ShoppingBag, BedDouble,
  Activity, Cpu, Factory, Droplets, Microscope, TreeDeciduous, Terminal, Layers, Target,
  Truck, Ship, Plane, Boxes, ChartBar, Radio, ExternalLink
} from "lucide-react";
import { Hero } from "./components/paperware/hero";
import { Industries } from "./components/paperware/industries";
import { AboutUs } from "./components/paperware/about-us";
import { AdminPanel } from "./components/paperware/admin-panel";
import { ProductionTimeline } from "./components/paperware/production-timeline";
import { Footer } from "./components/paperware/footer";
import { Ticker } from "./components/paperware/ticker";

// Import home sections lazily to optimize initial bundle size
const MaterialLab = React.lazy(() => import("./components/paperware/material-lab").then(m => ({ default: m.MaterialLab })));
const CarbonCalculator = React.lazy(() => import("./components/paperware/carbon-calculator").then(m => ({ default: m.CarbonCalculator })));
const MachineryShowcase = React.lazy(() => import("./components/paperware/machinery-showcase").then(m => ({ default: m.MachineryShowcase })));
const ProductViewer3D = React.lazy(() => import("./components/paperware/product-viewer-3d").then(m => ({ default: m.ProductViewer3D })));
const LogisticsCommand = React.lazy(() => import("./components/paperware/logistics-command").then(m => ({ default: m.LogisticsCommand })));
const RealtimeOps = React.lazy(() => import("./components/paperware/realtime-ops").then(m => ({ default: m.RealtimeOps })));
const Certifications = React.lazy(() => import("./components/paperware/certifications").then(m => ({ default: m.Certifications })));
const ImpactMetrics = React.lazy(() => import("./components/paperware/impact-metrics").then(m => ({ default: m.ImpactMetrics })));
const AIGlobalConfig = React.lazy(() => import("./components/paperware/ai-global-config").then(m => ({ default: m.AIGlobalConfig })));

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "./context/LanguageContext";
import { debounce, prefersReducedMotion, runWhenIdle, getDevicePerformanceTier } from "./lib/performance";

// Advanced Performance Hook
const usePerformanceOptimization = () => {
  const [tier, setTier] = React.useState<'low' | 'medium' | 'high'>('high');

  React.useEffect(() => {
    // Check device tier and set optimizations
    const deviceTier = getDevicePerformanceTier();
    setTier(deviceTier);
    
    // Add hardware acceleration classes to body
    // document.body.classList.add('optimize-gpu'); // REMOVED: Breaks position:fixed
    if (deviceTier === 'low') {
      document.body.classList.add('reduce-effects');
    }
  }, []);

  return { tier, isLowEnd: tier === 'low' };
};

// A wrapper component to only render heavy sections when they enter viewport with content-visibility
const DeferredSection = React.memo(({ children, threshold = 0.1, className = "" }: { children: React.ReactNode, threshold?: number, className?: string }) => {
  const [hasEntered, setHasEntered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px', threshold } // Load even earlier for smoother transition
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}
      style={{ contentVisibility: 'auto' } as any}
    >
      {hasEntered ? (
        <React.Suspense fallback={<div className="h-64 animate-pulse bg-zinc-50 rounded-[40px] m-4" />}>
          {children}
        </React.Suspense>
      ) : (
        <div className="h-64" />
      )}
    </div>
  );
});

// Advanced Tone Switcher UI
const ToneTransitionOverlay = ({ tone }: { tone: string }) => (
  <motion.div
    key={tone}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 pointer-events-none z-[9999] border-[10px] border-[#fabf37]/20 mix-blend-overlay"
  />
);

// Advanced Immersive HUD Overlay (Local Component to resolve conflict and add premium layers)
const HUDOverlay = React.memo(() => {
  return (
    <>
      <SharedHUDOverlay />
      <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden opacity-20 select-none">
        {/* Additional Immersive Layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(214,200,169,0.05)_100%)]" />
        
        {/* Digital Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
        
        {/* HUD Frame Accents */}
        <div className="absolute inset-8 border border-[#d6c8a9]/10 rounded-[40px] pointer-events-none" />
        
        {/* Predictive Data Streams */}
        <div className="absolute bottom-24 left-12 hidden xl:block">
          <div className="flex flex-col gap-1">
            <span className="text-[7px] font-black text-[#fabf37]/40 tracking-[0.3em] uppercase">Predictive_Cache</span>
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [4, 12, 4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-[2px] bg-[#fabf37]/20 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

// Memoize section components for performance
const MemoTicker = React.memo(Ticker);
const MemoIndustries = React.memo(Industries);
const MemoAboutUs = React.memo(AboutUs);
const MemoProductionTimeline = React.memo(ProductionTimeline);

// Use lazy loading for all non-essential pages to optimize initial bundle size
const AllProductsPage = React.lazy(() => import("./pages/all-products").then(module => ({ default: module.AllProductsPage })));
const PaperCupsPage = React.lazy(() => import("./pages/papercups").then(module => ({ default: module.PaperCupsPage })));
const AboutPage = React.lazy(() => import("./pages/about-us").then(module => ({ default: module.AboutPage })));
const ClientsPage = React.lazy(() => import("./pages/clients").then(module => ({ default: module.ClientsPage })));
const ProductDetailsPage = React.lazy(() => import("./pages/product-details").then(module => ({ default: module.ProductDetailsPage })));
const OfficeStationaryPage = React.lazy(() => import("./pages/office-stationary").then(module => ({ default: module.OfficeStationaryPage })));
const RestaurantSuppliesPage = React.lazy(() => import("./pages/restaurant-supplies").then(module => ({ default: module.RestaurantSuppliesPage })));
const MarketingMaterialsPage = React.lazy(() => import("./pages/marketing-materials").then(module => ({ default: module.MarketingMaterialsPage })));
const PharmaSuppliesPage = React.lazy(() => import("./pages/pharma-supplies").then(module => ({ default: module.PharmaSuppliesPage })));
const FMCGSuppliesPage = React.lazy(() => import("./pages/fmcg-garments").then(module => ({ default: module.FMCGSuppliesPage })));
const SustainabilityPage = React.lazy(() => import("./pages/sustainability").then(module => ({ default: module.SustainabilityPage })));
const ContactPage = React.lazy(() => import("./pages/contact").then(module => ({ default: module.ContactPage })));
const QuoteRequestPage = React.lazy(() => import("./pages/quote-request").then(module => ({ default: module.QuoteRequestPage })));
const FAQPage = React.lazy(() => import("./pages/faq").then(module => ({ default: module.FAQPage })));
const CareerPage = React.lazy(() => import("./pages/career").then(module => ({ default: module.CareerPage })));
const CompliancePage = React.lazy(() => import("./pages/compliance").then(module => ({ default: module.CompliancePage })));
const OrderTrackingPage = React.lazy(() => import("./pages/order-tracking").then(module => ({ default: module.OrderTrackingPage })));
const ProductJourneyPage = React.lazy(() => import("./pages/product-journey").then(module => ({ default: module.ProductJourneyPage })));
const GalleryPage = React.lazy(() => import("./pages/gallery").then(module => ({ default: module.GalleryPage })));
const ManufacturingPage = React.lazy(() => import("./pages/manufacturing").then(module => ({ default: module.ManufacturingPage })));
const StudioPage = React.lazy(() => import("./pages/studio").then(module => ({ default: module.StudioPage })));
const SocialsPage = React.lazy(() => import("./pages/socials").then(module => ({ default: module.SocialsPage })));
const MorePage = React.lazy(() => import("./pages/more").then(module => ({ default: module.MorePage })));
const Catalog3DPage = React.lazy(() => import("./pages/catalog-3d").then(module => ({ default: module.Catalog3DPage })));
const FactoryLivePage = React.lazy(() => import("./pages/factory-live").then(module => ({ default: module.FactoryLivePage })));
const ImpactDashboardPage = React.lazy(() => import("./pages/impact-dashboard").then(module => ({ default: module.ImpactDashboardPage })));
const BulkOrderPage = React.lazy(() => import("./pages/bulk-order").then(module => ({ default: module.default })));
const QuotationBasketPage = React.lazy(() => import("./pages/quotation-basket").then(module => ({ default: module.default })));
const ClientPortalPage = React.lazy(() => import("./pages/client-portal").then(module => ({ default: module.ClientPortalPage })));
const FuturePlanPage = React.lazy(() => import("./pages/future-plan").then(module => ({ default: module.FuturePlanPage })));
const ProductFeedbackPage = React.lazy(() => import("./pages/product-feedback").then(module => ({ default: module.ProductFeedbackPage })));
const OurERPPage = React.lazy(() => import("./pages/our-erp").then(module => ({ default: module.OurERPPage })));
const ExportPage = React.lazy(() => import("./pages/export").then(module => ({ default: module.ExportPage })));
const AdminDashboardPage = React.lazy(() => import("./pages/admin-dashboard"));
const SolutionsPage = React.lazy(() => import("./pages/solutions").then(module => ({ default: module.SolutionsPage })));
const TechnicalManifestoPage = React.lazy(() => import("./pages/technical-manifesto").then(module => ({ default: module.TechnicalManifestoPage })));
const FranchisePage = React.lazy(() => import("./pages/franchise").then(module => ({ default: module.FranchisePage })));
const InvestorPage = React.lazy(() => import("./pages/investor").then(module => ({ default: module.InvestorPage })));
const PartnersPage = React.lazy(() => import("./pages/partners").then(module => ({ default: module.PartnersPage })));
const BusinessPage = React.lazy(() => import("./pages/business").then(module => ({ default: module.BusinessPage })));
const CompanyPage = React.lazy(() => import("./pages/company").then(module => ({ default: module.CompanyPage })));

// Lazy load heavy components
const SearchOverlay = React.lazy(() => import("./components/paperware/search-overlay").then(module => ({ default: module.SearchOverlay })));
const EmailModal = React.lazy(() => import("./components/paperware/email-modal").then(module => ({ default: module.EmailModal })));
const AuthModal = React.lazy(() => import("./components/paperware/auth-modal").then(module => ({ default: module.AuthModal })));

// Assets from Figma Import
import imgWhoarewe from "figma:asset/6b92055ba5bbffc98cadd5ecc5acc306f29875e4.png";
import imgShoppingBag from "figma:asset/26c3dd878dc6b8092048a743d91266cdd41f2a79.png";
import imgMap from "figma:asset/7707e2384f799b3aeb1bc03a9a49cb7ef91b6772.png";
import imgAlArabian from "figma:asset/8c3ef6e2c2c81601beda5fdafc9fab7e12e9f1b9.png";
import imgBengalClassicTea from "figma:asset/34b648bdf72eb53992426ff8084a4c54fc8165e8.png";
import imgCafeZ from "figma:asset/53ca518289a67f7082d40754eedede50e7f28cde.png";
import imgCoffeeAvenue from "figma:asset/e1b52edc4bd49baf663705f27f615b1ffa798c3a.png";
import imgCrimsoncup from "figma:asset/21e853179b862e2a71c5e1a1ba5efe58235d205f.png";
import imgDhakaiKhana from "figma:asset/100dea1b4141ebb61c4f2107662ae90e9c55c9f7.png";
import imgAbdulMonemLtd from "figma:asset/d4efddfc25e06a64c90d4b323e072c2ec51b5137.png";
import imgWalton from "figma:asset/b2396fe9ba2824e1ed2b4c04910aa4abbd4b857e.png";
import imgNovatek from "figma:asset/f3e7a2981f7316365dad8fd018a8e205ca11f7df.png";
import imgMgi from "figma:asset/c6f18cf9ae32f1211778c4cec70a04bd0581d943.png";
import imgIcddrb from "figma:asset/5fe4879b8ec37b86777b57fed80f5c8976e5963c.png";
import imgFresh from "figma:asset/5b67be8022542584cc3586961212c32c1ef3b5f5.png";
import imgCardBg1 from "figma:asset/deb0797add19956888ddfd67b88ff75ecb592792.png";
import imgCardBg2 from "figma:asset/047a125a2726498b23eb2e792cd9129a5e35bd9f.png";
import imgCardBg3 from "figma:asset/ecae8d654e0ece711f117e96df44a7742af71120.png";

// Neural Language Transition Effect
function NeuralTransition({ isVisible, language }: { isVisible: boolean, language: string }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center pointer-events-none"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative flex flex-col items-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="size-24 rounded-full border-2 border-[#fabf37] flex items-center justify-center"
            >
              <span className="text-3xl font-black text-[#fabf37]">{language}</span>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              className="h-px bg-gradient-to-r from-transparent via-[#fabf37] to-transparent mt-8"
            />
            <p className="text-[10px] font-black text-white uppercase tracking-[0.5em] mt-4">Calibrating Neural Hub...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Premium 3D Perspective Section Wrapper
function PerspectiveSection({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={ref}
      className="relative w-full"
    >
      <motion.div
        style={{ 
          rotateX,
          scale,
          opacity
        }}
        className="w-full h-full origin-center"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Loading component for Suspense
function PageLoader() {
  const reducedMotion = prefersReducedMotion();
  
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
      <div className="relative size-20">
        <motion.div 
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-4 border-[#fabf37] rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-10 bg-black rounded-xl flex items-center justify-center text-[#fabf37] font-black text-xl">P</div>
        </div>
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 animate-pulse">Initializing Terminal...</p>
    </div>
  );
}

// Default values
const DEFAULT_HERO_VIDEO = "https://cdn.pixabay.com/video/2019/04/16/22896-331593818_large.mp4";
const DEFAULT_CLIENTS_VIDEO = "https://cdn.pixabay.com/video/2022/05/17/117185-710439975_large.mp4";
const DEFAULT_HERO_CONTENT = {
  title: "PREMIUM PAPER SOLUTIONS",
  subtitle1: "Global Standard. Sustainable Impact. Industrial Precision.",
  subtitle2: "YOUR PARTNER IN SUSTAINABLE MANUFACTURING EXCELLENCE."
};
const DEFAULT_PRODUCTS = [
  { id: 1, name: "Eco-Liner Food Box", category: "Food Packaging", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format", status: "Active" },
  { id: 2, name: "Double Wall Coffee Cup", category: "Beverage", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format", status: "Active" },
  { id: 3, name: "Industrial Kraft Bag", category: "Logistics", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format", status: "Active" },
  { id: 4, name: "Single Wall Cup (SW)", category: "Paper Cups", image: "https://images.unsplash.com/photo-1517031330214-9b0c33b8c73c?q=80&w=800&auto=format", status: "Active" },
  { id: 5, name: "Marketing Brochure", category: "Marketing", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format", status: "Active" },
  { id: 6, name: "Sterile Medicine Box", category: "Pharmaceutical", image: "https://images.unsplash.com/photo-1550572017-738a8a40f286?q=80&w=800&auto=format", status: "Active" },
  { id: 7, name: "Snack Retail Packaging", category: "FMCG", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format", status: "Active" },
  { id: 8, name: "Burger Ventilation Box", category: "Restaurant", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format", status: "Active" },
  { id: 9, name: "Premium Gift Bag", category: "Luxury", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format", status: "Active" },
  { id: 10, name: "Eco Tea Sleeves", category: "Beverage", image: "https://images.unsplash.com/photo-1556742049-02e1f740d0ff?q=80&w=800&auto=format", status: "Active" },
  { id: 11, name: "Industrial Tote", category: "Logistics", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format", status: "Active" },
  { id: 12, name: "Sustainable Mailer", category: "Logistics", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800&auto=format", status: "Active" },
];

const DEFAULT_CLIENT_PROJECTS = [
  {
    company: "TechFlow Systems",
    project: "Neural Hardware Packaging",
    desc: "Anti-static, high-density foam inserts for next-gen processors.",
    image: "https://images.unsplash.com/photo-1596489394863-14b35e0e148e?q=80&w=1000"
  },
  {
    company: "GreenLeaf Organics",
    project: "Biodegradable Food Containers",
    desc: "100% plant-based fiber composition with zero-plastic coating.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000"
  },
  {
    company: "Urban Brew Co.",
    project: "Thermal Insulation Cups",
    desc: "Double-wall patented construction maintaining heat for 4+ hours.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000"
  },
  {
    company: "MediSafe Pharma",
    project: "Secure Sterility Boxes",
    desc: "ISO certified medical grade cardstock with tamper-evident seals.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000"
  },
  {
    company: "Velocity Logistics",
    project: "Heavy-Duty Corrugated Units",
    desc: "Reinforced structural integrity for international freight.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000"
  }
];

export function MainContent() {
  const { tier, isLowEnd } = usePerformanceOptimization();
  const [isAdminOpen, setIsAdminOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("home");
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isEmailOpen, setIsEmailOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [authType, setAuthType] = React.useState<'login' | 'signup' | 'admin'>('login');
  const [quoteBasket, setQuoteBasket] = React.useState<any[]>([]);
  const [isBasketOpen, setIsBasketOpen] = React.useState(false);
  const [performanceTier, setPerformanceTier] = React.useState<'low' | 'medium' | 'high'>('high');
  const [isLanguageTransitioning, setIsLanguageTransitioning] = React.useState(false);
  const [currentTone, setCurrentTone] = React.useState("Corporate");

  // Reinforce scroll to top on page change
  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  const [heroVideoUrl, setHeroVideoUrl] = React.useState(DEFAULT_HERO_VIDEO);
  const [heroVideoMobileUrl, setHeroVideoMobileUrl] = React.useState("");
  const [clientsVideoUrl, setClientsVideoUrl] = React.useState(DEFAULT_CLIENTS_VIDEO);
  const [heroContent, setHeroContent] = React.useState(DEFAULT_HERO_CONTENT);
  const [productsData, setProductsData] = React.useState(DEFAULT_PRODUCTS);
  const [clientProjects, setClientProjects] = React.useState(DEFAULT_CLIENT_PROJECTS);
  const [productionStats, setProductionStats] = React.useState({
    totalCups: 69550257,
    wonderfulBusinesses: 5754,
    lastSync: new Date().toISOString()
  });

  const [factoryVideos, setFactoryVideos] = React.useState<any[]>([
    {
      url: "https://assets.mixkit.io/videos/preview/mixkit-automatic-production-line-in-a-factory-42865-large.mp4",
      title: "PAPERWARE FACTORY KEEPS",
      highlight: "ECO-FRIENDLINESS",
      subtitle: "AT THE TIP OF YOUR FINGERS!"
    }
  ]);

  // Unified useScroll at root level to ensure non-static container context
  // Remove container reference to let useScroll use window by default
  const { scrollYProgress: rootScrollProgress } = useScroll();

  React.useEffect(() => {
    const tier = getDevicePerformanceTier();
    setPerformanceTier(tier);

    try {
      const heroVideo = localStorage.getItem('paperware_hero_video');
      if (heroVideo) setHeroVideoUrl(heroVideo);
      const heroVideoMobile = localStorage.getItem('paperware_hero_video_mobile');
      if (heroVideoMobile) setHeroVideoMobileUrl(heroVideoMobile);
      const clientsVideo = localStorage.getItem('paperware_clients_video');
      if (clientsVideo) setClientsVideoUrl(clientsVideo);
      const heroContentStr = localStorage.getItem('paperware_hero_content');
      if (heroContentStr) setHeroContent(JSON.parse(heroContentStr));
      const productsStr = localStorage.getItem('paperware_products');
      if (productsStr) setProductsData(JSON.parse(productsStr));
      const clientProjectsStr = localStorage.getItem('paperware_client_projects');
      if (clientProjectsStr) setClientProjects(JSON.parse(clientProjectsStr));
    } catch (e) {
      console.warn('Failed to load storage:', e);
    }
  }, []);

  const handlePageChange = React.useCallback((page: string) => {
    React.startTransition(() => {
      setCurrentPage(page);
    });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleProductClick = React.useCallback((product: any) => {
    React.startTransition(() => {
      setQuoteBasket(prev => [...prev, product]);
      setIsBasketOpen(true);
      setCurrentPage("product-details");
    });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const addToQuoteBasket = React.useCallback((product: any) => {
    setQuoteBasket(prev => {
      if (!prev.find(p => p.name === product.name)) return [...prev, product];
      return prev;
    });
  }, []);

  const removeFromQuoteBasket = React.useCallback((name: string) => {
    setQuoteBasket(prev => prev.filter(p => p.name !== name));
  }, []);

  const { t, language } = useLanguage();

  // Watch for language changes to trigger effect
  const prevLang = React.useRef(language);
  React.useEffect(() => {
    if (prevLang.current !== language) {
      setIsLanguageTransitioning(true);
      const timer = setTimeout(() => setIsLanguageTransitioning(false), 1000);
      prevLang.current = language;
      return () => clearTimeout(timer);
    }
  }, [language]);

  const handleAuthOpen = React.useCallback((type: 'login' | 'signup' | 'admin') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  }, []);

  const renderContent = React.useMemo(() => {
    switch (currentPage) {
      case "home":
        return (
          <div className="bg-white relative overflow-hidden font-['Poppins',sans-serif]">
            {/* Global 3D Particle Field - Lazy Loaded */}
            <React.Suspense fallback={null}>
              <Particle3DField />
            </React.Suspense>
            
            {/* 1. IMMERSIVE VIDEO STARTING SECTION */}
            <div className="relative">
              <React.Suspense fallback={<div className="absolute inset-0 bg-zinc-50/50" />}>
                <Grid3DBackground />
              </React.Suspense>
              <ImmersiveHero 
                videoUrl={heroVideoUrl} 
                onExplore={handlePageChange} 
              />
            </div>

            {/* 2. LIVE MANUFACTURING DATA SCROLL (Ticker) */}
            <div className="bg-zinc-50 border-y border-zinc-200 py-3 overflow-hidden relative z-20">
              <MemoTicker />
            </div>

            {/* 3. FEATURED SOLUTIONS SLIDER */}
            <section className="bg-zinc-50 py-32 border-y border-zinc-200 overflow-hidden relative">
              <React.Suspense fallback={null}>
                <Particle3DField />
              </React.Suspense>
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="px-4 md:px-12 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
               >
                <div className="space-y-4">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fabf37]/10 border border-[#fabf37]/20"
                  >
                    <Zap className="size-3 text-[#fabf37]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Continuous Production</span>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl font-black tracking-tighter uppercase"
                  >
                    Signature Solutions
                  </motion.h2>
                </div>
                <motion.button 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  onClick={() => handlePageChange("products")} 
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  Full Catalog <ArrowRight className="size-4" />
                </motion.button>
              </motion.div>

              <div className="flex gap-8 px-4 md:px-12 overflow-hidden relative">
                <div className="flex gap-8 animate-ticker">
                  {[...productsData, ...productsData].map((product, idx) => (
                    <Card3D 
                      key={`${product.id}-${idx}`}
                      className="min-w-[320px]"
                      intensity={10}
                    >
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: (idx % 6) * 0.1, type: "spring", stiffness: 100 }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -15,
                          z: 50,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        className="bg-white rounded-[40px] border border-zinc-100 p-8 space-y-6 group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        onClick={() => handleProductClick(product)}
                      >
                        <div className="aspect-square rounded-3xl overflow-hidden relative flex items-center justify-center bg-zinc-50">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ duration: 0.4, type: "spring" }}
                          >
                            <ImageWithFallback 
                              src={product.image} 
                              className="w-full h-full object-contain mix-blend-multiply"
                              alt={product.name}
                            />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-zinc-900 border border-zinc-200"
                            style={{ transform: 'translateZ(40px)' }}
                          >
                            {product.category}
                          </motion.div>
                        </div>
                        <div className="space-y-4" style={{ transform: 'translateZ(20px)' }}>
                          <h3 className="text-xl font-black tracking-tight group-hover:text-[#fabf37] transition-colors">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                              <motion.div 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="size-1.5 bg-green-500 rounded-full"
                              /> Ready
                            </div>
                            <motion.button 
                              whileHover={{ scale: 1.15, rotate: 20 }}
                              whileTap={{ scale: 0.9 }}
                              className="size-10 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:bg-[#fabf37] group-hover:text-black transition-all"
                              style={{ transform: 'translateZ(30px)' }}
                            >
                              <BasketIcon className="size-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </Card3D>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. INDUSTRIES SECTION */}
            <MemoIndustries />

            {/* 5. FEATURED PRODUCTS - Yellow Wavy Section */}
            <section className="relative py-32 overflow-hidden">
              <Particle3DField />
              <DepthLayers layers={3} spacing={30}>
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#fabf37] -skew-y-3 origin-left translate-y-20"
                />
              </DepthLayers>
              <Parallax3DContainer intensity={5}>
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"
                >
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex-1 text-center md:text-left text-black/80 space-y-6"
                >
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-black tracking-tighter text-black"
                  >
                    Featured Products
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="font-medium leading-relaxed max-w-md"
                  >
                    Explore our handcrafted selection of standout products, each thoughtfully chosen to bring you the perfect balance of quality, functionality, and design.
                  </motion.p>
                  <motion.button 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ x: 5 }}
                    onClick={() => handlePageChange("products")}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-white hover:border-white transition-all"
                  >
                    Shop New Arrivals <ArrowRight className="size-4" />
                  </motion.button>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex-1 flex flex-col items-center"
                >
                  <FloatingCard3D delay={0.5}>
                    <div className="relative group">
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute inset-0 bg-white/30 rounded-full blur-3xl"
                        style={{ transform: 'translateZ(-50px)' }}
                      />
                      <motion.div
                        whileHover={{ 
                          y: -30, 
                          rotateY: 15, 
                          rotateX: -10,
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                      >
                        <ImageWithFallback 
                          src={imgShoppingBag} 
                          className="relative z-10 w-[400px] h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.3)]" 
                          alt="Featured Product"
                          style={{ transform: 'translateZ(60px)' }}
                        />
                      </motion.div>
                    </div>
                  </FloatingCard3D>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-3xl font-black mt-8 text-black"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    Paper Bag
                  </motion.h3>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 text-center md:text-right text-black/80 font-medium"
                >
                  <p className="max-w-xs ml-auto">
                    Our most loved industrial grade products are ready to improve and delivered straight to your door.
                  </p>
                </motion.div>
              </motion.div>
              </Parallax3DContainer>
            </section>

            {/* 6. MATERIAL LAB */}
            <DeferredSection>
              <MaterialLab />
            </DeferredSection>

            {/* 7. IMPACT METRICS */}
            <DeferredSection>
              <ImpactMetrics />
            </DeferredSection>

            {/* 8. WHO WE ARE */}
            <section className="px-4 md:px-12 py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -60, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-black tracking-tighter"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  Who We Are?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-zinc-500 font-medium leading-relaxed"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  Paperware Factory is leading Bangladesh's manufacturer of eco-friendly, paper-based products committed to sustainability and reducing plastic pollution. We offer a diverse range of high-quality items, including double-wall cups, food packaging box, french fry boxes, paper bowl, and etc of boxes, stylish shopping bags, calendars, notebooks, greeting cards, and pharmaceutical and packaging such as medicine and tablet boxes. By choosing Paperware Factory, you're supporting a cleaner, greener future—one product at a time.
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  onClick={() => handlePageChange("about")}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-zinc-900 pb-1 hover:text-[#fabf37] hover:border-[#fabf37] transition-all"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  Learn More <ArrowRight className="size-4" />
                </motion.button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 60, scale: 0.9, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1"
              >
                <Card3D intensity={8}>
                  <motion.div 
                    whileHover={{ 
                      scale: 1.05, 
                      z: 50,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="relative rounded-[40px] overflow-hidden shadow-2xl"
                  >
                    <ImageWithFallback src={imgWhoarewe} className="w-full h-full object-cover" alt="Who we are" />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#fabf37]/30 to-transparent"
                      style={{ transform: 'translateZ(10px)' }}
                    />
                    <motion.div 
                      className="absolute inset-0 border-2 border-white/20 rounded-[40px]"
                      style={{ transform: 'translateZ(20px)' }}
                    />
                  </motion.div>
                </Card3D>
              </motion.div>
            </section>

            {/* 9. OUR COVERAGE AREA - Map */}
            <section className="bg-black py-32 relative overflow-hidden">
              <Grid3DBackground />
              <Particle3DField />
              <motion.div 
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 left-0 w-full h-full opacity-30"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              </motion.div>
              <Parallax3DContainer intensity={3}>
                <div className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto text-center space-y-12">
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black tracking-tighter text-white uppercase tracking-[0.2em]"
                    style={{ transform: 'translateZ(50px)' }}
                  >
                    Our Coverage Area
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <FloatingCard3D delay={1}>
                    <Card3D intensity={15}>
                      <motion.div 
                        whileHover={{ 
                          scale: 1.05, 
                          z: 80,
                          boxShadow: "0 0 150px rgba(250,191,55,0.4)"
                        }}
                        className="max-w-3xl mx-auto rounded-[60px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(250,191,55,0.15)] bg-zinc-900/50 backdrop-blur-xl"
                      >
                        <ImageWithFallback 
                          src={imgMap} 
                          className="w-full h-auto opacity-90 transition-all duration-1000" 
                          alt="Bangladesh Map"
                          style={{ transform: 'translateZ(40px)' }}
                        />
                        <motion.div 
                          className="absolute inset-0 border-2 border-[#fabf37]/20 rounded-[60px]"
                          style={{ transform: 'translateZ(50px)' }}
                        />
                      </motion.div>
                    </Card3D>
                  </FloatingCard3D>
                </motion.div>
              </div>
              </Parallax3DContainer>
            </section>

            {/* 10. OUR GLOBAL PARTNERS */}
            {/* 10. OUR GLOBAL PARTNERS (Enhanced Double Scroll) */}
            <section className="bg-zinc-50 py-32 overflow-hidden relative border-t border-zinc-200">
               {/* Decorative Background */}
               <div className="absolute inset-0 pointer-events-none opacity-30">
                 <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:24px_24px]" />
               </div>

              <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-20 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white mb-6"
                >
                   <div className="size-1.5 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Trusted Network</span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black tracking-tighter"
                >
                  Global <span className="text-zinc-400">Partners</span>
                </motion.h2>
              </div>

              {/* Row 1 - Moving Left */}
              <div className="relative flex mb-12">
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-zinc-50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-zinc-50 to-transparent z-20 pointer-events-none" />
                
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-16 md:gap-32 px-8 min-w-max"
                >
                  {[...Array(4)].flatMap((_, i) => 
                    [
                      imgAlArabian, imgFresh, imgBengalClassicTea, imgCafeZ, imgCoffeeAvenue, imgCrimsoncup
                    ].map((logo, idx) => (
                      <motion.div 
                        key={`r1-${i}-${idx}`} 
                        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
                        className="h-16 md:h-20 w-auto opacity-40 grayscale transition-all duration-300 cursor-pointer"
                      >
                        <ImageWithFallback 
                          src={logo} 
                          className="h-full w-auto object-contain" 
                          alt="Partner Logo"
                        />
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </div>

              {/* Row 2 - Moving Right */}
              <div className="relative flex">
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-zinc-50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-zinc-50 to-transparent z-20 pointer-events-none" />
                
                <motion.div 
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-16 md:gap-32 px-8 min-w-max"
                >
                  {[...Array(4)].flatMap((_, i) => 
                    [
                      imgDhakaiKhana, imgAbdulMonemLtd, imgWalton, imgNovatek, imgMgi, imgIcddrb
                    ].map((logo, idx) => (
                       <motion.div 
                        key={`r2-${i}-${idx}`} 
                        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
                        className="h-16 md:h-20 w-auto opacity-40 grayscale transition-all duration-300 cursor-pointer"
                      >
                        <ImageWithFallback 
                          src={logo} 
                          className="h-full w-auto object-contain" 
                          alt="Partner Logo"
                        />
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </div>

              <div className="flex justify-center mt-20 relative z-10">
                <motion.button 
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange("clients")}
                  className="group relative overflow-hidden bg-white border border-zinc-200 pl-8 pr-6 py-4 rounded-full flex items-center gap-4 shadow-xl hover:shadow-2xl hover:border-[#fabf37] transition-all"
                >
                   <span className="text-xs font-black uppercase tracking-widest text-zinc-900 group-hover:text-[#fabf37] transition-colors">View Client Stories</span>
                   <div className="size-8 rounded-full bg-zinc-100 group-hover:bg-[#fabf37] flex items-center justify-center transition-colors">
                      <ArrowRight className="size-4 text-zinc-900" />
                   </div>
                </motion.button>
              </div>
            </section>

            {/* 11. WHY CHOOSE PAPERWARE? */}
            <section className="bg-zinc-50 py-32 px-4 md:px-12 relative overflow-hidden">
              <Particle3DField />
              <Parallax3DContainer intensity={2}>
                <div className="max-w-7xl mx-auto">
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-4xl font-black tracking-tighter mb-20"
                    style={{ transform: 'translateZ(60px)' }}
                  >
                    Why Choose Paperware?
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Eco-Friendly Products", img: imgCardBg1 },
                    { title: "Custom Branding Solutions", img: imgCardBg2 },
                    { title: "Bangladeshi Made, Global Standard", img: imgCardBg3 }
                  ].map((card, idx) => (
                    <Card3D key={idx} className="h-full" intensity={12}>
                      <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 30 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        whileHover={{ 
                          y: -20, 
                          z: 60,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        className="relative aspect-[3/4] rounded-[80px] overflow-hidden group shadow-2xl"
                      >
                        <ImageWithFallback 
                          src={card.img} 
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-120" 
                          alt={card.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <motion.div 
                          className="absolute inset-0 border-2 border-white/10 rounded-[80px]"
                          style={{ transform: 'translateZ(30px)' }}
                        />
                        <motion.div 
                          className="absolute inset-x-0 bottom-0 p-12 text-center"
                          style={{ transform: 'translateZ(50px)' }}
                        >
                          <h3 className="text-2xl font-black text-white leading-tight mb-4">{card.title}</h3>
                          <p className="text-white/60 text-xs font-medium">Delivering excellence through sustainable innovation and industrial precision.</p>
                        </motion.div>
                      </motion.div>
                    </Card3D>
                  ))}
                </div>
              </div>
              </Parallax3DContainer>
            </section>

            {/* 12. ABOUT US - Extended */}
            <DeferredSection>
              <MemoAboutUs />
            </DeferredSection>

            {/* 13. MICRO UTILITY BAR */}


            {/* 14. NEWSLETTER - Removed as per user request */}
            {/* <section className="bg-[#fabf37] py-24 px-4 md:px-12">
              <div className="max-w-7xl mx-auto">
                <Card3D intensity={10}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -15, 
                      z: 60,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="bg-black rounded-full md:rounded-[100px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5"
                  >
                    <motion.div 
                      className="px-10 text-center md:text-left"
                      style={{ transform: 'translateZ(40px)' }}
                    >
                      <motion.h2 
                        animate={{ 
                          textShadow: [
                            "0 0 20px rgba(250,191,55,0.3)",
                            "0 0 40px rgba(250,191,55,0.5)",
                            "0 0 20px rgba(250,191,55,0.3)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
                      >
                        Newsletter
                      </motion.h2>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Get the latest news and updates from your factory.</p>
                    </motion.div>
                    
                    <div className="flex-1 max-w-2xl w-full" style={{ transform: 'translateZ(30px)' }}>
                      <div className="relative group">
                        <motion.input 
                          whileFocus={{ scale: 1.02, z: 20 }}
                          type="email" 
                          placeholder="Email" 
                          className="w-full bg-[#fabf37] text-black rounded-full py-7 px-12 text-sm font-black focus:outline-none placeholder:text-black/30 shadow-2xl"
                        />
                        <motion.button 
                          whileHover={{ rotate: 180, scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 size-14 rounded-full bg-black text-[#fabf37] flex items-center justify-center shadow-xl"
                          style={{ transform: 'translateZ(50px)' }}
                        >
                          <ExternalLink className="size-6" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </Card3D>
              </div>
            </section> */}
          </div>
        );
      case "about": return <AboutPage />;
      case "clients": return <ClientsPage videoUrl={clientsVideoUrl} productionStats={productionStats} onPageChange={handlePageChange} />;
      case "papercups": return <PaperCupsPage videoUrls={factoryVideos} onProductClick={handleProductClick} onPageChange={handlePageChange} />;
      case "products": return <AllProductsPage onProductClick={handleProductClick} onAddToQuote={addToQuoteBasket} onPageChange={handlePageChange} products={productsData} clientProjects={clientProjects} />;
      case "product-details": return <ProductDetailsPage product={quoteBasket[quoteBasket.length - 1]} onBack={() => setCurrentPage("products")} onAddToQuote={addToQuoteBasket} onContactClick={() => handlePageChange("contact")} />;
      case "office-stationary": return <OfficeStationaryPage onProductClick={handleProductClick} />;
      case "restaurant-supplies": return <RestaurantSuppliesPage onProductClick={handleProductClick} />;
      case "marketing-materials": return <MarketingMaterialsPage onProductClick={handleProductClick} />;
      case "pharma-supplies": return <PharmaSuppliesPage onProductClick={handleProductClick} />;
      case "fmcg-supplies": return <FMCGSuppliesPage onProductClick={handleProductClick} />;
      case "sustainability": return <SustainabilityPage />;
      case "solutions": return <SolutionsPage />;
      case "contact": return <ContactPage onFeedbackClick={() => handlePageChange("product-feedback")} />;
      case "more": return <MorePage onPageChange={handlePageChange} />;
      case "quote": return <QuoteRequestPage />;
      case "faq": return <FAQPage />;
      case "career": return <CareerPage />;
      case "compliance": return <CompliancePage />;
      case "tracking": return <OrderTrackingPage onViewJourney={() => handlePageChange("product-journey")} onFeedbackClick={() => handlePageChange("product-feedback")} />;
      case "product-journey": return <ProductJourneyPage onBack={() => handlePageChange("tracking")} />;
      case "gallery": return <GalleryPage />;
      case "manufacturing": return <><ManufacturingPage /><ProductionTimeline /><RealtimeOps /></>;
      case "studio": return <StudioPage />;
      case "socials": return <SocialsPage />;
      case "catalog-3d": return <Catalog3DPage />;
      case "factory-live": return <FactoryLivePage />;
      case "impact-dashboard": return <ImpactDashboardPage />;
      case "bulk-quotes": return <BulkOrderPage basket={quoteBasket} />;
      case "quotation-basket": return <QuotationBasketPage basket={quoteBasket} onRemove={removeFromQuoteBasket} onProceedToOrder={() => handlePageChange("bulk-quotes")} />;
      case "client-portal": return <ClientPortalPage />;
      case "future-plan": return <FuturePlanPage />;
      case "product-feedback": return <ProductFeedbackPage onScanSuccess={() => handlePageChange("product-journey")} />;
      case "erp": return <OurERPPage />;
      case "export": return <ExportPage />;
      case "technical-manifesto": return <TechnicalManifestoPage />;
      case "franchise": return <FranchisePage />;
      case "investor": return <InvestorPage />;
      case "partners": return <PartnersPage />;
      case "business": return <BusinessPage />;
      case "company": return <CompanyPage onPageChange={handlePageChange} />;
      case "admin": return (
        <AdminDashboardPage 
          onLogout={() => handlePageChange("home")} 
          heroVideoUrl={heroVideoUrl}
          onUpdateHeroVideo={setHeroVideoUrl}
          heroVideoMobileUrl={heroVideoMobileUrl}
          onUpdateHeroVideoMobile={setHeroVideoMobileUrl}
          clientsVideoUrl={clientsVideoUrl}
          onUpdateClientsVideo={setClientsVideoUrl}
          heroContent={heroContent}
          onUpdateHeroContent={setHeroContent}
          products={productsData}
          onUpdateProducts={setProductsData}
          clientProjects={clientProjects}
          onUpdateClientProjects={setClientProjects}
        />
      );
      default: return <Hero onExplore={() => handlePageChange("products")} videoUrl={heroVideoUrl} title={heroContent.title} subtitle1={heroContent.subtitle1} subtitle2={heroContent.subtitle2} />;
    }
  }, [currentPage, heroVideoUrl, heroVideoMobileUrl, clientsVideoUrl, heroContent, productsData, quoteBasket, factoryVideos, handlePageChange, handleProductClick, addToQuoteBasket, removeFromQuoteBasket, productionStats]);

  return (
    <div className={`relative min-h-screen ${['home', 'client-portal', 'contact', 'about', 'products', 'sustainability', 'company'].includes(currentPage) ? 'bg-zinc-50 text-zinc-900' : 'bg-zinc-950 text-white'} font-['Poppins',sans-serif] selection:bg-[#fabf37] selection:text-black overflow-x-hidden transition-colors duration-500`}>
      <HUDOverlay />
      <AnimatePresence mode="wait">
        <ToneTransitionOverlay tone={currentTone} />
      </AnimatePresence>
      <div className="fixed inset-0 z-[0] pointer-events-none opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Ticker />
      <Navbar 
        onPageChange={handlePageChange} 
        onProductClick={handleProductClick}
        currentPage={currentPage}
        onSearchOpen={() => setIsSearchOpen(true)}
        onEmailOpen={() => setIsEmailOpen(true)}
        onAuthOpen={handleAuthOpen}
        quoteBasketCount={quoteBasket.length}
      />
      <BottomNav currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="relative z-10">
        <div className="relative w-full">
          <React.Suspense fallback={<PageLoader />}>
            {renderContent}
          </React.Suspense>
        </div>
      </main>
      
      <Footer onPageChange={handlePageChange} />

      {/* Floating Basket Removed */}

      <React.Suspense fallback={null}>
        {isEmailOpen && <EmailModal isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />}
        {isSearchOpen && (
          <SearchOverlay 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
            onSelectProduct={handleProductClick}
            onPageChange={handlePageChange}
          />
        )}
        {isAuthModalOpen && <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} type={authType} onLoginSuccess={() => handlePageChange(authType === 'admin' ? 'admin' : 'client-portal')} />}
      </React.Suspense>
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} videoData={factoryVideos} onUpdateVideos={setFactoryVideos} heroVideoUrl={heroVideoUrl} onUpdateHeroVideo={setHeroVideoUrl} />
      <HUDOverlay />
    </div>
  );
}