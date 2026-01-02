import React from "react";
import { motion } from "motion/react";
import { Send, FileText, Package, Truck } from "lucide-react";

export function QuoteRequestPage() {
  return (
    <div className="pb-24 bg-[#fdfaf3] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[#fabf37] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Bulk Orders</span>
              <h1 className="text-[38px] md:text-[52px] font-black uppercase tracking-tight leading-none text-black">
                Request a <br className="hidden md:block" /> Quotation
              </h1>
              <p className="text-zinc-500 font-bold text-base md:text-lg leading-relaxed max-w-md">
                Get a customized pricing plan for your business requirements.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { icon: <Package />, title: "Custom Branding", desc: "Add your logo and brand colors." },
                { icon: <FileText />, title: "Detailed Invoices", desc: "Full breakdown for compliance." },
                { icon: <Truck />, title: "Factory Direct", desc: "Straight from our Dhaka facility." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-center">
                  <div className="size-12 md:size-14 rounded-2xl bg-black text-[#fabf37] flex items-center justify-center shrink-0">
                    <div className="scale-75 md:scale-100">{item.icon}</div>
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">{item.title}</h3>
                    <p className="text-zinc-500 font-semibold text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl border border-black/5"
          >
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Full Name</label>
                  <input type="text" className="w-full bg-zinc-50 border-none rounded-2xl p-4 md:p-5 font-bold text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Company Name</label>
                  <input type="text" className="w-full bg-zinc-50 border-none rounded-2xl p-4 md:p-5 font-bold text-sm" placeholder="Brand Ltd." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Email Address</label>
                <input type="email" className="w-full bg-zinc-50 border-none rounded-2xl p-4 md:p-5 font-bold text-sm" placeholder="contact@brand.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Product Category</label>
                <select className="w-full bg-zinc-50 border-none rounded-2xl p-4 md:p-5 font-bold text-sm appearance-none">
                  <option>Paper Cups</option>
                  <option>Paper Bags</option>
                  <option>Food Boxes</option>
                  <option>Pharma Packaging</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Requirement Details</label>
                <textarea rows={4} className="w-full bg-zinc-50 border-none rounded-2xl p-4 md:p-5 font-bold text-sm resize-none" placeholder="Volume, Specs, Timeline..."></textarea>
              </div>
              <button className="w-full bg-black text-[#fabf37] py-5 md:py-6 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#fabf37] hover:text-black transition-all shadow-xl shadow-black/10">
                Submit RFQ <Send className="size-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}