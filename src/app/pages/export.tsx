import React from "react";
import { motion } from "motion/react";
import { 
  Globe, ShieldCheck, Truck, ChartBar, 
  Map as MapIcon, Box, CircleCheck, 
  ArrowRight, Package as PackageIcon, Ship, Plane, 
  TrendingUp, Activity, Anchor
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ExportIntelligence } from "../components/paperware/export-intelligence";
import { ExportRequestForm } from "../components/paperware/export-request-form";

export function ExportPage() {
  const { t } = useLanguage();
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  return (
    <div className="bg-[#fdfaf3] min-h-screen pt-24 md:pt-32 pb-20 font-['Poppins',sans-serif]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-32">
        <div className="bg-black rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[1200px]" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-800">
              <div className="size-2 rounded-full bg-[#fabf37] animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#fabf37]">{t('global_export_intel')}</span>
            </div>
            <h1 className="text-[40px] md:text-[72px] font-black uppercase tracking-tighter leading-[0.85]">
              {t('seamless_logistics').split(' ').map((word, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  {word === 'Global' ? <span className="text-[#fabf37]">{word}</span> : word}{' '}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-zinc-400 font-bold md:text-xl max-w-2xl leading-relaxed text-[16px]">
              {t('export_hero_desc')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-[#fabf37] text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
              >
                {t('start_export_inquiry')} <ArrowRight className="size-5" />
              </button>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 md:pt-8 border-t border-white/10">
              {[
                { label: t('high_demand_region'), value: "GCC & Middle East", trend: "+24%" },
                { label: t('preferred_pack_size'), value: "1000 Units / Bulk", trend: "Optimal" },
                { label: t('compliance_index'), value: "EU/US Compliant", trend: "100%" },
                { label: t('shipping_efficiency'), value: "3.2 Days Savings", trend: "AI Route" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-[30px] border border-black/5 space-y-2"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{stat.label}</p>
                  <div className="space-y-1">
                    <h4 className="font-black uppercase tracking-tight text-[#fabf37] text-[16px]">{stat.value}</h4>
                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                      <TrendingUp className="size-3" /> {stat.trend} {t('status')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* World Map & Export Intelligence Suite */}
      <ExportIntelligence />

      {/* Certifications Grid */}
      <section className="container mx-auto px-4 mt-40 mb-40">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: t('fsc_certified'), desc: t('fsc_desc'), Icon: PackageIcon },
            { title: "ISO 9001:2015", desc: t('quality_index'), Icon: ShieldCheck },
            { title: "ISO 14001", desc: t('eco_vision'), Icon: Globe },
            { title: "SGS Verified", desc: t('precision'), Icon: CircleCheck }
          ].map((cert, i) => (
            <div key={i} className="group relative bg-zinc-900 p-8 rounded-[40px] border border-zinc-800 hover:border-[#fabf37] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <cert.Icon className="size-24 text-white transform rotate-12 translate-x-4 -translate-y-4" />
               </div>
               
               <div className="relative z-10 size-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 border border-zinc-700 group-hover:bg-[#fabf37] group-hover:text-black group-hover:border-[#fabf37] transition-colors duration-300">
                  <cert.Icon className="size-6 text-[#fabf37] group-hover:text-black transition-colors" />
               </div>
               
               <div className="relative z-10 space-y-2">
                 <h4 className="text-lg font-black uppercase tracking-tight text-white">{cert.title}</h4>
                 <p className="text-[11px] font-bold text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{cert.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Cost Optimization Panel */}
      <section className="container mx-auto px-4">
        <div className="bg-zinc-900 rounded-[60px] p-12 md:p-24 text-white">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">{t('cost_optimization_engine')}</h2>
                    <p className="text-zinc-400 font-bold text-base">{t('cost_optimization_desc')}</p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 bg-zinc-800 rounded-[40px] border border-white/5 space-y-4">
                       <PackageIcon className="size-8 text-[#fabf37]" />
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{t('cbm_utilization')}</p>
                          <p className="text-2xl font-black">98.2%</p>
                       </div>
                    </div>
                    <div className="p-8 bg-zinc-800 rounded-[40px] border border-white/5 space-y-4">
                       <Anchor className="size-8 text-[#fabf37]" />
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{t('port_lead_time')}</p>
                          <p className="text-2xl font-black">-14%</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-5">
                 <div className="bg-[#fabf37] p-12 rounded-[50px] text-black space-y-8 shadow-2xl transform rotate-1">
                    <ChartBar className="size-12" />
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{t('start_global_journey')}</h3>
                    <p className="text-sm font-bold opacity-70 italic">{t('export_quote_24h')}</p>
                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="w-full py-6 bg-black text-white rounded-full font-black uppercase tracking-widest text-sm hover:translate-y-[-5px] transition-all"
                    >
                       {t('initialize_export_request')}
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <ExportRequestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}