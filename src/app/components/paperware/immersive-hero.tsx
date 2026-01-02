import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Radio, ArrowRight, Activity, Globe as Globe2, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface ImmersiveHeroProps {
  videoUrl: string;
  onExplore: (page: string) => void;
}

export const ImmersiveHero = ({ videoUrl, onExplore }: ImmersiveHeroProps) => {
  const { t } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const videoOpacity = useTransform(scrollY, [0, 500], [0.6, 0.2]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden bg-[#000000] font-['Poppins',sans-serif]">
      {/* Background Video with Immersive Scale */}
      <motion.div 
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#d6c8a9]/10" />
      </motion.div>

      {/* Beige Gradient Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d6c8a9]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-[5]" />

      {/* Futuristic HUD Scanning Effect */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fabf37]/30 to-transparent z-10 pointer-events-none"
      />
      
      {/* Main Content Overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 md:space-y-10 max-w-7xl"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-[#d6c8a9]/30 mb-2">
            <div className="relative size-2">
              <div className="absolute inset-0 bg-[#fabf37] rounded-full animate-ping" />
              <div className="absolute inset-0 bg-[#fabf37] rounded-full" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#d6c8a9]">DHAKA_CENTRAL_HUB // v4.0 ACTIVE</span>
          </div>

          <h1 className="text-[40px] md:text-[120px] font-black tracking-tighter leading-[0.9] text-white uppercase flex flex-col items-center">
            <div className="flex overflow-hidden">
              {Array.from("Paperware").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2 + (i * 0.05)
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <span className="text-[#fabf37] inline-block relative mt-2 md:mt-0">
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Factory
              </motion.span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                className="absolute -bottom-2 left-0 h-1 bg-[#fabf37]/50 shadow-[0_0_10px_#fabf37]"
              />
            </span>
          </h1>

          <p className="text-sm md:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed tracking-wide">
            Pioneering the neural-precision era of eco-manufacturing. High-speed automation meets sustainable architectural excellence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 pt-6">
            <button 
              onClick={() => onExplore("manufacturing")}
              className="group relative overflow-hidden bg-[#fabf37] text-black px-10 md:px-14 py-4 md:py-6 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(250,191,55,0.2)]"
            >
              <span className="relative z-10">Initialize Factory</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            <button 
              onClick={() => onExplore("products")}
              className="group bg-[#d6c8a9]/10 backdrop-blur-xl text-white border border-[#d6c8a9]/30 px-10 md:px-14 py-4 md:py-6 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:bg-[#d6c8a9] hover:text-black"
            >
              System Catalog
            </button>
          </div>
        </motion.div>

        {/* Floating HUD Telemetry */}
        <div className="hidden lg:block absolute bottom-12 left-12 space-y-4 text-left">
          {[
            { icon: <Activity className="size-3" />, label: "THROUGHPUT", value: "2.4M/DAY" },
            { icon: <Zap className="size-3" />, label: "POWER_MODE", value: "SOLAR_HYBRID" },
            { icon: <ShieldCheck className="size-3" />, label: "QC_STATUS", value: "OPTIMAL" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + (i * 0.2) }}
              className="flex items-center gap-3"
            >
              <div className="text-[#fabf37]/50">{item.icon}</div>
              <div className="flex flex-col">
                <span className="text-[7px] font-black text-white/30 tracking-widest">{item.label}</span>
                <span className="text-[10px] font-black text-white tracking-widest">{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-3"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#fabf37] via-[#fabf37]/20 to-transparent" />
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#fabf37]/60">Sync Stream</span>
        </motion.div>
      </div>
      
      {/* HUD Corner Accents */}
      <div className="absolute top-12 left-12 size-12 border-t-2 border-l-2 border-white/10 rounded-tl-2xl" />
      <div className="absolute top-12 right-12 size-12 border-t-2 border-r-2 border-white/10 rounded-tr-2xl" />
    </section>
  );
};