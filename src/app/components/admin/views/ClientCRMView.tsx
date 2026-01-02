import React from "react";
import { ViewContainer } from "../ViewContainer";

export default function ClientCRMView() {
  return (
    <ViewContainer title="Client CRM" subtitle="B2B Relationship Management">
       <div className="bg-black border border-white/5 rounded-[40px] overflow-hidden">
          <table className="w-full text-left">
             <thead className="bg-zinc-900/50 border-b border-white/5">
                <tr>
                   <th className="p-6 text-[10px] font-black text-zinc-500 uppercase">Client Name</th>
                   <th className="p-6 text-[10px] font-black text-zinc-500 uppercase">Tier</th>
                   <th className="p-6 text-[10px] font-black text-zinc-500 uppercase">Total Revenue</th>
                   <th className="p-6 text-[10px] font-black text-zinc-500 uppercase text-right">Actions</th>
                </tr>
             </thead>
             <tbody>
                {[
                  { name: "Global Foods Ltd", tier: "Platinum", rev: "$240,500" },
                  { name: "Metro Cafe", tier: "Gold", rev: "$85,200" },
                  { name: "Eco Solutions", tier: "Silver", rev: "$12,400" },
                ].map((c, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-zinc-800 flex items-center justify-center text-[#fabf37] font-black">{c.name[0]}</div>
                        <span className="text-sm font-bold text-white uppercase tracking-tight">{c.name}</span>
                      </div>
                    </td>
                    <td className="p-6"><span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{c.tier}</span></td>
                    <td className="p-6 text-sm font-black text-white">{c.rev}</td>
                    <td className="p-6 text-right">
                       <button className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-widest">Manage Account</button>
                    </td>
                  </tr>
                ))}
             </tbody>
          </table>
       </div>
    </ViewContainer>
  );
}
