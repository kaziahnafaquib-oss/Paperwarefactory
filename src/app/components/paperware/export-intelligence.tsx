import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { 
  Globe, Ship, Handshake, ArrowRight, Mail, ShieldCheck, TrendingUp,
  Leaf, Search, Check, Box
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

// --- 3D Tilt Component ---
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="h-full w-full">
         {children}
      </div>
    </motion.div>
  );
};

export function ExportIntelligence() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll Effects
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  // Decorative rotation based on total scroll
  const rotateGlobal = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <section ref={containerRef} className="bg-white min-h-screen pt-32 pb-24 overflow-hidden perspective-[2000px] relative">
      
      {/* Background Scroll Decorative Elements */}
      <motion.div style={{ rotate: rotateGlobal, y: headerY }} className="absolute top-20 left-[-100px] text-zinc-50 opacity-50 pointer-events-none z-0">
         <Globe className="size-[400px]" strokeWidth={0.5} />
      </motion.div>
      <motion.div style={{ rotate: rotateReverse }} className="absolute bottom-1/4 right-[-150px] text-zinc-50 opacity-50 pointer-events-none z-0">
         <Box className="size-[500px]" strokeWidth={0.5} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section with Parallax Fade */}
        <motion.div 
            style={{ y: headerY, opacity: headerOpacity }}
            className="max-w-4xl mx-auto text-center space-y-8 mb-24 relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: -50, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-[#fabf37] rounded-full text-[10px] font-black uppercase tracking-widest relative overflow-hidden group shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fabf37]/50 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <Globe className="size-3 relative z-10 animate-spin-slow" />
            <span className="relative z-10">Global Trade Ready</span>
          </motion.div>
          
          <div className="perspective-[1000px]">
            <motion.h1 
              initial={{ opacity: 0, rotateX: -90, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black drop-shadow-2xl"
            >
              Source Premium Packaging <br/> 
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-zinc-400 inline-block origin-center hover:scale-105 transition-transform cursor-default"
              >
                From Bangladesh.
              </motion.span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl font-medium text-zinc-500 max-w-2xl mx-auto leading-relaxed"
          >
            We are fully equipped, certified, and ready to export high-quality, sustainable paper solutions to international markets.
          </motion.p>
        </motion.div>

        {/* Hero Visual Section - 3D Layout with Parallax Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 perspective-[1000px]">
            
            {/* 3D Tilted Image Card with Internal Parallax */}
            <TiltCard className="group cursor-grab active:cursor-grabbing">
                <HeroImageParallax />
            </TiltCard>

            {/* Why Import From Us - Staggered Scroll Cards */}
            <div className="grid grid-cols-2 gap-6 perspective-[1000px]">
                {[
                  { icon: Leaf, title: "Sustainable", desc: "100% Traced Fibers" },
                  { icon: Search, title: "Quality", desc: "A+ Grade Index" },
                  { icon: ShieldCheck, title: "Eco-First", desc: "Zero Waste Vision" },
                  { icon: Check, title: "Precision", desc: "Automated Lines" }
                ].map((item, i) => (
                   <ScrollRevealCard key={i} index={i} item={item} />
                ))}
            </div>
        </div>

        {/* Stats Section - 3D Flip Cards with Horizontal Entry */}
        <div className="mb-32 perspective-[1000px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "HIGH DEMAND REGION", main: "GCC & MIDDLE EAST", status: "+24% STATUS", statusColor: "text-emerald-400" },
                    { label: "PREFERRED PACK SIZE", main: "1000 UNITS / BULK", status: "OPTIMAL STATUS", statusColor: "text-emerald-400" },
                    { label: "COMPLIANCE INDEX", main: "EU/US COMPLIANT", status: "100% STATUS", statusColor: "text-emerald-400" },
                    { label: "SHIPPING EFFICIENCY", main: "3.2 DAYS SAVINGS", status: "AI ROUTE STATUS", statusColor: "text-emerald-400" },
                ].map((stat, i) => (
                    <TiltCard key={i}>
                        <motion.div
                            initial={{ opacity: 0, rotateY: 90, x: 50 }}
                            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.8, type: "spring" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-black rounded-[40px] p-8 aspect-square flex flex-col justify-between text-white group hover:bg-[#fabf37] hover:text-black transition-colors duration-500 shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative Background Shape */}
                            <div className="absolute -right-10 -top-10 size-32 bg-white/5 rounded-full blur-2xl group-hover:bg-black/10 transition-colors" />

                            <p style={{ transform: "translateZ(20px)" }} className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-black/60 transition-opacity relative z-10">
                                {stat.label}
                            </p>
                            
                            <h3 style={{ transform: "translateZ(40px)" }} className="text-3xl font-black uppercase tracking-tighter leading-[0.85] group-hover:text-black transition-colors relative z-10">
                                {stat.main.split(' ').map((word, idx) => (
                                    <span key={idx} className="block">{word}</span>
                                ))}
                            </h3>
                            
                            <div style={{ transform: "translateZ(30px)" }} className="flex items-center gap-3 relative z-10">
                                 <motion.div
                                    animate={{ rotate: [0, 45, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="p-2 bg-white/10 rounded-full group-hover:bg-black/10"
                                 >
                                    <TrendingUp className={`size-4 ${stat.statusColor} group-hover:text-black`} />
                                 </motion.div>
                                 <span className={`text-[10px] font-black uppercase tracking-widest ${stat.statusColor} group-hover:text-black`}>
                                    {stat.status}
                                 </span>
                            </div>
                        </motion.div>
                    </TiltCard>
                ))}
            </div>
        </div>

        {/* Contact / CTA Section - Floating 3D */}
        <motion.div 
            initial={{ opacity: 0, y: 100, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
        >
             {/* 3D Floating Elements behind CTA */}
             <motion.div style={{ rotate: rotateGlobal }} className="absolute -top-12 -left-12 text-[#fabf37] opacity-50 z-0">
                <Box className="size-24" strokeWidth={1} />
             </motion.div>
             <motion.div style={{ rotate: rotateReverse }} className="absolute -bottom-8 -right-8 text-black opacity-10 z-0">
                <Globe className="size-32" strokeWidth={1} />
             </motion.div>

            <div className="bg-zinc-50/80 backdrop-blur-3xl rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden border border-white/50 shadow-[0_40px_80px_rgba(0,0,0,0.1)] z-10">
                <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                    <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="size-24 bg-black rounded-[30px] flex items-center justify-center text-[#fabf37] mx-auto shadow-2xl cursor-pointer"
                    >
                        <Handshake className="size-12" />
                    </motion.div>
                    
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-black">
                            Let's Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-500">Partnership</span>
                        </h2>
                        <p className="text-zinc-500 text-lg font-bold max-w-lg mx-auto">
                            Interested in importing our products? We are ready to discuss catalog, pricing, and shipping logistics.
                        </p>
                    </div>

                    <form className="bg-white p-3 rounded-[40px] border border-zinc-100 flex flex-col md:flex-row gap-3 max-w-xl mx-auto shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:-translate-y-1">
                        <input 
                            type="email" 
                            placeholder="Enter your business email..." 
                            className="flex-1 bg-transparent border-none text-black placeholder:text-zinc-400 px-8 py-4 focus:outline-none font-bold text-lg"
                        />
                        <motion.button 
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => alert("Thank you for your interest! Our export team will contact you shortly.")}
                            className="px-10 py-5 bg-black text-[#fabf37] rounded-[32px] font-black uppercase tracking-widest hover:bg-[#fabf37] hover:text-black transition-colors flex items-center justify-center gap-3 shadow-lg"
                        >
                            Knock Us <ArrowRight className="size-5" />
                        </motion.button>
                    </form>

                    <div className="flex items-center justify-center gap-8 pt-8 opacity-60 text-black">
                        <motion.div 
                            whileHover={{ scale: 1.1, color: "#fabf37" }}
                            className="flex items-center gap-2 cursor-pointer transition-colors"
                        >
                            <Mail className="size-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">export@paperware.bd</span>
                        </motion.div>
                        <div className="h-4 w-px bg-black/20" />
                        <div className="flex items-center gap-2">
                            <Ship className="size-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">MOQ: 10,000 Units</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}

// Sub-component for Hero Image Parallax to keep main component clean
function HeroImageParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, rotateY: -30, x: -50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative rounded-[60px] overflow-hidden aspect-square lg:aspect-[4/3] shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none" />
            <motion.div style={{ y, scale }} className="w-full h-full">
                <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1581744961504-f074e761ab52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMHBvcnQlMjBjb250YWluZXIlMjBleHBvcnQlMjBiYW5nbGFkZXNofGVufDF8fHx8MTc2NzM1MTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Global Shipping Container Port" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
            
            {/* Floating 3D Badge */}
            <motion.div 
                style={{ transform: "translateZ(80px)" }}
                className="absolute bottom-12 left-12 z-30 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-2xl border border-white/50"
            >
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Export Status</p>
                <div className="flex items-center gap-3">
                    <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                    </span>
                    <span className="font-black text-black text-lg">Open for Partnership</span>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Sub-component for Scroll Reveal Cards
function ScrollRevealCard({ index, item }: { index: number, item: any }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // Make even items move slightly differently than odd items for staggered parallax
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -10 : 10, 0]);

    return (
        <TiltCard className="h-full">
            <motion.div 
                ref={ref}
                style={{ y, rotateX: rotate, opacity: scrollYProgress }}
                className="aspect-square bg-white rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-zinc-100 p-8 flex flex-col items-center justify-center text-center gap-4 group h-full hover:shadow-2xl transition-shadow"
            >
                <motion.div 
                style={{ transform: "translateZ(30px)" }}
                className="size-16 rounded-2xl bg-zinc-50 border-2 border-[#fabf37] flex items-center justify-center text-[#fabf37] group-hover:bg-[#fabf37] group-hover:text-black transition-colors duration-500 shadow-lg"
                >
                <item.icon className="size-8" strokeWidth={2} />
                </motion.div>
                <div style={{ transform: "translateZ(20px)" }}>
                    <h4 className="text-xl font-black text-black uppercase tracking-tight leading-tight mb-1">
                    {item.title}
                    </h4>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {item.desc}
                    </p>
                </div>
            </motion.div>
        </TiltCard>
    );
}
