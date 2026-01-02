import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Leaf, Recycle, Droplets, Sun, Wind, Globe, TrendingDown, ArrowUpRight } from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from "recharts";

const impactData = [
  { month: 'Jan', co2: 45, water: 120 },
  { month: 'Feb', co2: 52, water: 135 },
  { month: 'Mar', co2: 48, water: 110 },
  { month: 'Apr', co2: 61, water: 150 },
  { month: 'May', co2: 55, water: 140 },
  { month: 'Jun', co2: 67, water: 165 },
];

const materialData = [
  { name: 'Paper', value: 85, color: '#fabf37' },
  { name: 'Water-based Ink', value: 10, color: '#000000' },
  { name: 'Eco-Coating', value: 5, color: '#4ade80' },
];

export function SustainabilityPage() {
  const { t } = useLanguage();

  return (
    <div className="relative pt-32 md:pt-40 pb-24 bg-[#fdfaf3] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="space-y-4">
            <span className="text-[#fabf37] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Sustainability Engine</span>
            <h1 className="text-[38px] md:text-[52px] lg:text-[72px] font-black uppercase tracking-tighter leading-[0.9] text-black">
              {t('impact_dashboard')}
            </h1>
          </div>
          <div className="w-full md:w-auto bg-black text-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] flex flex-wrap items-center gap-6 md:gap-10">
            <div className="flex-1 md:flex-none">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">{t('carbon_offset')}</p>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-3xl font-black">1.2K Tons</span>
                <TrendingDown className="text-[#fabf37] size-4 md:size-5" />
              </div>
            </div>
            <div className="hidden md:block h-10 w-[1px] bg-white/10" />
            <div className="flex-1 md:flex-none">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">{t('eco_perf')}</p>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-3xl font-black">A+ Grade</span>
                <Globe className="text-[#fabf37] size-4 md:size-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { label: t('plastic_reduced'), val: "450 Tons", icon: <Recycle />, trend: "+12%" },
            { label: t('water_saved'), val: "12M Liters", icon: <Droplets />, trend: "+8%" },
            { label: t('solar_powered'), val: "65%", icon: <Sun />, trend: "+20%" },
            { label: t('biodegradable'), val: "100%", icon: <Leaf />, trend: "Goal Reached" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-black/5 shadow-xl group hover:bg-[#fabf37] transition-all duration-500"
            >
              <div className="size-12 md:size-14 rounded-2xl bg-zinc-50 text-black flex items-center justify-center mb-4 md:mb-6 group-hover:bg-black group-hover:text-[#fabf37] transition-colors">
                <div className="scale-75 md:scale-100">{card.icon}</div>
              </div>
              <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black/60 mb-1">{card.label}</h4>
              <p className="text-2xl md:text-3xl font-black text-black">{card.val}</p>
              <div className="mt-3 md:mt-4 flex items-center gap-2 text-[10px] md:text-xs font-bold text-emerald-600 group-hover:text-black">
                <ArrowUpRight className="size-3" /> {card.trend} vs last year
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Chart 1: Resource Efficiency */}
          <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-[32px] md:rounded-[60px] border border-black/5 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-10">
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">{t('resource_eff')}</h3>
                <p className="text-xs font-bold text-zinc-400 italic">Monthly reduction in CO2 and Water usage</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-2 md:size-3 rounded-full bg-[#fabf37]" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">CO2 Emission</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 md:size-3 rounded-full bg-black" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">Water Consumption</span>
                </div>
              </div>
            </div>
            <div className="h-[250px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impactData}>
                  <defs>
                    <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fabf37" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#fabf37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="co2" stroke="#fabf37" strokeWidth={4} fillOpacity={1} fill="url(#colorCo2)" />
                  <Area type="monotone" dataKey="water" stroke="#000" strokeWidth={4} fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Material Composition */}
          <div className="bg-black text-white p-8 md:p-10 rounded-[32px] md:rounded-[60px] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fabf37]/5 -skew-x-12 translate-x-1/2" />
            <div className="relative z-10 mb-8 md:mb-0">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">{t('material_purity')}</h3>
              <p className="text-zinc-500 text-xs md:text-sm font-bold">100% Sourced from FSC certified forests.</p>
            </div>
            
            <div className="h-[200px] md:h-[250px] relative z-10 my-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={materialData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={10}
                    dataKey="value"
                  >
                    {materialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-black text-[#fabf37]">95%</span>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 relative z-10">
              {materialData.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item.name}</span>
                  </div>
                  <span className="font-black text-sm">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#fabf37] p-8 md:p-12 lg:p-20 rounded-[40px] md:rounded-[60px] flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-black font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] bg-black/5 px-4 py-2 rounded-full inline-block">{t('live_diagnostics')}</span>
              <h3 className="text-[28px] md:text-[32px] lg:text-[48px] font-black uppercase tracking-tight leading-none text-black">
                {t('net_zero')}
              </h3>
              <p className="text-black/60 font-bold text-base md:text-lg leading-relaxed">
                By 2030, Paperware Factory aims to become carbon-negative by transitioning 
                100% of its logistics to electric fleets and localizing raw material pulp production.
              </p>
            </div>
            <div className="mt-8 md:mt-12 flex items-center gap-6">
              <div className="size-16 md:size-20 rounded-full border-4 border-black/10 flex items-center justify-center text-black font-black text-sm md:text-base">75%</div>
              <p className="text-[10px] md:text-sm font-black uppercase tracking-widest text-black/40 max-w-[150px]">Logistics electrification in progress</p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 lg:p-20 rounded-[40px] md:rounded-[60px] border border-black/5 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl">
             <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="size-16 md:size-20 rounded-[24px] md:rounded-[32px] bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <Wind className="size-8 md:size-10" />
                </div>
                <h3 className="text-[28px] md:text-[32px] lg:text-[48px] font-black uppercase tracking-tight leading-none text-black">
                  {t('circular_economy')}
                </h3>
                <p className="text-zinc-400 font-bold text-base md:text-lg leading-relaxed">
                  We collect used paperware from our partner retail outlets and process 
                  them into recycled cardboard packaging, ensuring zero waste goes to landfills.
                </p>
             </div>
             <button className="flex items-center gap-3 font-black uppercase tracking-widest text-[10px] md:text-xs mt-8 md:mt-12 group-hover:gap-6 transition-all text-black">
                Our Recycling Partners <ArrowUpRight className="size-4" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}