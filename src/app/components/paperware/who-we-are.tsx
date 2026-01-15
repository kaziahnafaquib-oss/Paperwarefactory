import React from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight, Factory, Leaf, Award, Recycle, Users, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface WhoWeAreProps {
  onReadMore: () => void;
}

// Mock Data - In a real app, this would be passed as a prop or fetched from the backend (admin portal)
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Chief Sustainability Officer",
    image: "https://images.unsplash.com/photo-1757405934467-21fc25c60660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBwb3J0cmFpdCUyMGRpdmVyc2UlMjBidXNpbmVzcyUyMHRlYW0lMjBtZW1iZXIlMjBzbWlsaW5nJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY3ODkwNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1752118465028-4a135f89e474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXQlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njc4OTA3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1758691737610-1f18e008f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwY29ycG9yYXRlJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc4OTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "David Ross",
    role: "Production Director",
    image: "https://images.unsplash.com/photo-1535930735840-f3c6a645f80d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwbWFuJTIwcG9ydHJhaXQlMjBjb3Jwb3JhdGUlMjBzdHVkaW98ZW58MXx8fHwxNzY3ODkwNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Dr. Amanda Lee",
    role: "R&D Specialist",
    image: "https://images.unsplash.com/photo-1758691737587-7630b4d31d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYXR1cmUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3ODkwNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  }
];

export function WhoWeAreSection({ onReadMore }: WhoWeAreProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  const textXLeft = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const textXRight = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="py-8 bg-white relative overflow-hidden"
    >
      <div className="px-4 md:px-12 max-w-7xl mx-auto relative" style={{ transformStyle: "preserve-3d" }}>
        {/* Abstract Background Decoration - Parallax */}
        <motion.div 
          style={{ y: y1, z: -100 }}
          className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] pointer-events-none select-none"
        >
           <Factory className="size-96 text-black" />
        </motion.div>

        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="flex flex-col gap-8 relative z-10"
        >
          {/* Top Section: Typography & Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mt-20" style={{ transformStyle: "preserve-3d" }}>
            {/* Title Block */}
            <div className="relative pt-4" style={{ transformStyle: "preserve-3d" }}>
                {/* Animated Background Elements */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{ z: -50 }}
                    className="absolute -left-20 -top-20 w-80 h-80 bg-[#fabf37]/5 rounded-full blur-3xl pointer-events-none mix-blend-multiply" 
                />
                
                {/* Floating Paper Element */}
                <motion.div 
                  style={{ y: y2, rotate: 12, z: 50 }}
                  className="absolute -top-10 right-10 w-16 h-20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-100 -z-10 rounded-sm hidden md:block"
                />

                <div className="relative z-10 mt-24" style={{ transformStyle: "preserve-3d" }}>
                  <div className="flex items-center gap-4 mb-6" style={{ transform: "translateZ(20px)" }}>
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-0.5 bg-[#fabf37]" 
                     />
                     <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Est. 2000</span>
                  </div>
                  
                  <div className="relative overflow-visible pb-4 -mb-4" style={{ transformStyle: "preserve-3d" }}>
                      <motion.h2 
                        style={{ opacity, z: 80 }}
                        className="text-4xl sm:text-7xl md:text-9xl font-black tracking-tighter text-black leading-[0.85] mb-2"
                      >
                        WHO
                      </motion.h2>
                  </div>
                  
                  <div className="relative overflow-visible pb-4 -mb-4" style={{ transformStyle: "preserve-3d" }}>
                      <motion.h2 
                        style={{ x: textXRight, opacity, z: 80 }}
                        className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-100 leading-[0.85]"
                      >
                        <span style={{ textShadow: '-1px -1px 0 #e4e4e7, 1px -1px 0 #e4e4e7, -1px 1px 0 #e4e4e7, 1px 1px 0 #e4e4e7' }}>
                          WE ARE
                        </span>
                      </motion.h2>
                  </div>
                </div>
            </div>

            {/* Description & Stats Column */}
            <div className="space-y-8 lg:pt-24">
                <motion.div 
                  style={{ opacity, y: y2 }}
                  className="space-y-4 text-base text-zinc-600 leading-relaxed"
                >
                  <p className="font-medium text-black text-sm md:text-[15px]">
                    Paperware Factory is Bangladesh's premier manufacturer of eco-friendly, paper-based products, driving the revolution against plastic pollution.
                  </p>
                  <p className="text-xs md:text-sm text-zinc-500">
                    From <span className="text-black font-bold">double-wall coffee cups</span> to <span className="text-black font-bold">pharmaceutical grade packaging</span>, we engineer sustainable solutions that define industry standards for quality and environmental responsibility.
                  </p>
                </motion.div>
                
                {/* Quick Stats Row */}
                <motion.div 
                  style={{ opacity }}
                  className="grid grid-cols-3 gap-6 py-2 border-l-2 border-[#fabf37] pl-6"
                >
                    {[
                        { label: "Years Exp.", value: "24+", icon: Award },
                        { label: "Eco Score", value: "100%", icon: Recycle },
                        { label: "Team Size", value: "500+", icon: Users },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <stat.icon className="size-4 text-[#fabf37] mb-1" />
                            <p className="font-black text-black leading-none text-base">{stat.value}</p>
                            <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Button */}
                <motion.div 
                  style={{ opacity }}
                >
                  <button 
                    onClick={onReadMore}
                    className="group flex items-center gap-4"
                  >
                    <div className="size-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#fabf37] group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-[#fabf37]/50">
                      <ArrowRight className="size-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-black uppercase tracking-widest text-black">Read Our Story</span>
                      <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-wider group-hover:text-[#fabf37] transition-colors">Explore the factory</span>
                    </div>
                  </button>
                </motion.div>
            </div>
          </div>

          {/* Bottom Section: Team Carousel - Full Width */}
          <motion.div 
            style={{ scale }}
            className="relative w-full py-12"
          >
             <div className="w-full relative overflow-hidden -mx-4 md:-mx-12 px-4 md:px-12">
                  {/* Horizontal Marquee Gradients */}
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
                  
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 w-max pl-4"
                  >
                     {/* Tripled list for smoother loop on wide screens */}
                     {[...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, i) => (
                        <div key={`${member.id}-${i}`} className="relative group rounded-3xl overflow-hidden shrink-0 w-[260px] h-[340px] shadow-sm hover:shadow-2xl transition-all duration-500 border-[6px] border-zinc-50 bg-zinc-100">
                             <ImageWithFallback 
                               src={member.image}
                               alt={member.name}
                               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{member.name}</h4>
                                <p className="text-zinc-300 text-xs uppercase tracking-wider mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{member.role}</p>
                                
                                <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                   <button className="size-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-[#fabf37] hover:border-[#fabf37] hover:text-black transition-all">
                                      <Linkedin className="size-4" />
                                   </button>
                                   <button className="size-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-[#fabf37] hover:border-[#fabf37] hover:text-black transition-all">
                                      <Mail className="size-4" />
                                   </button>
                                </div>
                             </div>
                        </div>
                     ))}
                  </motion.div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}