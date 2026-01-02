import React from "react";
import { motion } from "motion/react";
import { Play, ShieldCheck, Zap, Leaf, Globe, Factory, Cpu, Target, Award, ArrowRight, ChevronRight, Activity, Box } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { DepartmentShowcase } from "../components/paperware/department-showcase";

// Asset imports
import imgA3A00228Enhanced from "figma:asset/d322aa8c56240306ca8d400af7b840b86528dcbb.png";
import imgA3A00242EnhancedCopy from "figma:asset/5865d78e649b9b63e08f02c60e032ada14355d4a.png";
import imgA3A00086Enhanced from "figma:asset/d1d09ee2807bc96c0db6200d9081bc2d7c8effa7.png";
import imgA3A00048Enhanced from "figma:asset/c612c42145ec66297825ca8230af016fd4b338d5.png";
import imgA3A00111Enhanced from "figma:asset/32d015dc91588b7eb35fd1ff2f9a5ad82935aaef.png";
import imgAr305594 from "figma:asset/8bf041c8bbf0dd55add7bf1fc1e4375fe52810cb.png";
import imgA3A00175Enhanced from "figma:asset/e1d8cef62c78387036bded121b27d9a449426d93.png";
import imgCuttingUnit from "figma:asset/e4d419676dc773e53692192900cc87f073cae093.png";
import imgProcess from "figma:asset/065035dc996c4de10bf1df3ba3adb27b15abbdc2.png";
import imgHeidelberg from "figma:asset/d89ef6b50d489f3f93b6ebdf5428f21c5e207b0a.png";

