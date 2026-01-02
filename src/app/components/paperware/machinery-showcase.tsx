import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { Settings, Cpu, Zap, Activity, Gauge, Database, Factory, Box, Printer } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgHeidelberg from "figma:asset/e72bb120492f063c2a2bd8669456a539365af830.png";
import imgOriginalHeidelberg from "figma:asset/6acd2f3438274d3aa253228bd057142cd1415192.png";
import imgForming from "figma:asset/d1d09ee2807bc96c0db6200d9081bc2d7c8effa7.png";
import imgCutting from "figma:asset/e4d419676dc773e53692192900cc87f073cae093.png";
import imgProcess from "figma:asset/065035dc996c4de10bf1df3ba3adb27b15abbdc2.png";

const getMachineries = (t: (key: string) => string) => [
  {
    name: "HEIDELBERG MO-V-P",
    type: "4 Color Printing Unit",
    image: imgHeidelberg,
    val: "70K",
    unit: "Pcs/Day",
    specs: [
      "4 Color System",
      "48 x 65 cm",
      "19 x 25.5 (Inch)"
    ],
    detail: "High-speed professional offset printing for premium branding.",
    icon: <Printer className="size-6" />
  },
  {
    name: "ORIGINAL HEIDELBERG",
    type: "Offset-Letterset Unit",
    image: imgOriginalHeidelberg,
    val: "70K",
    unit: "Pcs/Day",
    specs: [
      "Offset-Letterset",
      "64 x 91.5cm",
      "25.25 x 36 (Inch)"
    ],
    detail: "The gold standard of printing, specialized in heavy-duty paper processing.",
    icon: <Factory className="size-6" />
  },
  {
    name: "Ultrasonic Former",
    type: "Forming Unit",
    image: imgForming,
    val: "350K",
    unit: "Pcs/Day",
    specs: ["Medical Grade Hygiene", "Automated Control", "High-speed Production"],
    detail: "Automated ultrasonic forming ensuring leak-proof precision.",
    icon: <Box className="size-6" />
  },
  {
    name: "Die-Cut Precision",
    type: "Cutting Unit",
    image: imgCutting,
    val: "12K",
    unit: "Pcs/Day",
    specs: ["Laser Calibration", "Zero-waste Trimming", "Custom Shape Support"],
    detail: "Precision die-cutting with minimal waste & laser accuracy.",
    icon: <Cpu className="size-6" />
  }
];

export const MachineryShowcase = React.memo(function MachineryShowcase() {
  const { t } = useLanguage();

  const machineries = React.useMemo(() => getMachineries(t), [t]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-black font-black uppercase tracking-[0.4em] text-[10px]"
          >
            <div className="h-[2px] w-12 bg-[#fabf37]" />
            {t('prod_intel') || "Production Intelligence"}
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
            {t('scaling_excellence') || "Scaling Excellence."}
          </h2>
          <p className="text-zinc-500 font-bold text-xs md:text-sm max-w-2xl leading-relaxed uppercase tracking-widest pt-4">
            {t('machinery_desc') || "Our facility is powered by world-class machinery ensuring global standards of precision and efficiency."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machineries.map((machine, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden flex flex-col min-h-[420px] p-6 md:p-10 border border-zinc-100 group hover:border-[#fabf37] hover:bg-zinc-50 transition-all duration-500 rounded-[32px] bg-white"
            >
              {/* Background Machine Image */}
              <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 -rotate-6 translate-x-12 translate-y-12 pointer-events-none overflow-hidden">
                <img src={machine.image} alt="" className="w-full h-full object-cover grayscale" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="size-12 rounded-2xl bg-black flex items-center justify-center text-[#fabf37] shadow-xl group-hover:scale-110 transition-transform">
                    {machine.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Unit 0{i + 1}</span>
                </div>

                <div className="mb-auto relative z-10">
                  <p className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-2 text-black drop-shadow-sm">{machine.val}</p>
                  <p className="text-[12px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">{machine.unit}</p>
                  
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 group-hover:text-[#fabf37] transition-colors text-black leading-tight">{machine.name}</h3>
                  <p className="text-xs font-black text-[#fabf37] uppercase tracking-widest mb-6">{machine.type}</p>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-xs font-bold text-zinc-500 leading-relaxed uppercase tracking-wide">
                    {machine.detail}
                  </p>
                  
                  <div className="pt-6 border-t-2 border-zinc-100 space-y-3">
                    {machine.specs.map((spec, si) => (
                      <div key={si} className="flex items-center gap-3">
                        <div className="size-1.5 bg-[#fabf37] rounded-full shadow-[0_0_10px_rgba(250,191,55,0.5)]" />
                        <p className="text-[11px] md:text-xs font-black text-black uppercase tracking-wider">
                          {spec}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-black rounded-[40px] p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border-4 border-[#fabf37]">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="size-14 md:size-16 rounded-2xl bg-[#fabf37] flex items-center justify-center text-black shrink-0">
              <Zap className="size-6 md:size-8" />
            </div>
            <div>
              <p className="text-[#fabf37] font-black uppercase tracking-widest text-[8px] md:text-[10px]">{t('smart_factory') || "Smart Factory Integration"}</p>
              <h4 className="text-white text-lg md:text-2xl font-black uppercase tracking-tight mt-1">{t('live_diagnostics') || "Real-time Production Analytics"}</h4>
            </div>
          </div>
          <button className="w-full lg:w-auto bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#fabf37] transition-all">
            {t('tech_audit_report') || "Technical Audit Report"}
          </button>
        </div>
      </div>
    </section>
  );
});