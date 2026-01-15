import React from "react";
import { motion } from "motion/react";
import { Card3D } from "./3d-card";
import { 
  ArrowRight, Leaf, Factory, Users, 
  ShoppingBag, HelpCircle, Truck, Image, 
  ShieldCheck, TrendingUp, Globe, Store,
  Briefcase, Mail, FileText, Settings,
  Box, Layers, Zap, Info, Activity
} from "lucide-react";

const pages = [
  { id: 'products', title: 'Full Catalog', icon: ShoppingBag, color: 'bg-blue-600' },
  { id: 'manufacturing', title: 'Manufacturing', icon: Factory, color: 'bg-orange-600' },
  { id: 'sustainability', title: 'Sustainability', icon: Leaf, color: 'bg-green-600' },
  { id: 'clients', title: 'Client Stories', icon: Users, color: 'bg-purple-600' },
  { id: 'gallery', title: 'Media Gallery', icon: Image, color: 'bg-pink-600' },
  { id: 'tracking', title: 'Track Order', icon: Truck, color: 'bg-indigo-600' },
  { id: 'career', title: 'Careers', icon: Briefcase, color: 'bg-red-600' },
  { id: 'compliance', title: 'Compliance', icon: ShieldCheck, color: 'bg-teal-600' },
  { id: 'export', title: 'Global Export', icon: Globe, color: 'bg-cyan-600' },
  { id: 'investor', title: 'Investors', icon: TrendingUp, color: 'bg-emerald-600' },
  { id: 'franchise', title: 'Franchise', icon: Store, color: 'bg-amber-600' },
  { id: 'about', title: 'About Us', icon: Info, color: 'bg-zinc-600' },
  { id: 'contact', title: 'Contact Us', icon: Mail, color: 'bg-rose-600' },
  { id: 'catalog-3d', title: '3D Catalog', icon: Box, color: 'bg-violet-600' },
  { id: 'erp', title: 'ERP System', icon: Settings, color: 'bg-slate-600' },
  { id: 'factory-live', title: 'Live Factory', icon: Activity, color: 'bg-lime-600' },
];

export function PageDiscovery({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="pt-0 pb-8 bg-zinc-50 relative overflow-hidden perspective-[2000px]">
      {/* Background Texture - Light Mode */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-zinc-50" />
      </div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
         {[...Array(8)].map((_, i) => (
            <motion.div 
               key={`geo-${i}`}
               animate={{ 
                  y: [0, -60, 0],
                  x: [0, 30, 0],
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
               }}
               transition={{ 
                  duration: 20 + i * 3,
                  repeat: Infinity,
                  ease: "linear"
               }}
               className="absolute opacity-[0.04] border border-zinc-900/20 bg-zinc-900/5 backdrop-blur-[1px]"
               style={{
                  width: 40 + i * 30,
                  height: 40 + i * 30,
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 80}%`,
                  transform: `translateZ(${Math.random() * 100}px)`,
               }}
            />
         ))}
      </div>

      <div className="container mx-auto px-4 mb-4 relative z-10 text-center" style={{ transform: 'translateZ(50px)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="inline-block text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200 shadow-sm">
            Explore Paperware
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 drop-shadow-sm">
            Discover <span className="text-yellow-500 drop-shadow-sm">More</span>
          </h2>
        </motion.div>
      </div>

      {/* 3D Marquee Stage */}
      <div className="relative py-2 perspective-[1500px] overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-zinc-50 via-zinc-50/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-zinc-50 via-zinc-50/90 to-transparent z-20 pointer-events-none" />
        
        <motion.div 
          initial={{ rotateX: 10, rotateY: -2, rotateZ: -2 }}
          whileHover={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex origin-center transform-3d"
        >
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 pl-8 min-w-max py-2"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[...pages, ...pages].map((page, idx) => (
              <Card3D key={`${page.id}-${idx}`} intensity={40}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  onClick={() => onNavigate(page.id)}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="group w-40 h-52 bg-white rounded-[1.5rem] p-1 cursor-pointer transition-shadow duration-500 relative shadow-lg hover:shadow-xl border border-zinc-100"
                >
                  {/* Floating Depth Layers */}
                  <div className={`absolute inset-3 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${page.color} blur-xl`} style={{ transform: 'translateZ(-30px)' }} />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/90 backdrop-blur-sm rounded-[1.5rem]" style={{ transform: 'translateZ(-10px)' }} />
                  
                  <div className="relative h-full bg-white/80 rounded-[1.3rem] overflow-hidden p-4 flex flex-col justify-between z-10 backdrop-blur-md shadow-inner transition-colors" style={{ transform: 'translateZ(0px)' }}>
                    
                    {/* Header with high pop */}
                    <div className="flex justify-between items-start" style={{ transform: 'translateZ(25px)' }}>
                      <div className={`size-9 rounded-xl ${page.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm`}>
                        <page.icon className={`size-4 text-zinc-900`} />
                      </div>
                      <span className="font-mono text-[8px] text-zinc-400 bg-zinc-50 border border-zinc-100 px-1.5 py-0.5 rounded-full uppercase tracking-widest group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
                        0{idx % pages.length + 1}
                      </span>
                    </div>

                    {/* Content with extreme depth */}
                    <div className="space-y-2" style={{ transform: 'translateZ(35px)' }}>
                      <h3 className="text-lg font-black text-zinc-900 leading-[0.9] tracking-tighter group-hover:translate-x-1 transition-transform duration-300">
                        {page.title.split(' ').map((word, i) => (
                          <span key={i} className="block drop-shadow-sm text-[14px]">{word}</span>
                        ))}
                      </h3>
                      
                      <div className="w-full h-px bg-zinc-200 group-hover:bg-zinc-900 transition-colors duration-500" />
                      
                      <div className="flex items-center justify-between group-hover:pl-1 transition-all duration-300">
                        <motion.span 
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-[9px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-zinc-900"
                        >
                          Explore
                        </motion.span>
                        <div className="size-5 rounded-full bg-zinc-100 group-hover:bg-zinc-900 flex items-center justify-center transition-colors duration-300">
                          <ArrowRight className="size-2.5 text-zinc-400 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -bottom-6 -right-6 size-24 rounded-full ${page.color} opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700 ease-out pointer-events-none blur-lg`} style={{ transform: 'translateZ(10px)' }} />
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
