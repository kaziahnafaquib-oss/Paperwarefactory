import React from "react";
import { motion } from "motion/react";
import { 
  Zap, Droplets, Leaf, 
  ChartBar, Cpu, Recycle,
  ArrowUpRight, TrendingUp
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function ImpactMetrics() {
  const { t } = useLanguage();
  const [livePlastic, setLivePlastic] = React.useState(142500.42);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLivePlastic(prev => prev + (Math.random() * 0.05));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { 
      label: t('plastic_prevented'), 
      value: livePlastic.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }), 
      unit: "KG", 
      icon: Recycle, 
      color: "#fabf37",
      desc: t('plastic_desc')
    },
    { 
      label: t('renewable_energy'), 
      value: "88.4", 
      unit: "%", 
      icon: Zap, 
      color: "#e3d1ae",
      desc: t('energy_desc')
    },
    { 
      label: t('water_recycled'), 
      value: "1.2M", 
      unit: "Liters", 
      icon: Droplets, 
      color: "#fabf37",
      desc: t('water_desc')
    },
    { 
      label: t('fsc_certified'), 
      value: "100", 
      unit: "%", 
      icon: Leaf, 
      color: "#e3d1ae",
      desc: t('fsc_desc')
    }
  ];

  const stats = [
    { label: "Energy Offset", value: "450kW", icon: <Zap />, color: "text-[#fabf37]" },
    { label: "Water Reclaimed", value: "12M Liters", icon: <Droplets />, color: "text-blue-400" },
    { label: "Waste Reduction", value: "98.2%", icon: <Recycle />, color: "text-emerald-400" },
    { label: "ESG Score", value: "Tier A+", icon: <ChartBar />, color: "text-[#fabf37]" }
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fabf37_1px,transparent_1px),linear-gradient(to_bottom,#fabf37_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Interactive Dashboard Header */}
          <div className="w-full lg:w-1/3 space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <span className="text-[#fabf37] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs px-4 py-1.5 border border-[#fabf37]/30 rounded-full inline-block">
                {t('live_impact')}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                {t('data_driven')}
              </h2>
              <p className="text-zinc-500 font-bold text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t('track_contribution')}
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-[32px] md:rounded-[40px] space-y-6 group cursor-pointer hover:border-[#fabf37]/50 transition-all">
               <div className="flex items-center justify-between">
                  <Cpu className="size-8 text-[#fabf37]" />
                  <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-widest rounded flex items-center gap-2">
                     <div className="size-1 rounded-full bg-emerald-500 animate-pulse" /> {t('live_feed')}
                  </div>
               </div>
               <div>
                  <h4 className="text-white font-black text-xl uppercase tracking-tight">{t('active_prod_lines')}</h4>
                  <div className="mt-4 flex gap-2">
                     {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="h-full bg-[#fabf37]"
                           />
                        </div>
                     ))}
                  </div>
               </div>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center justify-between">
                  {t('capacity_utilization')} <span>94.2%</span>
               </p>
            </div>
          </div>

          {/* Right: Metrics Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 p-6 md:p-10 rounded-[32px] md:rounded-[50px] hover:bg-zinc-900/60 transition-all group relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 size-40 bg-[#fabf37]/5 blur-[80px] group-hover:bg-[#fabf37]/10 transition-all" />

                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className={`p-4 md:p-5 rounded-xl md:rounded-2xl bg-black border border-zinc-800 group-hover:border-[${metric.color}]/50 transition-all`}>
                    <metric.icon className="size-6 md:size-8" style={{ color: metric.color }} />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">{t('status')}</p>
                    <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest flex items-center justify-end gap-1">
                      <TrendingUp className="size-3" /> {t('optimizing')}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2 md:gap-3 flex-wrap">
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none">{metric.value}</h3>
                    <span className="text-sm md:text-xl font-black uppercase text-zinc-700 italic tracking-tighter">{metric.unit}</span>
                  </div>
                  <h4 className="text-base md:text-xl font-black uppercase tracking-tight text-white/90">{metric.label}</h4>
                </div>

                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-zinc-800/50 flex items-center justify-between">
                   <p className="text-zinc-500 font-bold text-[10px] md:text-xs">{metric.desc}</p>
                   <ArrowUpRight className="size-4 md:size-5 text-zinc-700 group-hover:text-[#fabf37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Industrial Footer Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#fabf37]/20 to-transparent" />
    </section>
  );
}