export function AboutPage() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-white selection:bg-[#fabf37] selection:text-black">
      {/* 1. HERO SECTION - INDUSTRIAL MAXIMALISM */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <img src={imgProcess} alt="Factory" className="w-full h-full object-cover grayscale" loading="lazy" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 md:mb-8">
              <div className="size-1.5 md:size-2 rounded-full bg-[#fabf37] animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Established 2021 • Dhaka</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12"
            >
              The <span className="text-[#fabf37]">Engine</span> <br />
              Behind the <br />
              <span className="text-zinc-200">Package.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <p className="text-base md:text-2xl font-bold text-zinc-600 leading-tight max-w-2xl uppercase italic">
                {t('about_text_1')} We are not just manufacturers; we are supply chain architects.
              </p>
              <button className="shrink-0 size-16 md:size-24 rounded-full bg-black text-[#fabf37] flex items-center justify-center group hover:scale-110 transition-transform">
                <Play className="size-6 md:size-8 fill-current group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="p-10 bg-black text-white rounded-[48px] border border-white/10 shadow-2xl space-y-4 max-w-xs">
            <Activity className="size-8 text-[#fabf37]" />
            <p className="text-xs font-black uppercase tracking-widest leading-relaxed">
              Real-time monitoring of over 200 production metrics.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR PROMISE - THE CORE VALUES */}
      <section className="bg-black py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <div className="lg:col-span-4 space-y-4 md:space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#fabf37] leading-none">
                Our <br className="hidden md:block" /> Core <br className="hidden md:block" /> Mandate.
              </h2>
              <p className="text-zinc-500 font-bold uppercase tracking-widest leading-relaxed text-xs md:text-sm">
                Sustainability is not an option; it is the default setting of our factory.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {[
                { icon: ShieldCheck, title: "Uncompromising Hygiene", desc: "Every cup is produced in a sanitized, medical-grade environment." },
                { icon: Zap, title: "AI-Driven Precision", desc: "Automated quality checks with less than 0.1% defect rate." },
                { icon: Leaf, title: "100% Biodegradable", desc: "Utilizing FSC-certified paper and eco-friendly soy-based inks." },
                { icon: Globe, title: "Global Logistics", desc: "From Dhaka to the world, tracked with real-time telemetry." }
              ].map((value, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-10 bg-white/5 border border-white/10 rounded-[24px] md:rounded-[48px] space-y-4 md:space-y-6 group hover:bg-[#fabf37] hover:border-[#fabf37] transition-all"
                >
                  <div className="size-10 md:size-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-[#fabf37] group-hover:bg-black group-hover:text-[#fabf37] transition-colors">
                    <value.icon className="size-5 md:size-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-black">
                    {value.title}
                  </h3>
                  <p className="text-[11px] md:text-sm font-bold text-zinc-500 leading-relaxed group-hover:text-black/80 transition-colors">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTION METRICS - THE NUMBERS */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-10 md:mb-24 space-y-2 md:space-y-4">
            <h2 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              Scaling <br /> <span className="text-zinc-300 italic">Excellence.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { 
                val: "140K", 
                unit: "Pcs/Day", 
                label: "Printing Unit", 
                icon: Factory, 
                img: imgHeidelberg,
                machineName: "Heidelberg MO-V-P",
                detail: "High-precision 4-color offset printing for premium branding.",
                specs: [
                  "Heidelberg MO-V-P (19x25.5\")",
                  "Original Heidelberg (25.25x36\")",
                  "Double Demy Plate Technology"
                ]
              },
              { 
                val: "350K", 
                unit: "Pcs/Day", 
                label: "Forming Unit", 
                icon: Box, 
                img: imgA3A00086Enhanced,
                machineName: "Ultrasonic Former",
                detail: "Automated ultrasonic forming ensuring leak-proof precision.",
                specs: ["Medical Grade Hygiene", "Automated Quality Control", "High-speed Production"]
              },
              { 
                val: "12K", 
                unit: "Pcs/Day", 
                label: "Cutting Unit", 
                icon: Cpu, 
                img: imgCuttingUnit,
                machineName: "Die-Cut Precision",
                detail: "Precision die-cutting with minimal waste & laser accuracy.",
                specs: ["Laser Guided Calibration", "Zero-waste Trimming", "Custom Shape Support"]
              },
              { 
                val: "25K", 
                unit: "Pcs/Day", 
                label: "Lamination Unit", 
                icon: Zap, 
                img: imgProcess,
                machineName: "Thermal Laminator",
                detail: "PE/PLA lamination for superior liquid & heat resistance.",
                specs: ["Eco-friendly PLA Support", "Heat-seal Optimization", "Gloss & Matte Finish"]
              }
            ].map((stat, i) => (
              <div key={i} className="relative overflow-hidden flex flex-col min-h-[400px] p-6 md:p-10 border border-zinc-100 group hover:border-[#fabf37] hover:bg-zinc-50 transition-all duration-500 rounded-[32px]">
                {/* Background Machine Image */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 -rotate-6 translate-x-12 translate-y-12 pointer-events-none overflow-hidden">
                  <img src={stat.img} alt="" className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <stat.icon className="size-6 text-[#fabf37]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Unit {i + 1}</span>
                  </div>

                  <div className="mb-auto">
                    <p className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none mb-1">{stat.val}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">{stat.unit}</p>
                    
                    <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[#fabf37] transition-colors">{stat.label}</h3>
                    <p className="text-xs font-bold text-zinc-400 uppercase leading-relaxed mb-6">{stat.machineName}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] font-bold text-zinc-600 leading-tight uppercase">
                      {stat.detail}
                    </p>
                    
                    <div className="pt-4 border-t border-zinc-200/50 space-y-1.5">
                      {stat.specs.map((spec, si) => (
                        <div key={si} className="flex items-center gap-2">
                          <div className="size-1 bg-[#fabf37] rounded-full" />
                          <p className="text-[8px] md:text-[9px] font-bold text-zinc-500 uppercase tracking-tight">
                            {spec}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPLACED: MACHINERY SHOWCASE WITH DEPARTMENT SHOWCASE */}
      <DepartmentShowcase />

      {/* 4. VISUAL JOURNEY - THE GALLERY */}
      <section className="py-16 md:py-32 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-16 flex items-end justify-between">
          <div className="space-y-1 md:space-y-4">
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter">Factory Floor</h2>
            <p className="text-[8px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest">A glimpse into our manufacturing hub.</p>
          </div>
          <button className="flex items-center gap-2 text-[8px] md:text-xs font-black uppercase tracking-widest hover:text-[#fabf37] transition-colors">
            Full Gallery <ArrowRight className="size-3 md:size-4" />
          </button>
        </div>

        <div className="flex gap-4 md:gap-8 px-4 md:px-6 overflow-x-auto pb-8 md:pb-12 scrollbar-hide snap-x">
          {[imgA3A00228Enhanced, imgA3A00242EnhancedCopy, imgA3A00086Enhanced, imgA3A00048Enhanced, imgA3A00111Enhanced, imgAr305594].map((img, i) => (
            <div 
              key={i}
              className="min-w-[240px] md:min-w-[400px] h-[300px] md:h-[500px] rounded-[24px] md:rounded-[60px] overflow-hidden snap-center relative group"
            >
              <img src={img} alt={`Process ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-12 flex flex-col justify-end">
                <p className="text-[#fabf37] text-xs font-black uppercase tracking-widest mb-2">Facility View</p>
                <p className="text-white text-2xl font-black uppercase tracking-tight">Stage {i + 1}: Automated Precision</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW WE WORK - THE AI ADVANTAGE */}
      <section className="py-16 md:py-32 bg-black text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-6 md:space-y-12">
              <div className="space-y-2 md:space-y-4">
                <div className="px-3 py-1 bg-[#fabf37] text-black text-[8px] md:text-[9px] font-black rounded-full uppercase inline-block">Methodology</div>
                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                  Smart <br /> Manufacturing.
                </h2>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <p className="text-xs md:text-lg font-bold text-zinc-400 leading-relaxed uppercase">
                  {t('about_text_2')} At Paperware, we believe growth thrives on responsibility. Delivering safe, hygienic, and eco-friendly packaging you can trust.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-2xl md:text-3xl font-black italic text-[#fabf37]">24/7</p>
                    <p className="text-[8px] md:text-[10px] font-black uppercase text-zinc-500 tracking-widest">Monitoring</p>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-2xl md:text-3xl font-black italic text-[#fabf37]">&lt; 2%</p>
                    <p className="text-[8px] md:text-[10px] font-black uppercase text-zinc-500 tracking-widest">Downtime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-[#fabf37]/5 blur-3xl rounded-full animate-pulse" />
              <div className="relative rounded-[32px] md:rounded-[60px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img src={imgA3A00175Enhanced} alt="Innovation" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 p-6 md:p-8 bg-black/80 backdrop-blur-xl rounded-[24px] md:rounded-[32px] border border-white/5 max-w-[200px] md:max-w-xs">
                  <Cpu className="size-6 md:size-8 text-[#fabf37] mb-2 md:mb-4" />
                  <p className="text-[9px] md:text-xs font-black uppercase tracking-widest leading-relaxed">
                    15% annual efficiency gains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}