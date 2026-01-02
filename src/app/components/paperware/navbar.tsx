import React from "react";
import image_2cf02ce26ccdbb62dfe9c412f2f673ebd0977bb2 from 'figma:asset/2cf02ce26ccdbb62dfe9c412f2f673ebd0977bb2.png';
import { Button } from "../ui/button";
import { Search, Phone, Send, ChevronDown, ShoppingBasket, Globe, Menu, X, Zap, Activity, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageCode, TranslationKey } from "../../lib/translations";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface NavbarProps {
  onPageChange: (id: string) => void;
  onProductClick: (product: any) => void;
  onSearchOpen: () => void;
  onEmailOpen: () => void;
  onAuthOpen: (type: 'admin' | 'client') => void;
  currentPage: string;
  quoteBasketCount?: number;
}

const getLinks = (t: (key: string) => string) => [
  { name: t('home') || "Home", id: "home" },
  {
    name: t('company') || "Company",
    id: "company",
    hasDropdown: true,
    items: [
      { name: t('about'), id: "about" },
      { name: t('clients'), id: "clients" },
      { name: t('sustainability'), id: "sustainability" },
      { name: t('compliance'), id: "compliance" },
      { name: t('future_plan'), id: "future-plan" }
    ]
  },
  { 
    name: t('all_products') || "All products", 
    id: "products",
    isMega: true,
    categories: [
      { 
        title: "PAPER CUPS", 
        id: "papercups",
        items: ["Single Wall", "Double Wall", "Ripple Wall", "Ice Cream Cups", "Vending Cups"]
      },
      { 
        title: "FOOD PACKAGING", 
        id: "restaurant-supplies",
        items: ["Lunch Boxes", "Burger Boxes", "Food Trays", "Pizza Boxes", "Noodle Boxes"]
      },
      { 
        title: "BAGS & CARRIERS", 
        id: "products",
        items: ["Handle Bags", "SOS Bags", "Flat Bags", "Bakery Bags", "Luxury Bags"]
      },
      { 
        title: "STATIONARY", 
        id: "office-stationary",
        items: ["Notebooks", "Envelopes", "Folders", "Letterheads", "Business Cards"]
      },
      { 
        title: "INDUSTRIAL", 
        id: "fmcg-supplies",
        items: ["Corrugated Boxes", "Shipping Cartons", "Protective Wraps", "Edge Protectors"]
      },
      { 
        title: "SPECIALTY", 
        id: "specialty",
        items: ["Gift Boxes", "Jewelry Boxes", "Display Stands"]
      },
      { 
        title: "MEDICAL & PHARMA", 
        id: "pharma-supplies",
        items: ["Medicine Boxes", "Blister Cards", "Leaflets", "Surgical Wraps"]
      }
    ]
  },
  { 
    name: t('solutions') || "Solutions", 
    id: "solutions",
    hasDropdown: true,
    items: [
      { name: "For Restaurants", id: "restaurant-supplies" },
      { name: "For Pharma", id: "pharma-supplies" },
      { name: "For FMCG", id: "fmcg-supplies" },
      { name: "For Marketing", id: "marketing-materials" }
    ]
  },
  {
    name: t('business') || "Business",
    id: "business",
    hasDropdown: true,
    items: [
      { name: "Business Solutions", id: "business" },
      { name: "Partner Program", id: "partners" },
      { name: "Investor Relations", id: "investor" },
      { name: "Franchise", id: "franchise" }
    ]
  },
  { 
    name: t('manufacturing'), 
    id: "manufacturing",
    hasDropdown: true,
    items: [
      { name: t('factory_live') || "Factory Live", id: "factory-live" },
      { name: t('machinery') || "Machinery", id: "manufacturing" },
      { name: t('material_lab') || "Material Lab", id: "manufacturing" }
    ]
  },
  { name: t('export_intelligence') || "Export intelligence", id: "export" },
  { 
    name: t('more'), 
    id: "more",
    hasDropdown: true,
    items: [
      { name: t('erp_smart_factory'), id: "erp" },
      { name: t('impact_dashboard'), id: "impact-dashboard" },
      { name: t('studio_interactive'), id: "studio" },
      { name: t('track_order'), id: "tracking" },
      { name: t('product_gallery'), id: "gallery" },
      { name: t('social_hub'), id: "socials" },
      { name: t('career'), id: "career" },
      { name: t('faq'), id: "faq" }
    ]
  },
  { name: t('contact'), id: "contact" }
];

