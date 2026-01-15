import React, { Suspense } from "react";
import { useLanguage } from "./context/LanguageContext";
import { debounce, prefersReducedMotion, runWhenIdle, getDevicePerformanceTier } from "./lib/performance";
import { projectId, publicAnonKey } from "@/utils/supabase/info";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Zap, ArrowRight, ShoppingBasket as BasketIcon } from "lucide-react";

// CRITICAL FIX: Re-import all components with explicit paths - cache bust
import { Ticker } from "./components/paperware/ticker";
import { Industries } from "./components/paperware/industries";
import { AboutUs } from "./components/paperware/about-us";
import { ProductionTimeline } from "./components/paperware/production-timeline";
import { Hero } from "./components/paperware/hero";
import { ImmersiveHero } from "./components/paperware/immersive-hero";
import { Navbar } from "./components/paperware/navbar";
import { Footer } from "./components/paperware/footer";
import { AdminPanel } from "./components/paperware/admin-panel";
import { BackToTop } from "./components/paperware/back-to-top";
import { BottomNav } from "./components/paperware/bottom-nav";
import { HUDOverlay as SharedHUDOverlay } from "./components/paperware/hud-overlay";
import { WhoWeAreSection } from "./components/paperware/who-we-are";
import { ImpactMetrics } from "./components/paperware/impact-metrics";
import { PageDiscovery } from "./components/paperware/page-discovery";
import { RealtimeOps } from "./components/paperware/realtime-ops";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

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

// Use lazy loading for all non-essential pages to optimize initial bundle size
const AllProductsPage = React.lazy(() => import("./pages/all-products").then(module => ({ default: module.AllProductsPage })));
const PaperCupsPage = React.lazy(() => import("./pages/papercups").then(module => ({ default: module.PaperCupsPage })));
const AboutPage = React.lazy(() => import("./pages/about-us"));
const ClientsPage = React.lazy(() => import("./pages/clients").then(module => ({ default: module.ClientsPage })));
const ProductDetailsPage = React.lazy(() => import("./pages/product-details").then(module => ({ default: module.ProductDetailsPage })));
const OfficeStationaryPage = React.lazy(() => import("./pages/office-stationary").then(module => ({ default: module.OfficeStationaryPage })));
const RestaurantSuppliesPage = React.lazy(() => import("./pages/restaurant-supplies").then(module => ({ default: module.RestaurantSuppliesPage })));
const MarketingMaterialsPage = React.lazy(() => import("./pages/marketing-materials").then(module => ({ default: module.MarketingMaterialsPage })));
const PharmaSuppliesPage = React.lazy(() => import("./pages/pharma-supplies").then(module => ({ default: module.PharmaSuppliesPage })));
const FMCGSuppliesPage = React.lazy(() => import("./pages/fmcg-garments").then(module => ({ default: module.FMCGSuppliesPage })));
const GarmentSuppliesPage = React.lazy(() => import("./pages/garments").then(module => ({ default: module.GarmentSuppliesPage })));
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
const PartnerProgramPage = React.lazy(() => import("./pages/PartnerProgram").then(module => ({ default: module.PartnerProgramPage })));
const PartnersPage = React.lazy(() => import("./pages/partners").then(module => ({ default: module.PartnersPage })));
const BusinessPage = React.lazy(() => import("./pages/business").then(module => ({ default: module.BusinessPage })));
const CompanyPage = React.lazy(() => import("./pages/company").then(module => ({ default: module.CompanyPage })));
const CSRPage = React.lazy(() => import("./pages/csr").then(module => ({ default: module.CSRPage })));
const PrivacyPolicyPage = React.lazy(() => import("./pages/privacy-policy").then(module => ({ default: module.PrivacyPolicy })));

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
import imgFactoryIllustration from "figma:asset/f509e99bb4cc15f45dbb0d895480da5f9027b46c.png";
import imgHeroMobile from "figma:asset/7355363d5bbe4910fbf181181e9702179c6c7d50.png";

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

