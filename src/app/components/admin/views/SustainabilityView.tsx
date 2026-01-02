import React from "react";
import { Leaf } from "lucide-react";
import { motion } from "motion/react";
import { ViewContainer } from "../ViewContainer";

export default function SustainabilityView() {
  return (
    <ViewContainer title="Sustainability Metrics" subtitle="ESG Tracking & Environmental Impact">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 border border-white/5 rounded-[40px] p-10 space-y-8">
             <h3 className="text-xl font-black text-white uppercase tracking-tight">Carbon Footprint Analysis</h3>
             <div className="space-y-6">
                {[
                  { label: "Manufacturing Scope 1", val: 45, max: 100 },
                  { label: "Logistics Scope 2", val: 72, max: 100 },
                  { label: "Supply Chain Scope 3", val: 28, max: 100 },
                ].map((s, i) => (
                  <div key={i} className="space-y-2">
                     <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase">
                        <span>{s.label}</span>
                        <span className="text-[#fabf37]">{s.val} tons</span>
                     </div>
                     <div className="w-full h-1 bg-black rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${s.val}%` }} className="h-full bg-emerald-500" />
                     </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[40px] p-10 flex flex-col items-center justify-center text-center space-y-6">
             <Leaf className="size-16 text-emerald-500" />
             <h4 className="text-2xl font-black text-white uppercase tracking-tight">Global Impact Score: 92/100</h4>
             <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">Your manufacturing facility is operating at 92% eco-efficiency. <br/> Keep up the green transition!</p>
             <button className="px-10 py-4 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest rounded-xl">Download ESG Report</button>
          </div>
       </div>
    </ViewContainer>
  );
}
