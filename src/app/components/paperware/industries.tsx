import React from "react";
import { Utensils, Coffee, Hospital, Pill, Briefcase, Hotel, ArrowRight, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { Card3D } from "./3d-card";

const getIndustries = (t: (key: string) => string) => [
  {
    title: t('restaurants'),
    desc: t('restaurant_desc'),
    icon: <Utensils className="size-5 md:size-6" />,
  },
  {
    title: t('cafes'),
    desc: t('cafe_desc'),
    icon: <Coffee className="size-5 md:size-6" />,
  },
  {
    title: t('hospitals'),
    desc: t('hospital_desc'),
    icon: <Hospital className="size-5 md:size-6" />,
  },
  {
    title: t('pharmaceutical'),
    desc: t('pharma_desc'),
    icon: <Pill className="size-5 md:size-6" />,
  },
  {
    title: t('corporate_clients'),
    desc: t('corporate_desc'),
    icon: <Briefcase className="size-5 md:size-6" />,
  },
  {
    title: t('hotels'),
    desc: t('hotel_desc'),
    icon: <Hotel className="size-5 md:size-6" />,
  },
];

export const Industries = React.memo(function Industries({ onExplore }: { onExplore: () => void }) {
  const { t } = useLanguage();

  const industries = React.useMemo(() => getIndustries(t), [t]);

  return (
    <section className="py-20 md:py-32 bg-zinc-50 relative overflow-hidden perspective-1000">
      {/* 3D Grid Background - Simplified for White Tone */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: 'perspective(1000px) rotateX(60deg) translateZ(-200px)',
        transformOrigin: 'center top',
      }} />

      {/* Floating Cubes 3D - Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {[...Array(5)].map((_, i) => (
            <motion.div 
               key={`cube-${i}`}
               animate={{ 
                  y: [0, -40, 0],
                  rotateX: [0, 360],
                  rotateY: [0, 360]
               }}
               transition={{ 
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
               }}
               className="absolute opacity-[0.03] border border-black/20"
               style={{
                  width: 50 + i * 20,
                  height: 50 + i * 20,
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 15}%`,
               }}
            />
         ))}
      </div>


      {/* Floating Particles - Adjusted for light background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute size-1 bg-zinc-400 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Compact 3D Header */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="inline-block text-[#fabf37] font-bold uppercase tracking-[0.25em] text-[8px] md:text-[9px] mb-4 md:mb-6 px-3 py-1 bg-[#fabf37]/10 border border-[#fabf37]/30 rounded backdrop-blur-sm">
            {t('sectors_tag')}
          </span>
          
          <h2 className="text-[28px] md:text-[42px] lg:text-[52px] font-black text-black leading-[0.95] tracking-tight mb-6 md:mb-8">
            {t('industries_subtitle')}
          </h2>

          <div className="flex items-start gap-6 md:gap-8">
            <motion.div 
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-0.5 h-16 bg-gradient-to-b from-[#fabf37] to-transparent" 
            />
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              {t('industries_desc')}
            </p>
          </div>
        </motion.div>

        {/* 3D Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24 perspective-1000">
          {industries.map((item, i) => (
            <Card3D key={i} intensity={20}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                onClick={onExplore}
                style={{ transformStyle: 'preserve-3d' }}
                className="group h-full bg-white p-8 rounded-[32px] border border-zinc-100 hover:border-[#fabf37]/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer relative overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fabf37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-20px)' }} />

                <div className="relative z-10 flex justify-between items-start mb-8" style={{ transform: 'translateZ(30px)' }}>
                  <div className="size-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-[#fabf37] group-hover:border-[#fabf37] transition-all duration-300 shadow-xl group-hover:shadow-[#fabf37]/30">
                    <div className="text-zinc-600 group-hover:text-black transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-5xl font-black text-zinc-100 group-hover:text-zinc-900/5 transition-colors duration-300 select-none" style={{ transform: 'translateZ(10px)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="relative z-10 space-y-3 flex-grow" style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="text-xl font-black text-zinc-900 group-hover:text-[#fabf37] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-zinc-100 group-hover:border-[#fabf37]/20 flex items-center justify-between transition-colors" style={{ transform: 'translateZ(25px)' }}>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    View Solutions
                  </span>
                  <div className="size-8 rounded-full bg-zinc-50 group-hover:bg-zinc-900 flex items-center justify-center transition-colors duration-300 shadow-md">
                    <ArrowRight className="size-3 text-zinc-400 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            </Card3D>
          ))}
        </div>

        {/* 3D CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-zinc-900 rounded-[3rem] p-8 md:p-16 overflow-hidden group shadow-2xl"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#fabf37] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            
            <div className="space-y-6 max-w-xl">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="size-1.5 rounded-full bg-[#fabf37] animate-pulse" />
                  <span className="text-[#fabf37] text-[10px] font-mono uppercase tracking-widest">
                    Industry Wide Impact
                  </span>
               </div>
               
               <h3 className="text-3xl md:text-5xl font-black text-white leading-[0.95] tracking-tight">
                  {t('explore_all_sectors')}
               </h3>
               
               <p className="text-zinc-400 font-medium text-sm leading-relaxed max-w-sm">
                  Discover how we serve diverse industries with tailored packaging solutions that prioritize sustainability.
               </p>
            </div>

            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={onExplore}
               className="group relative h-16 px-8 rounded-full bg-white text-zinc-900 flex items-center gap-4 font-black uppercase text-xs tracking-widest hover:bg-[#fabf37] transition-colors duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(250,191,55,0.3)]"
            >
               <span>View All Industries</span>
               <div className="size-8 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="size-4" />
               </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});