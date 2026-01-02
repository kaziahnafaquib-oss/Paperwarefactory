import React from "react";
import { motion } from "motion/react";
import { Handshake, Target, CircleCheck as CheckCircle2, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-white z-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fabf37] to-transparent opacity-20" />
    </div>
    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="size-2 rounded-full bg-[#fabf37] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Collaborative Network Node</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          {title}
        </h1>
        <p className="text-lg md:text-xl font-bold text-zinc-500 uppercase italic max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </div>
  </section>
);

const ContentBlock = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 px-4 bg-white ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
);

export function PartnersPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen font-['Poppins',sans-serif] selection:bg-[#fabf37] selection:text-black">
      <PageHeader 
        title="Partner Program" 
        subtitle="Building a resilient, transparent, and future-ready manufacturing ecosystem through strategic collaboration."
      />

      <ContentBlock>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <p className="text-xl font-medium text-zinc-600 leading-relaxed">
                Paperware Factory collaborates with suppliers, distributors, logistics providers, designers, and technology partners through a structured Partner Program.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                We believe strong partnerships are key to building a resilient and future-ready manufacturing ecosystem in Bangladesh. Our program is designed to create long-term value for all stakeholders.
              </p>
            </div>

            <div className="space-y-10">
               <h3 className="text-2xl font-black uppercase tracking-tight text-black flex items-center gap-4">
                 <Target className="size-6 text-[#fabf37]" />
                 Ecosystem Focus
               </h3>
               <div className="grid gap-6">
                 {[
                   { title: "Long-term Mutual Growth", desc: "Sustainable scaling that benefits both the manufacturer and the partner." },
                   { title: "Ethical Practices", desc: "Commitment to transparent and fair business conduct across all nodes." },
                   { title: "Consistent Quality", desc: "Rigorous adherence to compliance and international quality standards." },
                   { title: "Technology-Driven", desc: "Leveraging data and automation for operational excellence." },
                   { title: "Innovation Focused", desc: "Co-developing next-generation sustainable packaging solutions." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 p-8 bg-zinc-50 rounded-[40px] border border-zinc-100 items-start">
                     <div className="size-10 shrink-0 rounded-full bg-white flex items-center justify-center text-black border border-zinc-200">
                        <CheckCircle2 className="size-5" />
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-black">{item.title}</h4>
                        <p className="text-xs font-medium text-zinc-500 leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="p-10 bg-black rounded-[48px] text-white space-y-10">
              <div className="size-16 rounded-2xl bg-[#fabf37] flex items-center justify-center text-black">
                <Handshake className="size-8" />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Partner Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Stable production demand & volume",
                    "Digital process integration via ERPNext",
                    "Clear communication and forecasting",
                    "Brand association with eco-leaders"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="size-1 bg-[#fabf37] rounded-full" />
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-6 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#fabf37] transition-all">
                Join Ecosystem
              </button>
            </div>
          </div>
        </div>
      </ContentBlock>
    </div>
  );
}