import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Package, Scan, FileText, User } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface BottomNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const BottomNav = React.memo(({ currentPage, onPageChange }: BottomNavProps) => {
  const { t } = useLanguage();
  const navItems = [
    { id: "home", label: t('home'), icon: <Home className="size-5" /> },
    { id: "products", label: t('all_products'), icon: <Package className="size-5" /> },
    { id: "product-feedback", label: t('product_feedback'), icon: <Scan className="size-5" /> },
    { id: "quote", label: t('request_quote'), icon: <FileText className="size-5" /> },
    { id: "client-portal", label: t('client_portal'), icon: <User className="size-5" /> },
  ];

  return (
    <nav className="md:hidden fixed bottom-4 left-0 right-0 z-[999999] flex justify-center pointer-events-none pb-safe">
      <div 
        className="w-[96%] max-w-[400px] flex items-center justify-between h-[60px] rounded-full px-6 border border-black/10 pointer-events-auto relative overflow-hidden shadow-[0px_20px_60px_-15px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(250,249,246,0.96) 100%)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        }}
      >
        {/* Scan line animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fabf37]/5 to-transparent pointer-events-none"
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        />

        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className="relative flex flex-col items-center justify-center gap-1 group w-10 h-full"
            >
              <div className={`transition-all duration-300 ${isActive ? "text-[#fabf37] -translate-y-1 scale-110" : "text-black/40 group-hover:text-black scale-100"}`}>
                {item.icon}
              </div>
              
              {/* Active Dot */}
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-3 size-1 bg-[#fabf37] rounded-full shadow-[0_0_8px_rgba(250,191,55,0.6)]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
});

BottomNav.displayName = "BottomNav";