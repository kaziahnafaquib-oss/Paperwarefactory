import React from "react";
import { motion } from "motion/react";
import { 
  HeartPulse, ShieldAlert, Microscope, CircleCheck as CheckCircle2, 
  ArrowRight, ShieldCheck, Zap, Layers, Cpu, FileBadge
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Truck } from "lucide-react";

const products = [
  { name: "Patient File", desc: "Durable medical record folders with antimicrobial coating.", image: "https://images.unsplash.com/photo-1584362923647-7847ad730b2c", price: "22.00" },
  { name: "X-Ray File", desc: "Large-format protective envelopes for diagnostic films.", image: "https://images.unsplash.com/photo-1584362923647-7847ad730b2c", price: "35.00" },
  { name: "Doctor's Prescription Pad", desc: "Secure serialized prescription pads with security features.", image: "https://images.unsplash.com/photo-1505751172107-573225a96220", price: "12.00" },
  { name: "Report Envelope", desc: "Privacy-guaranteed clinical report packaging.", image: "https://images.unsplash.com/photo-1550572017-738a8a40f286", price: "8.50" },
  { name: "Medicine Box", desc: "Precision-molded drug packaging with braille support.", image: "https://images.unsplash.com/photo-1550572017-738a8a40f286", price: "14.50" },
  { name: "Medicine Literature", desc: "Micro-folded dosage guides and safety leaflets.", image: "https://images.unsplash.com/photo-1550572017-738a8a40f286", price: "2.50" },
];

export function PharmaSuppliesPage({ onProductClick }: { onProductClick: (p: any) => void }) {
  const { t } = useLanguage();

  return (
    <div className="bg-[#fdfaf3] min-h-screen pt-32 pb-24 font-['Poppins',sans-serif]">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs">Medical Grade Packaging</span>
          </motion.div>
          <h1 className="text-[56px] md:text-[90px] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-black">
            Pharma <br /> <span className="text-zinc-300">Supplies</span>
          </h1>
          <p className="text-zinc-500 font-bold text-lg max-w-2xl leading-relaxed">
            Safety, precision, and compliance. Our pharmaceutical packaging and hospital stationary are manufactured in sterile environments, meeting strict global healthcare standards.
          </p>
        </div>
      </section>

      {/* Compliance Grid */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck />, title: "FDA Compliant", desc: "Safe for drugs." },
            { icon: <Microscope />, title: "Sterile Lab", desc: "Dust-free production." },
            { icon: <CheckCircle2 />, title: "ISO 15378", desc: "Pharma management." },
            { icon: <ShieldAlert />, title: "Anti-Counterfeit", desc: "Secure printing." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-black/5 rounded-[32px] flex flex-col items-center text-center space-y-4">
              <div className="text-emerald-500">{item.icon}</div>
              <h4 className="text-[10px] font-black uppercase tracking-widest">{item.title}</h4>
              <p className="text-zinc-400 font-bold text-[10px] uppercase leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Display */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              onClick={() => onProductClick(p)}
              className="group bg-white rounded-[50px] p-12 border border-black/5 flex items-start gap-8 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="size-32 rounded-[32px] overflow-hidden shrink-0 border border-black/5">
                <ImageWithFallback src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter">{p.name}</h3>
                <p className="text-zinc-500 font-bold leading-relaxed">{p.desc}</p>
                <div className="flex items-center gap-4 pt-4">
                   <span className="text-[9px] font-black uppercase px-3 py-1 bg-[#fabf37] text-black rounded-full">Ships in 24h</span>
                   <button className="text-[9px] font-black uppercase text-zinc-400 group-hover:text-black transition-colors">Order Samples</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pharma Logistics Banner */}
      <section className="container mx-auto px-4 mb-32">
        <div className="bg-black text-white rounded-[80px] p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none"><Truck className="size-64 text-[#fabf37]" /></div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Emergency <br /> <span className="text-[#fabf37]">Supply</span> Chain</h2>
            <p className="text-zinc-500 font-bold text-lg max-w-md">Critical medical stationary delivered within 24 hours to hospitals across the country.</p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <button className="bg-[#fabf37] text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">Hospital Quick-Order</button>
          </div>
        </div>
      </section>

      {/* Industrial Lab Preview */}
      <section className="bg-zinc-900 py-32 relative overflow-hidden rounded-[100px] mx-4">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              The <span className="text-emerald-500">Sterile</span> Standard
            </h2>
            <p className="text-zinc-500 font-bold text-lg leading-relaxed">
              We operate dedicated production lines for healthcare providers, ensuring zero cross-contamination and 100% batch traceability.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[60px] border border-white/10 space-y-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Production Engine Status</p>
            <div className="flex items-center gap-4">
               <div className="size-3 rounded-full bg-emerald-500 animate-ping" />
               <span className="text-white font-black uppercase tracking-tighter">HEPA-Filtered Active</span>
            </div>
            <button className="w-full bg-emerald-500 text-black py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
              Request Compliance Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}