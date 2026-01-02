import React from "react";
import { motion } from "motion/react";
import { 
  Palette, Share2, Megaphone, CircleCheck as CheckCircle2, 
  ArrowRight, ShieldCheck, Zap, Globe, Sparkles
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Truck } from "lucide-react";

const products = [
  { name: "Paper Bag", desc: "Luxury branded carry bags with premium handles.", image: "https://images.unsplash.com/photo-1668012509229-782623ba3306", price: "45.00" },
  { name: "Brochure / Catalog", desc: "High-finish marketing literature for your brand.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363", price: "25.00" },
  { name: "Premium Magazine", desc: "Executive quality print on demand magazines.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363", price: "85.00" },
  { name: "Flyer & Leaflet", desc: "Bulk promotional prints with sharp clarity.", image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6", price: "3.50" },
  { name: "Sticker", desc: "Custom-cut industrial adhesive branding assets.", image: "https://images.unsplash.com/photo-1572375927083-0785f98692ce", price: "1.20" },
  { name: "Calendar", desc: "Branded corporate desk and wall calendars.", image: "https://images.unsplash.com/photo-1563906267088-b029e7101114", price: "120.00" },
  { name: "Tissue Box", desc: "Customized promotional facial tissue packaging.", image: "https://images.unsplash.com/photo-1627633777218-59efc58abd0c", price: "35.00" },
];

export function MarketingMaterialsPage({ onProductClick }: { onProductClick: (p: any) => void }) {
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
            <div className="size-2 rounded-full bg-[#fabf37]" />
            <span className="text-[#fabf37] font-black uppercase tracking-[0.4em] text-xs">High-Impact Brand Collateral</span>
          </motion.div>
          <h1 className="text-[56px] md:text-[90px] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-black">
            Marketing <br /> <span className="text-zinc-300">Materials</span>
          </h1>
          <p className="text-zinc-500 font-bold text-lg max-w-2xl leading-relaxed">
            Turn your brand into a tangible experience. Our marketing collateral uses premium finishes, vibrant colors, and eco-friendly materials to leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black rounded-[60px] p-16 text-white space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform"><Sparkles className="size-48" /></div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none relative z-10">Premium <br /> <span className="text-[#fabf37]">Finishes</span></h2>
            <p className="text-zinc-500 font-bold leading-relaxed relative z-10">Spot UV, Foil Stamping, and Soft-Touch Lamination to make your marketing materials stand out from the noise.</p>
            <div className="flex gap-4 relative z-10">
              <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">UV Spot</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">Gold Foil</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">Embossing</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
             {[
               { icon: <Globe className="size-8" />, title: "Eco-Ink", desc: "Soy-based sustainable ink." },
               { icon: <Zap className="size-8" />, title: "Rapid Print", desc: "24-hour express options." },
               { icon: <Palette className="size-8" />, title: "Pantone", desc: "100% color accuracy." },
               { icon: <Share2 className="size-8" />, title: "On-Demand", desc: "Small to bulk runs." },
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-[40px] border border-black/5 flex flex-col items-center text-center space-y-4 hover:border-[#fabf37] transition-all">
                  <div className="text-zinc-300 group-hover:text-[#fabf37] transition-colors">{item.icon}</div>
                  <h4 className="text-xs font-black uppercase tracking-widest">{item.title}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="container mx-auto px-4 mb-32">
        <div className="space-y-4">
          {products.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onProductClick(p)}
              className="group bg-white p-8 md:p-12 rounded-[40px] border border-black/5 hover:bg-black transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <div className="size-24 rounded-3xl overflow-hidden shrink-0 border border-black/5">
                  <ImageWithFallback src={p.image} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-[#fabf37] transition-colors">{p.name}</h3>
                  <p className="text-zinc-500 font-bold group-hover:text-zinc-400 transition-colors">{p.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#fabf37]">Fast Track Delivery</span>
                  <span className="text-white/40 text-xs font-bold">Dispatch in 24h</span>
                </div>
                <button className="bg-[#fabf37] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shrink-0">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industrial Footer Section */}
      <section className="container mx-auto px-4">
        <div className="bg-[#fabf37] p-20 rounded-[80px] text-center space-y-8 shadow-2xl">
          <Megaphone className="size-20 mx-auto text-black" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Broadcast Your <span className="underline">Excellence</span></h2>
          <button className="bg-black text-[#fabf37] px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">
            Get A Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
}