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
    <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(250,191,55,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(250,191,55,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: 'perspective(1000px) rotateX(60deg) translateZ(-200px)',
        transformOrigin: 'center top',
      }} />

      {/* Floating Particles */}
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
            className="absolute size-1 bg-[#fabf37] rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orb */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#fabf37]/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Compact 3D Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30, z: -100 }}
          whileInView={{ opacity: 1, y: 0, z: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="inline-block text-[#fabf37] font-bold uppercase tracking-[0.25em] text-[8px] md:text-[9px] mb-4 md:mb-6 px-3 py-1 bg-[#fabf37]/10 border border-[#fabf37]/30 rounded backdrop-blur-sm">
            {t('sectors_tag')}
          </span>
          
          <h2 className="text-[28px] md:text-[42px] lg:text-[52px] font-black text-white leading-[0.95] tracking-tight mb-6 md:mb-8 bg-gradient-to-r from-white via-zinc-100 to-white bg-clip-text text-transparent">
            {t('industries_subtitle')}
          </h2>

          <div className="flex items-start gap-6 md:gap-8">
            <motion.div 
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-0.5 h-16 bg-gradient-to-b from-[#fabf37] to-transparent" 
            />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              {t('industries_desc')}
            </p>
          </div>
        </motion.div>

        {/* 3D Card List */}
        <div className="space-y-4 md:space-y-6 mb-16 md:mb-24">
          {industries.map((item, i) => (
            <Card3D key={i} intensity={12}>
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 12, z: 40, scale: 1.02 }}
                onClick={onExplore}
                className="group cursor-pointer relative overflow-hidden rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                }}
              >
                {/* Glass Reflection */}
                <motion.div
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fabf37]/0 via-[#fabf37]/0 to-[#fabf37]/0 group-hover:from-[#fabf37]/10 group-hover:via-[#fabf37]/5 group-hover:to-transparent transition-all duration-500" />

                <div className="py-6 md:py-8 px-6 md:px-8 grid grid-cols-12 gap-3 md:gap-6 items-center relative">
                  {/* 3D Number */}
                  <div className="col-span-2 md:col-span-1">
                    <motion.span 
                      whileHover={{ scale: 1.2, rotateY: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block text-2xl md:text-3xl lg:text-4xl font-black text-white/20 group-hover:text-[#fabf37]/50 transition-colors duration-300"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>
                  </div>

                  {/* 3D Icon */}
                  <div className="col-span-2 md:col-span-1 flex justify-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15, z: 50 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="size-10 md:size-12 lg:size-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:from-[#fabf37] group-hover:to-[#d6a32e] flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(250,191,55,0.4)]"
                      style={{ transform: 'translateZ(40px)' }}
                    >
                      <div className="text-zinc-400 group-hover:text-black transition-colors duration-300">
                        {item.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="col-span-8 md:col-span-4 lg:col-span-3">
                    <h3 className="text-base md:text-xl lg:text-2xl font-black text-white uppercase tracking-tight leading-none group-hover:text-[#fabf37] transition-colors duration-300" style={{ transform: 'translateZ(20px)' }}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-5 lg:col-span-6 md:col-start-8 lg:col-start-6">
                    <p className="text-zinc-500 group-hover:text-zinc-300 text-xs md:text-sm leading-relaxed font-medium transition-colors duration-300" style={{ transform: 'translateZ(15px)' }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* 3D Arrow */}
                  <div className="hidden md:block col-span-1 justify-self-end">
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1, z: 60, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="size-10 lg:size-12 rounded-full bg-gradient-to-br from-black to-zinc-900 group-hover:from-[#fabf37] group-hover:to-[#d6a32e] flex items-center justify-center transition-all duration-300 shadow-xl"
                      style={{ transform: 'translateZ(50px)' }}
                    >
                      <ArrowRight className="size-4 lg:size-5 text-[#fabf37] group-hover:text-black transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>

                {/* 3D Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-0.5 bg-gradient-to-r from-[#fabf37] via-[#fabf37] to-transparent origin-left shadow-[0_0_15px_rgba(250,191,55,0.6)]"
                  style={{ transform: 'translateZ(10px)' }}
                />
              </motion.div>
            </Card3D>
          ))}
        </div>

        {/* 3D CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30, z: -50 }}
          whileInView={{ opacity: 1, y: 0, z: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 p-8 md:p-10 rounded-2xl relative overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fabf37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="max-w-lg relative z-10" style={{ transform: 'translateZ(20px)' }}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3">
              {t('explore_all_sectors')}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-medium">
              Discover how we serve diverse industries with tailored packaging solutions
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.08, z: 40 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplore}
            className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#fabf37] to-[#d6a32e] text-black rounded-full overflow-hidden shadow-[0_0_30px_rgba(250,191,55,0.3)] hover:shadow-[0_0_50px_rgba(250,191,55,0.6)] transition-all duration-300"
            style={{ transform: 'translateZ(30px)' }}
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            
            <div className="relative flex items-center gap-3">
              <span className="font-black uppercase text-[10px] md:text-xs tracking-widest">
                View All
              </span>
              <motion.div
                whileHover={{ x: 5, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MoveRight className="size-4" />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});