const DEFAULT_SIGNING_IMAGE = "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzcyUyMGRlYWwlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3Njc2OTM3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const DEFAULT_PARTNERS = [
  { id: "1", name: "Al Arabian", category: "Client", logo: imgAlArabian, description: "Strategic Partner" },
  { id: "2", name: "Fresh", category: "FMCG", logo: imgFresh, description: "Major Supplier" },
  { id: "3", name: "Bengal Classic Tea", category: "Beverage", logo: imgBengalClassicTea, description: "Packaging Partner" },
  { id: "4", name: "Cafe Z", category: "Restaurant", logo: imgCafeZ, description: "Food Service" },
  { id: "5", name: "Coffee Avenue", category: "Cafe", logo: imgCoffeeAvenue, description: "Premium Cups" },
  { id: "6", name: "Crimson Cup", category: "Global Chain", logo: imgCrimsoncup, description: "International Partner" },
  { id: "7", name: "Dhakai Khana", category: "Catering", logo: imgDhakaiKhana, description: "Food Packaging" },
  { id: "8", name: "Abdul Monem Ltd", category: "Conglomerate", logo: imgAbdulMonemLtd, description: "Industrial Partner" },
  { id: "9", name: "Walton", category: "Electronics", logo: imgWalton, description: "Packaging Solutions" },
  { id: "10", name: "Novatek", category: "Pharmaceuticals", logo: imgNovatek, description: "Medical Grade" },
  { id: "11", name: "MGI", category: "Industrial", logo: imgMgi, description: "Large Scale Partner" },
  { id: "12", name: "ICDDR,B", category: "Research", logo: imgIcddrb, description: "Sterile Supplies" }
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
  const [brochureUrl, setBrochureUrl] = React.useState("");
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
  const [partnersData, setPartnersData] = React.useState<any[]>(DEFAULT_PARTNERS);
  const [signingImage, setSigningImage] = React.useState(DEFAULT_SIGNING_IMAGE);
  const [aboutUsVideos, setAboutUsVideos] = React.useState<any>({});

  // Unified useScroll at root level to ensure non-static container context
  // Remove container reference to let useScroll use window by default
  const { scrollYProgress: rootScrollProgress } = useScroll();

  React.useEffect(() => {
    const tier = getDevicePerformanceTier();
    setPerformanceTier(tier);

    try {
      const heroVideo = localStorage.getItem('paperware_hero_video');
      if (heroVideo) setHeroVideoUrl(heroVideo);
      const brochure = localStorage.getItem('paperware_brochure');
      if (brochure) setBrochureUrl(brochure);
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
      const partnersStr = localStorage.getItem('paperware_partners');
      if (partnersStr) setPartnersData(JSON.parse(partnersStr));
      const signingImageStr = localStorage.getItem('paperware_signing_image');
      if (signingImageStr) setSigningImage(signingImageStr);
      const aboutUsVideosStr = localStorage.getItem('paperware_about_us_videos');
      if (aboutUsVideosStr) setAboutUsVideos(JSON.parse(aboutUsVideosStr));
    } catch (e) {
      console.warn('Failed to load storage:', e);
    }
  }, []);

  // Persistence Effects
  React.useEffect(() => {
    localStorage.setItem('paperware_partners', JSON.stringify(partnersData));
  }, [partnersData]);

  React.useEffect(() => {
    localStorage.setItem('paperware_signing_image', signingImage);
  }, [signingImage]);

  const handleBrochureDownload = React.useCallback(async () => {
    // Simulate getting location
    let location = "Unknown Location";
    let ip = "Anonymous";
    
    try {
      // Simple fetch to get public IP info (using free ipapi.co)
      // Note: In production, do this server-side to avoid CORS/limits
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      if (data.city && data.country_name) {
        location = `${data.city}, ${data.country_name}`;
        ip = data.ip;
      }
    } catch (e) {
      console.warn("Failed to fetch location", e);
    }

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-bf34c9a5/brochure/log`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          location,
          ip,
          device: navigator.userAgent,
          source: "Website Button"
        })
      });
      
      if (!response.ok) {
        console.error('Failed to log download:', await response.text());
      }
    } catch (e) {
      console.error("Failed to send log to server", e);
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
            
            {/* 1. IMMERSIVE HERO WITH VIDEO */}
            <div className="relative">
              <ImmersiveHero 
                videoUrl={heroVideoUrl} 
                brochureUrl={brochureUrl}
                onExplore={handlePageChange} 
                onDownload={handleBrochureDownload}
              />
            </div>

            {/* 2. LIVE TRACKER (Ticker) */}
            <div className="bg-white border-b border-zinc-100 py-3 overflow-hidden relative z-20">
              <Ticker />
            </div>

            {/* 3. ABOUT US */}
            <React.Suspense fallback={<div className="h-96 bg-white" />}>
               <WhoWeAreSection onReadMore={() => handlePageChange("about")} />
            </React.Suspense>

            {/* 4. INDUSTRIES WE SERVE */}
            <Industries onExplore={() => handlePageChange("products")} />

            {/* 5. FEATURED PRODUCTS (Signature Solutions) */}
            <section className="bg-white pt-32 pb-8 overflow-hidden relative">
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
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200"
                  >
                    <Zap className="size-3 text-[#fabf37]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Continuous Production</span>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl font-black tracking-tighter uppercase text-black"
                  >
                    Featured Products
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

              <div className="flex gap-8 px-4 md:px-12 overflow-hidden relative pb-10">
                <div className="flex gap-8 animate-ticker">
                  {[...productsData, ...productsData].map((product, idx) => (
                    <motion.div 
                      key={`${product.id}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: (idx % 6) * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="min-w-[320px] bg-white rounded-[40px] border border-zinc-100 p-8 space-y-6 group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => handleProductClick(product)}
                    >
                      <div className="aspect-square rounded-3xl overflow-hidden relative flex items-center justify-center bg-zinc-50">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ImageWithFallback 
                            src={product.image} 
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt={product.name}
                          />
                        </motion.div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-zinc-900 border border-zinc-200 shadow-sm">
                          {product.category}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-black tracking-tight group-hover:text-[#fabf37] transition-colors">{product.name}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                            <div className="size-1.5 bg-green-500 rounded-full" /> Ready
                          </div>
                          <div className="size-10 rounded-full bg-zinc-100 text-black flex items-center justify-center group-hover:bg-[#fabf37] transition-colors">
                            <BasketIcon className="size-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* IMPACT METRICS - SUSTAINABILITY STATS */}
            <React.Suspense fallback={null}>
               <ImpactMetrics />
            </React.Suspense>

            {/* 6. GLOBAL PARTNERS */}
            <section className="bg-zinc-50 pt-32 pb-8 overflow-hidden relative border-t border-zinc-200">
               {/* Simple Background */}
               <div className="absolute inset-0 pointer-events-none opacity-30">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:24px_24px]" />
               </div>

              <div className="max-w-7xl mx-auto px-4 md:px-12 text-center mb-20 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white mb-6 shadow-sm"
                >
                   <div className="size-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Trusted Network</span>
                </motion.div>
                
                {/* Section Title */}
                <div className="relative overflow-hidden pb-2">
                    <motion.h2 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                      className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500"
                    >
                      Global <span className="font-serif italic text-zinc-400">Partners</span>
                    </motion.h2>
                </div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-2 opacity-60">
                   Proudly serving <span className="text-[#fabf37]">200+</span> Enterprise Clients
                </p>
              </div>

              {/* Row 1 - Moving Left */}
              <div className="relative flex mb-8">
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-zinc-50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-zinc-50 to-transparent z-20 pointer-events-none" />
                
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex items-center gap-12 md:gap-24 px-8 min-w-max"
                >
                  {[...Array(4)].flatMap((_, i) => 
                    partnersData.slice(0, Math.max(1, Math.ceil(partnersData.length / 2))).map((partner: any, idx: number) => (
                      <motion.div 
                        key={`r1-${i}-${idx}`} 
                        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
                        className="h-16 md:h-20 w-auto opacity-40 grayscale transition-all duration-300 cursor-pointer"
                      >
                        <ImageWithFallback 
                          src={partner.logo} 
                          className="h-full w-auto object-contain" 
                          alt={partner.name}
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
                  className="flex items-center gap-12 md:gap-24 px-8 min-w-max"
                >
                  {[...Array(4)].flatMap((_, i) => 
                    partnersData.slice(Math.max(1, Math.ceil(partnersData.length / 2))).map((partner: any, idx: number) => (
                       <motion.div 
                        key={`r2-${i}-${idx}`} 
                        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
                        className="h-16 md:h-20 w-auto opacity-40 grayscale transition-all duration-300 cursor-pointer"
                      >
                        <ImageWithFallback 
                          src={partner.logo} 
                          className="h-full w-auto object-contain" 
                          alt={partner.name}
                        />
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </div>

              <div className="flex justify-center mt-12 relative z-10">
                <motion.button 
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => import("./pages/clients")}
                  onClick={() => handlePageChange("clients")}
                  className="group relative overflow-hidden bg-white border border-zinc-200 pl-6 pr-4 py-2.5 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl hover:border-[#fabf37] transition-all"
                >
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900 group-hover:text-[#fabf37] transition-colors">View Client Stories</span>
                   <div className="size-6 rounded-full bg-zinc-100 group-hover:bg-[#fabf37] flex items-center justify-center transition-colors">
                      <ArrowRight className="size-3 text-zinc-900" />
                   </div>
                </motion.button>
              </div>
            </section>

            {/* PAGE DISCOVERY - AUTO SCROLL */}
            <React.Suspense fallback={null}>
               <PageDiscovery onNavigate={handlePageChange} />
            </React.Suspense>

          </div>
        );
      case "about": return <AboutPage aboutUsVideos={aboutUsVideos} />;
      case "clients": return <ClientsPage videoUrl={clientsVideoUrl} productionStats={productionStats} onPageChange={handlePageChange} partnersData={partnersData} />;
      case "papercups": return <PaperCupsPage videoUrls={factoryVideos} onProductClick={handleProductClick} onPageChange={handlePageChange} />;
      case "products": return <AllProductsPage onProductClick={handleProductClick} onAddToQuote={addToQuoteBasket} onPageChange={handlePageChange} products={productsData} clientProjects={clientProjects} />;
      case "product-details": return <ProductDetailsPage product={quoteBasket[quoteBasket.length - 1]} onBack={() => setCurrentPage("products")} onAddToQuote={addToQuoteBasket} onContactClick={() => handlePageChange("contact")} />;
      case "office-stationary": return <OfficeStationaryPage onProductClick={handleProductClick} />;
      case "restaurant-supplies": return <RestaurantSuppliesPage onProductClick={handleProductClick} />;
      case "marketing-materials": return <MarketingMaterialsPage onProductClick={handleProductClick} />;
      case "pharma-supplies": return <PharmaSuppliesPage onProductClick={handleProductClick} />;
      case "fmcg-supplies": return <FMCGSuppliesPage onProductClick={handleProductClick} />;
      case "garments": return <GarmentSuppliesPage onProductClick={handleProductClick} />;
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
      case "partner-program": return (
        <React.Suspense fallback={<PageLoader />}>
          <PartnerProgramPage />
        </React.Suspense>
      );
      case "partners": return <PartnersPage partners={partnersData} signingImage={signingImage} />;
      case "business": return <BusinessPage />;
      case "company": return <CompanyPage onPageChange={handlePageChange} />;
      case "csr": return <CSRPage />;
      case "privacy-policy": return <PrivacyPolicyPage />;
      case "admin": return (
        <AdminDashboardPage 
          onLogout={() => handlePageChange("home")} 
          heroVideoUrl={heroVideoUrl}
          onUpdateHeroVideo={(url) => {
            setHeroVideoUrl(url);
            localStorage.setItem('paperware_hero_video', url);
          }}
          brochureUrl={brochureUrl}
          onUpdateBrochure={(url) => {
            setBrochureUrl(url);
            localStorage.setItem('paperware_brochure', url);
          }}
          heroVideoMobileUrl={heroVideoMobileUrl}
          onUpdateHeroVideoMobile={(url) => {
            setHeroVideoMobileUrl(url);
            localStorage.setItem('paperware_hero_video_mobile', url);
          }}
          clientsVideoUrl={clientsVideoUrl}
          onUpdateClientsVideo={(url) => {
            setClientsVideoUrl(url);
            localStorage.setItem('paperware_clients_video', url);
          }}
          heroContent={heroContent}
          onUpdateHeroContent={(content) => {
            setHeroContent(content);
            localStorage.setItem('paperware_hero_content', JSON.stringify(content));
          }}
          products={productsData}
          onUpdateProducts={(products) => {
            setProductsData(products);
            localStorage.setItem('paperware_products', JSON.stringify(products));
          }}
          clientProjects={clientProjects}
          onUpdateClientProjects={(projects) => {
            setClientProjects(projects);
            localStorage.setItem('paperware_client_projects', JSON.stringify(projects));
          }}
          partners={partnersData}
          onUpdatePartners={setPartnersData}
          aboutUsVideos={aboutUsVideos}
          onUpdateAboutUsVideos={(videos) => {
            setAboutUsVideos(videos);
            localStorage.setItem('paperware_about_us_videos', JSON.stringify(videos));
          }}
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
      <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        videoData={factoryVideos} 
        onUpdateVideos={setFactoryVideos} 
        heroVideoUrl={heroVideoUrl} 
        onUpdateHeroVideo={setHeroVideoUrl}
        partnersData={partnersData}
        onUpdatePartners={setPartnersData}
        signingImage={signingImage}
        onUpdateSigningImage={setSigningImage}
      />
      <HUDOverlay />
      <BackToTop />
    </div>
  );
}