export const Navbar = React.memo(({
  onPageChange,
  onProductClick,
  currentPage,
  onSearchOpen,
  onEmailOpen,
  onAuthOpen,
  quoteBasketCount = 0
}: NavbarProps) => {
  const { t, language, setLanguage, tone, setTone } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const isOpeningRef = React.useRef(false);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const links = React.useMemo(() => getLinks(t), [t]);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  React.useEffect(() => {
    const bottomNav = document.querySelector('nav.fixed.bottom-0');
    if (bottomNav) {
      (bottomNav as HTMLElement).style.display = isMobileMenuOpen ? 'none' : '';
    }
  }, [isMobileMenuOpen]);

  const handleDropdownToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    isOpeningRef.current = true;
    const newState = activeDropdown === id ? null : id;
    setActiveDropdown(newState);
    setTimeout(() => {
      isOpeningRef.current = false;
    }, 100);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpeningRef.current) return;
      const target = e.target as HTMLElement;
      if (target.closest('[data-dropdown]') || target.closest('[data-dropdown-trigger]')) return;
      setActiveDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleInternalPageChange = React.useCallback((id: string) => {
    onPageChange(id);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [onPageChange]);

  return (
    <Tooltip.Provider>
      <nav 
        className={`${isMobileMenuOpen ? 'top-0 left-0 w-full h-full z-[2000]' : 'top-0 left-0 w-full z-[1001]'} font-['Poppins',sans-serif]`}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          transform: 'translate3d(0, 0, 0)', willChange: 'transform',
          isolation: 'isolate', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden',
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat', mixBlendMode: 'overlay',
          }} />
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[1000] lg:hidden"
            />
          )}
        </AnimatePresence>

        <div className="fixed top-0 left-0 right-0 flex flex-col items-center pointer-events-none z-[5000]">
          <div className="w-full h-8 bg-[#fabf37] flex items-center justify-between px-4 md:px-8 pointer-events-auto relative z-[5001] shadow-md">
            <div className="flex items-center gap-2">
              <Cpu className="size-3 text-black" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black">Factory Automation: Active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline-block text-[9px] font-black uppercase tracking-[0.2em] text-black/60">System v4.0</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-black/10 rounded-full border border-black/5">
                <motion.div 
                  animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="size-1.5 bg-red-500 rounded-full"
                />
                <span className="text-[8px] font-black uppercase tracking-widest text-black">LIVE</span>
              </div>
            </div>
          </div>

          <div 
            className="w-[92%] max-w-[1180px] mt-4 relative flex items-center justify-between h-[48px] md:h-[58px] rounded-full px-2 md:px-4 border border-black/10 group/nav z-[1100] overflow-visible pointer-events-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(250,249,246,0.96) 100%)',
              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',
              boxShadow: '0px 20px 60px -15px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 0 1px rgba(255,255,255,0.7)',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fabf37]/5 to-transparent pointer-events-none"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            />
            
            {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
              <motion.div
                key={i} className={`absolute ${pos} z-10`}
                initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                <div className="relative size-3">
                  <div className={`absolute ${i % 2 === 0 ? 'top-0 left-0' : 'top-0 right-0'} w-2 h-[1px] bg-[#fabf37]`} />
                  <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-[1px] h-2 bg-[#fabf37]`} />
                </div>
              </motion.div>
            ))}

            <div className="flex-shrink-0 pl-1 md:pl-3 relative z-30">
              <button onClick={() => handleInternalPageChange("home")} className="focus:outline-none relative active:scale-95 transition-transform">
                <motion.img src={image_2cf02ce26ccdbb62dfe9c412f2f673ebd0977bb2} alt="Paperware Logo" className="h-[50px] md:h-[64px] w-auto object-contain py-1 scale-110 md:scale-115 translate-y-1" />
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-0 flex-1 justify-start pl-2 md:pl-4 relative z-20">
              {links.map((link) => {
                const isHome = link.id === "home";
                const isActive = currentPage === link.id || activeDropdown === link.id;
                
                return (
                  <div 
                    key={link.id + link.name} 
                    className="relative group/link"
                    onMouseEnter={() => (link.hasDropdown || link.isMega) && handleMouseEnter(link.id || "")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Tooltip.Root delayDuration={300}>
                      <Tooltip.Trigger asChild>
                        <button
                          data-dropdown-trigger="true"
                          onClick={() => handleInternalPageChange(link.id || "home")}
                          className={`text-[10px] md:text-[10.5px] font-bold transition-all px-1.5 md:px-2 py-1 flex items-center gap-1 relative overflow-hidden ${
                            isHome ? "bg-white border-[2px] border-black rounded-full text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none mx-2 px-3"
                                   : isActive ? "text-black" : "text-[#8e8e8e] hover:text-black"
                          }`}
                        >
                          {!isHome && (
                            <motion.span className="absolute inset-0 rounded-full" style={{ backgroundColor: "rgba(250, 191, 55, 0.1)" }} initial={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1.1, opacity: 1 }} transition={{ duration: 0.3 }} />
                          )}
                          {isActive && !isHome && (
                             <motion.div layoutId="navbar-underline" className="absolute bottom-0 left-0 w-full h-[3px] bg-[#fabf37]" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.3 }} />
                          )}
                          <span className={`relative z-10 transition-transform duration-300 ${!isHome ? 'hover:scale-110' : ''}`}>
                            {link.name}
                          </span>
                          {(link.hasDropdown || link.isMega) && (
                            <ChevronDown className={`size-2.5 transition-transform relative z-10 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />
                          )}
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content className="bg-black text-[#fabf37] px-2 py-1 rounded-md text-[7px] font-black uppercase tracking-wider shadow-xl border border-[#fabf37]/20" sideOffset={5}>
                          Navigate to {link.name}
                          <Tooltip.Arrow className="fill-black" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>

                    <AnimatePresence>
                      {activeDropdown === link.id && link.hasDropdown && !link.isMega && (
                        <motion.div
                          data-dropdown="true"
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 z-[2000] pt-4 w-[240px]"
                        >
                          <div className="bg-white/95 backdrop-blur-xl rounded-[24px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] border border-black/[0.05] overflow-hidden p-3 space-y-1 transform-gpu">
                            {link.items?.map((item: any, i: number) => (
                              <motion.button
                                key={item.id + item.name}
                                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                                onClick={() => handleInternalPageChange(item.id)}
                                className="w-full flex items-center justify-between px-6 py-4 rounded-full bg-[#f3f3f5] hover:bg-[#fabf37] group transition-all text-left relative overflow-hidden"
                              >
                                <span className="text-[11px] font-black uppercase tracking-widest text-black/70 group-hover:text-black transition-colors relative z-10">{item.name}</span>
                                <ChevronDown className="size-3 text-black/20 group-hover:text-black -rotate-90 transition-all relative z-10" />
                                <div className="absolute inset-0 bg-[#fabf37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <AnimatePresence>
                {links.map((link) => (
                  activeDropdown === link.id && link.isMega && (
                    <motion.div
                      key={link.id}
                      data-dropdown="true"
                      onMouseEnter={() => handleMouseEnter(link.id || "")}
                      onMouseLeave={handleMouseLeave}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-[calc(100%+8px)] left-0 w-full z-[2000] flex justify-center px-4"
                    >
                      <div className="w-full max-w-[1000px] rounded-[32px] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.18)] border border-black/10 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,247,242,0.95) 100%)', backdropFilter: 'blur(30px) saturate(180%)' }}>
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
                        <motion.div className="absolute inset-0 rounded-[32px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(250,191,55,0.1), transparent)' }} animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
                        
                        <div className="p-6 md:p-10 relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <motion.div className="size-2 bg-[#fabf37] rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                              <span className="font-mono text-[8px] text-black/20 tracking-[0.2em] uppercase">: Manufacturing_Active_044</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {[1,2,3,4,5,6].map(i => <motion.div key={i} className="w-3 h-[1px] bg-black/[0.08]" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} />)}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 border-t border-black/[0.03]">
                            {link.categories?.map((cat: any, idx: number) => (
                              <motion.div 
                                key={cat.id} 
                                className="p-6 border-r border-b border-black/[0.04] last:border-r-0 transition-all relative group/item overflow-hidden"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                                whileHover={{ background: 'linear-gradient(135deg, rgba(250,191,55,0.03) 0%, rgba(250,191,55,0.01) 100%)' }}
                              >
                                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#fabf37]/5 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none" />
                                <div className="absolute top-4 right-6 font-mono text-[8px] text-black/10 tracking-widest group-hover/item:text-[#fabf37]/40 transition-colors">[{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]</div>

                                <div className="space-y-6 relative z-10">
                                  <div className="flex items-center gap-2">
                                    <motion.div className="size-1 bg-[#fabf37] rounded-full shadow-[0_0_8px_rgba(250,191,55,0.4)]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }} />
                                    <h4 className="text-[10.5px] font-black uppercase text-black tracking-[0.15em] group-hover/item:text-[#fabf37] transition-colors">{cat.title}</h4>
                                  </div>
                                  <div className="flex flex-col gap-1.5">
                                    {cat.items.map((sub: string, subIdx: number) => (
                                      <motion.button
                                        key={sub} onClick={() => handleInternalPageChange(cat.id)}
                                        className="w-full flex items-center justify-between px-3 py-1.5 rounded-full bg-[#f3f3f5] hover:bg-[#fabf37] group/subitem transition-all text-left relative overflow-hidden"
                                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 + subIdx * 0.02 }}
                                      >
                                        <span className="text-[9px] font-black uppercase tracking-widest text-black/60 group-hover/subitem:text-black transition-colors relative z-10">{sub}</span>
                                        <div className="absolute inset-0 bg-[#fabf37]/10 opacity-0 group-hover/subitem:opacity-100 transition-opacity" />
                                      </motion.button>
                                    ))}
                                  </div>
                                </div>
                                <div className="absolute bottom-2 left-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                  <div className="w-2 h-[1px] bg-[#fabf37]/30" />
                                  <div className="w-[1px] h-2 bg-[#fabf37]/30" />
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div className="mt-2 pt-4 border-t border-black/[0.03] flex items-center justify-between" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <motion.div className="size-1 bg-green-500 rounded-full" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                                <span className="font-mono text-[7px] text-black/30 uppercase tracking-[0.2em]">Global_Sync: Stable</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Activity className="size-2.5 text-black/20" />
                                <span className="font-mono text-[7px] text-black/30 uppercase tracking-[0.2em]">{link.categories?.length || 0} Categories Active</span>
                              </div>
                            </div>
                            <motion.button onClick={() => handleInternalPageChange('products')} className="text-[8px] font-black uppercase tracking-widest text-black/40 hover:text-[#fabf37] underline underline-offset-4 transition-colors flex items-center gap-1 group" whileHover={{ x: 2 }}>
                              <span>Explore Full Catalog</span>
                              <motion.span className="opacity-0 group-hover:opacity-100" animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
                            </motion.button>
                          </motion.div>
                        </div>
                        
                        {[{ pos: 'top-3 left-3', rot: 0 }, { pos: 'top-3 right-3', rot: 90 }, { pos: 'bottom-3 left-3', rot: -90 }, { pos: 'bottom-3 right-3', rot: 180 }].map((corner, i) => (
                          <motion.div key={i} className={`absolute ${corner.pos} size-4`} style={{ rotate: corner.rot }} animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}>
                            <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#fabf37]/40" />
                            <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#fabf37]/40" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-1 relative z-20">
              <div className="flex items-center h-[36px] md:h-[44px] bg-[#f8f7f2] rounded-full px-1.5 border border-black/5 shadow-inner relative overflow-hidden">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x: ['-200%', '200%'] }} transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }} />
                
                <div className="relative z-10">
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button 
                        data-dropdown-trigger="true"
                        onMouseEnter={() => handleMouseEnter("portal")}
                        onMouseLeave={handleMouseLeave}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (closeTimeoutRef.current) {
                            clearTimeout(closeTimeoutRef.current);
                            closeTimeoutRef.current = null;
                          }
                          setActiveDropdown("portal");
                        }}
                        className="flex items-center gap-1 px-2.5 md:px-3 h-[28px] md:h-[34px] bg-white rounded-full shadow-sm border border-black/5 hover:border-[#fabf37]/20 transition-all group relative overflow-hidden"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-[#fabf37]/0 via-[#fabf37]/10 to-[#fabf37]/0" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.6 }} />
                          <span className="text-[7.5px] md:text-[8px] font-black uppercase tracking-widest text-black relative z-10">Portal</span>
                          <ChevronDown className={`size-2 text-black/30 transition-transform relative z-10 ${activeDropdown === "portal" ? "rotate-180" : ""}`} />
                        
                        <DropdownMenu.Root open={activeDropdown === 'portal'} onOpenChange={(open) => !open && setActiveDropdown(null)}>
                          <DropdownMenu.Trigger asChild>
                            <div className="absolute inset-0 pointer-events-none opacity-0" />
                          </DropdownMenu.Trigger>
                          <DropdownMenu.Portal>
                            <DropdownMenu.Content className="z-[6000] outline-none" side="bottom" align="end" sideOffset={8}>
                              <motion.div initial={{ opacity: 0, y: 5, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.15 }} className="min-w-[200px]">
                                <div className="bg-white border border-black/10 rounded-2xl p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden relative">
                                   <div className="absolute top-2 left-2 size-2">
                                      <div className="absolute top-0 left-0 w-1.5 h-[1px] bg-[#fabf37]/30" />
                                      <div className="absolute top-0 left-0 w-[1px] h-1.5 bg-[#fabf37]/30" />
                                   </div>
                                   <motion.button onClick={() => { onAuthOpen('client'); setActiveDropdown(null); }} className="w-full text-left px-4 py-3 text-[9px] font-black uppercase bg-[#f4f4f5] hover:bg-[#eaeaea] rounded-xl transition-all group flex items-center justify-between relative overflow-hidden mb-2" whileHover={{ x: 2 }}>
                                      <div className="flex items-center gap-2.5">
                                        <Globe className="size-3 text-black/40 group-hover:text-black transition-colors" />
                                        <span className="relative z-10 text-black tracking-wider">Client Portal</span>
                                      </div>
                                      <motion.span className="text-black/20 group-hover:text-black text-[10px]" initial={{ x: -5, opacity: 0 }} whileHover={{ x: 0, opacity: 1 }}>→</motion.span>
                                   </motion.button>
                                   <motion.button onClick={() => { onAuthOpen('admin'); setActiveDropdown(null); }} className="w-full text-left px-4 py-3 text-[9px] font-black uppercase bg-gradient-to-r from-[#fabf37] to-[#ffd060] rounded-xl shadow-sm hover:shadow-md transition-all group flex items-center justify-between relative overflow-hidden" whileHover={{ x: 2, scale: 1.02 }}>
                                      <motion.div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} />
                                      <div className="flex items-center gap-2.5">
                                        <Cpu className="size-3 text-black/40 group-hover:text-black relative z-10" />
                                        <span className="relative z-10 text-black tracking-wider">Admin HQ</span>
                                      </div>
                                   </motion.button>
                                </div>
                              </motion.div>
                            </DropdownMenu.Content>
                          </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content className="bg-black text-[#fabf37] px-2 py-1 rounded-md text-[7px] font-black uppercase tracking-wider shadow-xl border border-[#fabf37]/20" sideOffset={5}>
                        Access Portal
                        <Tooltip.Arrow className="fill-black" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </div>

                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <motion.button onClick={() => handleInternalPageChange('quotation-basket')} className="relative size-[28px] md:size-[34px] bg-black rounded-full flex items-center justify-center shadow-lg mx-1 group overflow-hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-[#fabf37]/20 to-transparent" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
                      <ShoppingBasket className="size-3 md:size-3.5 text-[#fabf37] relative z-10" />
                      {quoteBasketCount > 0 && (
                        <motion.div className="absolute -top-0.5 -right-0.5 size-3 bg-[#fabf37] rounded-full flex items-center justify-center border border-black" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 500, damping: 15 }}>
                          <span className="text-[5px] font-black text-black">{quoteBasketCount}</span>
                        </motion.div>
                      )}
                    </motion.button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className="bg-black text-[#fabf37] px-2 py-1 rounded-md text-[7px] font-black uppercase tracking-wider shadow-xl border border-[#fabf37]/20" sideOffset={5}>
                      Quote Basket {quoteBasketCount > 0 && `(${quoteBasketCount})`}
                      <Tooltip.Arrow className="fill-black" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>

                <div className="w-[1px] h-3 bg-black/10 mx-1 relative z-10" />

                <div className="flex items-center gap-0.5 md:gap-1 pr-1 relative z-10">
                  <DropdownMenu.Root>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <DropdownMenu.Trigger asChild>
                          <button 
                            className="p-1 text-black transition-all relative group flex items-center justify-center outline-none"
                          >
                             <div className="absolute inset-0 bg-[#fabf37]/20 rounded-full" />
                             <motion.span 
                               key={language} 
                               animate={{ 
                                 rotate: [0, 15, -10, 5, 0],
                                 scale: [1, 1.1, 1],
                                 filter: ["drop-shadow(0 0 0px rgba(0,0,0,0))", "drop-shadow(0 4px 6px rgba(0,0,0,0.2))", "drop-shadow(0 0 0px rgba(0,0,0,0))"]
                               }}
                               transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                               className="text-[14px] leading-none relative z-10 origin-bottom inline-block"
                             >
                               {(() => {
                                  const flags: Record<string, string> = {
                                    'EN': '🇺🇸', 'BN': '🇧🇩', 'AR': '🇸🇦', 'TR': '🇹🇷', 'ES': '🇪🇸', 'FR': '🇫🇷', 
                                    'DE': '🇩🇪', 'JP': '🇯🇵', 'CN': '🇨🇳', 'IN': '🇮🇳', 'RU': '🇷🇺', 'PT': '🇵🇹',
                                    'IT': '🇮🇹', 'KR': '🇰🇷', 'VN': '🇻🇳', 'TH': '🇹🇭', 'NL': '🇳🇱', 'ID': '🇮🇩'
                                  };
                                  return flags[language] || '🌐';
                               })()}
                             </motion.span>
                          </button>
                        </DropdownMenu.Trigger>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content className="bg-black text-white px-2 py-1 rounded-md text-[7px] font-bold uppercase tracking-wider shadow-xl z-[6000]" sideOffset={5}>
                          Language
                          <Tooltip.Arrow className="fill-black" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="z-[6000] outline-none" sideOffset={10} align="end">
                        <motion.div
                          initial={{ opacity: 0, y: 5, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          className="w-[350px] bg-white border border-black/10 rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden p-3 font-['Poppins',sans-serif]"
                        >
                           {/* Header */}
                           <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/5">
                             <h4 className="text-[9px] font-black text-black/40 uppercase tracking-[0.2em]">Neural Node Selection</h4>
                             <div className="flex items-center gap-2">
                                 <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                                 <span className="text-[8px] font-bold text-black/40 uppercase tracking-widest">OS v2.5 Terminal</span>
                             </div>
                           </div>

                           <div className="grid grid-cols-2 gap-1.5 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                              {[
                                { code: "EN", name: "English", flag: "🇺🇸" },
                                { code: "BN", name: "বাংলা", flag: "🇧🇩" },
                                { code: "AR", name: "العربية", flag: "🇸🇦" },
                                { code: "TR", name: "Türkçe", flag: "🇹🇷" },
                                { code: "ES", name: "Español", flag: "🇪🇸" },
                                { code: "FR", name: "Français", flag: "🇫🇷" },
                                { code: "DE", name: "Deutsch", flag: "🇩🇪" },
                                { code: "IT", name: "Italiano", flag: "🇮🇹" },
                                { code: "PT", name: "Português", flag: "🇵🇹" },
                                { code: "RU", name: "Русский", flag: "🇷🇺" },
                                { code: "ZH", name: "中文", flag: "🇨🇳" },
                                { code: "JA", name: "日本語", flag: "🇯🇵" },
                                { code: "KO", name: "한국어", flag: "🇰🇷" },
                                { code: "HI", name: "हिन्दी", flag: "🇮🇳" },
                                { code: "ID", name: "Indonesia", flag: "🇮🇩" },
                                { code: "MS", name: "Malay", flag: "🇲🇾" },
                                { code: "VI", name: "Tiếng Việt", flag: "🇻🇳" },
                                { code: "TH", name: "ไทย", flag: "🇹🇭" },
                                { code: "NL", name: "Nederlands", flag: "🇳🇱" },
                                { code: "PL", name: "Polski", flag: "🇵🇱" },
                                { code: "SV", name: "Svenska", flag: "🇸🇪" },
                                { code: "NO", name: "Norsk", flag: "🇳🇴" },
                                { code: "FI", name: "Suomi", flag: "🇫🇮" },
                                { code: "DA", name: "Dansk", flag: "🇩🇰" },
                                { code: "EL", name: "Ελληνικά", flag: "🇬🇷" },
                                { code: "HE", name: "עברית", flag: "🇮🇱" },
                                { code: "CS", name: "Čeština", flag: "🇨🇿" },
                                { code: "HU", name: "Magyar", flag: "🇭🇺" },
                                { code: "RO", name: "Română", flag: "🇷🇴" },
                                { code: "UK", name: "Українська", flag: "🇺🇦" },
                                { code: "SK", name: "Slovenčina", flag: "🇸🇰" },
                                { code: "BG", name: "Български", flag: "🇧🇬" },
                                { code: "HR", name: "Hrvatski", flag: "🇭🇷" },
                                { code: "LT", name: "Lietuvių", flag: "🇱🇹" },
                                { code: "LV", name: "Latviešu", flag: "🇱🇻" },
                                { code: "ET", name: "Eesti", flag: "🇪🇪" },
                                { code: "SL", name: "Slovenščina", flag: "🇸🇮" },
                                { code: "MT", name: "Malti", flag: "🇲🇹" },
                                { code: "IS", name: "Íslenska", flag: "🇮🇸" },
                                { code: "GA", name: "Gaeilge", flag: "🇮🇪" },
                                { code: "SQ", name: "Shqip", flag: "🇦🇱" },
                                { code: "MK", name: "Македонски", flag: "🇲🇰" },
                                { code: "HY", name: "Հայերեն", flag: "🇦🇲" },
                                { code: "KA", name: "ქართული", flag: "🇬🇪" }
                              ].map((lang) => (
                                <DropdownMenu.Item 
                                  asChild 
                                  key={lang.code}
                                  onSelect={() => setLanguage(lang.code as LanguageCode)}
                                >
                                  <button
                                    className={`relative w-full text-left px-3 py-2 rounded-xl transition-all flex items-center gap-2 group/lang overflow-hidden outline-none ${
                                      language === lang.code 
                                        ? "bg-[#fabf37] text-black shadow-sm" 
                                        : "bg-zinc-50 hover:bg-zinc-100 text-black/70"
                                    }`}
                                  >
                                    <span className="text-base">{lang.flag}</span>
                                    <div className="flex flex-col">
                                       <span className={`text-[10px] font-black uppercase tracking-wider ${language === lang.code ? "text-black" : "text-black/80 group-hover/lang:text-black transition-colors"}`}>{lang.code}</span>
                                       <span className={`text-[8px] font-bold uppercase tracking-wider ${language === lang.code ? "text-black/60" : "text-black/40"}`}>{lang.name}</span>
                                    </div>
                                    
                                    {language === lang.code && (
                                       <div className="absolute right-3 top-1/2 -translate-y-1/2 size-1.5 bg-black rounded-full" />
                                    )}
                                  </button>
                                </DropdownMenu.Item>
                              ))}
                           </div>

                           {/* Footer */}
                           <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/5">
                             <span className="text-[8px] font-black text-black/30 uppercase tracking-[0.2em]">46 Neural Nodes Active</span>
                             <span className="text-[8px] font-black text-black/30 uppercase tracking-[0.2em]">Sync: Optimal</span>
                           </div>
                        </motion.div>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>

                  {[
                    { icon: Search, action: onSearchOpen, label: "Search" },
                    { icon: Phone, action: () => window.location.href="tel:+8809638011101", label: "Call Us" },
                    { icon: Send, action: onEmailOpen, label: "Email" }
                  ].map((item, idx) => (
                    <Tooltip.Root key={idx}>
                      <Tooltip.Trigger asChild>
                        <motion.button type="button" onClick={(e) => { e.stopPropagation(); item.action(); }} className="p-1 text-black/60 hover:text-black transition-all relative group" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <motion.div className="absolute inset-0 bg-[#fabf37]/10 rounded-full" initial={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1, opacity: 1 }} />
                          <item.icon className="size-3 md:size-3.5 relative z-10" />
                        </motion.button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content className="bg-black text-white px-2 py-1 rounded-md text-[7px] font-bold uppercase tracking-wider shadow-xl" sideOffset={5}>
                          {item.label}
                          <Tooltip.Arrow className="fill-black" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  ))}
                </div>
              </div>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setIsMobileMenuOpen(prev => !prev);
                    }} 
                    className="p-1.5 md:p-2 text-black/60 hover:text-black transition-all ml-0.5 relative group cursor-pointer" 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <motion.div className="absolute inset-0 bg-[#fabf37]/10 rounded-full" initial={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1, opacity: 1 }} />
                    {isMobileMenuOpen ? (
                      <motion.div initial={{ rotate: 0 }} animate={{ rotate: 90 }} transition={{ duration: 0.3 }}>
                        <X className="size-5 text-[#fabf37] relative z-10" />
                      </motion.div>
                    ) : (
                      <Menu className="size-5 relative z-10" />
                    )}
                  </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className="bg-black text-white px-2 py-1 rounded-md text-[7px] font-bold uppercase tracking-wider shadow-xl" sideOffset={5}>
                    {isMobileMenuOpen ? 'Close' : 'Menu'}
                    <Tooltip.Arrow className="fill-black" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[94%] max-w-[1180px] bg-[#d6c8a9] border-2 border-black rounded-[32px] md:rounded-[48px] shadow-2xl p-4 md:p-6 font-['Poppins',sans-serif] max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar z-[1100] lg:hidden"
            >
               <div className="flex flex-col gap-2">
                 {links.map((link) => (
                   <div key={link.id} className="border-b border-black/10 last:border-0 pb-2 last:pb-0">
                     <button 
                       onClick={() => {
                         if (link.hasDropdown || link.isMega) {
                           setActiveDropdown(activeDropdown === link.id ? null : link.id);
                         } else {
                           handleInternalPageChange(link.id || "home");
                         }
                       }}
                       className="w-full flex items-center justify-between py-2 text-left"
                     >
                       <span className="text-sm font-bold uppercase tracking-wider text-black">{link.name}</span>
                       {(link.hasDropdown || link.isMega) && <ChevronDown className={`size-4 transition-transform ${activeDropdown === link.id ? 'rotate-180' : ''}`} />}
                     </button>
                     
                     <AnimatePresence>
                       {(activeDropdown === link.id && (link.hasDropdown || link.isMega)) && (
                         <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                           {link.isMega ? link.categories?.map((cat: any) => (
                             <div key={cat.id} className="py-2">
                               <div className="text-[10px] font-black uppercase text-[#fabf37] mb-1">{cat.title}</div>
                               {cat.items.map((item: string) => (
                                 <button key={item} onClick={() => handleInternalPageChange(cat.id)} className="block w-full text-left py-1 text-[11px] text-black/70 hover:text-black">{item}</button>
                               ))}
                             </div>
                           )) : link.items?.map((item: any) => (
                             <button key={item.id} onClick={() => handleInternalPageChange(item.id)} className="block w-full text-left py-2 text-[11px] font-bold uppercase text-black/70 hover:text-black">
                               {item.name}
                             </button>
                           ))}
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                 ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </Tooltip.Provider>
  );
});

Navbar.displayName = "Navbar";
