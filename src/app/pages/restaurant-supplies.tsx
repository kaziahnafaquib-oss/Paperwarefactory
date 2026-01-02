import React from "react";
import { motion } from "motion/react";
import { 
  Utensils, Box, ShoppingBag, CircleCheck as CheckCircle2, 
  ArrowRight, ShieldCheck, Zap, Thermometer, Droplets
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Truck } from "lucide-react";

const products = [
  { name: "Food Box", desc: "Grease-resistant industrial grade food containers.", image: "https://images.unsplash.com/photo-1626253934161-08cfea22e968", price: "8.50" },
  { name: "Chowmein Box", desc: "Leak-proof boxes with specialized thermal coating.", image: "https://images.unsplash.com/photo-1598449356475-b9f71ef7d847", price: "6.20" },
  { name: "Meat Box", desc: "Heavy-duty boxes for raw and processed meats.", image: "https://images.unsplash.com/photo-1544378730-8b5104b18790", price: "12.00" },
  { name: "Sandwich Box", desc: "Clear-window display boxes for freshness.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8", price: "5.50" },
  { name: "Burger Box", desc: "Ventilated boxes to maintain crispness.", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add", price: "7.00" },
  { name: "Pizza Box", desc: "Triple-layer corrugated heat-retention boxes.", image: "https://images.unsplash.com/photo-1590671886396-ed1f9ec62234", price: "15.00" },
  { name: "Cake Box", desc: "Premium handle-integrated pastry packaging.", image: "https://images.unsplash.com/photo-1572381731619-3979fd6ad16d", price: "18.50" },
  { name: "Sweet Box", desc: "Traditional and luxury boxes with foil stamping.", image: "https://images.unsplash.com/photo-1599458252282-f472647dc64a", price: "25.00" },
];

export function RestaurantSuppliesPage({ onProductClick }: { onProductClick: (p: any) => void }) {
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
            <span className="text-[#fabf37] font-black uppercase tracking-[0.4em] text-xs">Food-Grade Packaging Solutions</span>
          </motion.div>
          <h1 className="text-[56px] md:text-[90px] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-black">
            Restaurant <br /> <span className="text-zinc-300">Supplies</span>
          </h1>
          <p className="text-zinc-500 font-bold text-lg max-w-2xl leading-relaxed">
            Our food packaging is engineered for the modern culinary industry. Leak-proof, heat-retaining, and 100% sustainable materials that keep your food as fresh as it was in the kitchen.
          </p>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Thermometer className="size-8" />, title: "Heat Retention", desc: "Keeps food hot for up to 45 minutes." },
            { icon: <Droplets className="size-8" />, title: "Grease Proof", desc: "Specialized coating prevents oil leakage." },
            { icon: <ShieldCheck className="size-8" />, title: "FDA Approved", desc: "100% food-safe virgin pulp materials." },
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white border border-black/5 rounded-[40px] shadow-sm">
              <div className="size-16 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 text-[#fabf37]">
                {item.icon}
              </div>
              <h4 className="text-xl font-black uppercase mb-4">{item.title}</h4>
              <p className="text-zinc-500 font-bold text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onProductClick(p)}
              className="group bg-white rounded-[40px] border border-black/5 hover:border-[#fabf37] hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="size-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-[#fabf37] transition-all">
                  <Box className="size-5" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-3">{p.name}</h3>
                <p className="text-zinc-500 font-bold text-xs mb-6 leading-relaxed line-clamp-2">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">
                    Order Now <ArrowRight className="size-4" />
                  </button>
                  <Zap className="size-4 text-[#fabf37]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery Promotion Banner */}
      <section className="container mx-auto px-4 mb-32">
        <div className="bg-[#fabf37] rounded-[60px] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none"><Truck className="size-64 text-black" /></div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">Express <br /> Food-Pack</h2>
            <p className="text-black/60 font-bold text-lg max-w-md">Need packaging urgently for your restaurant? We dispatch within 12-24 hours for standard sizes.</p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <button className="bg-black text-[#fabf37] px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">Start Express Order</button>
          </div>
        </div>
      </section>

      {/* Industrial Banner */}
      <section className="bg-black py-32 relative overflow-hidden rounded-[80px] mx-4">
        <div className="absolute top-0 right-0 p-12 opacity-5"><Utensils className="size-64 text-[#fabf37]" /></div>
        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              Scale Your <span className="text-[#fabf37]">Chain</span>
            </h2>
            <p className="text-zinc-500 font-bold text-xl leading-relaxed">
              Supporting global food chains with consistent high-volume supply. Our manufacturing lines run 24/7 to ensure your packaging never stops.
            </p>
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-black text-white">10M+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#fabf37]">Boxes Monthly</p>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block" />
              <div className="space-y-2">
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#fabf37]">Biodegradable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}