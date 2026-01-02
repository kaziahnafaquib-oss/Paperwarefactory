import React from "react";
import { motion } from "motion/react";
import { ViewContainer } from "../ViewContainer";

export default function ActiveOrdersView() {
  return (
    <ViewContainer title="Active Orders" subtitle="Production & Logistics Tracking">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { id: "ORD-9901", product: "8oz Double Wall", progress: 65, status: "In Production", client: "Coffee World" },
            { id: "ORD-9902", product: "Eco-Liner Box", progress: 90, status: "Quality Check", client: "Burger Point" },
            { id: "ORD-9903", product: "Custom Gift Bag", progress: 25, status: "Material Sourcing", client: "Luxury Gifts" },
          ].map((ord) => (
            <div key={ord.id} className="bg-zinc-900/50 border border-white/5 rounded-[40px] p-10 space-y-6">
               <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black text-[#fabf37] uppercase tracking-widest">{ord.id}</p>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight mt-1">{ord.product}</h4>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 text-[9px] font-black text-zinc-400 uppercase tracking-widest">{ord.status}</span>
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase text-zinc-500">
                    <span>Production Progress</span>
                    <span className="text-white">{ord.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${ord.progress}%` }} className="h-full bg-[#fabf37]" />
                  </div>
               </div>
               <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#fabf37] transition-all">Open Production Node</button>
            </div>
          ))}
       </div>
    </ViewContainer>
  );
}
