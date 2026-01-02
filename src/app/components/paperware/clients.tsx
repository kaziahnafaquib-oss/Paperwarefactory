import React from "react";
import { motion } from "motion/react";

// Logo assets
import imgAlArabian from "figma:asset/8c3ef6e2c2c81601beda5fdafc9fab7e12e9f1b9.png";
import imgBengalClassic from "figma:asset/34b648bdf72eb53992426ff8084a4c54fc8165e8.png";
import imgCafeZ from "figma:asset/53ca518289a67f7082d40754eedede50e7f28cde.png";
import imgCoffeeAvenue from "figma:asset/e1b52edc4bd49baf663705f27f615b1ffa798c3a.png";
import imgCrimsonCup from "figma:asset/21e853179b862e2a71c5e1a1ba5efe58235d205f.png";
import imgDhakaiKhana from "figma:asset/100dea1b4141ebb61c4f2107662ae90e9c55c9f7.png";
import imgAbdulMonem from "figma:asset/d4efddfc25e06a64c90d4b323e072c2ec51b5137.png";
import imgWalton from "figma:asset/b2396fe9ba2824e1ed2b4c04910aa4abbd4b857e.png";
import imgNovatek from "figma:asset/f3e7a2981f7316365dad8fd018a8e205ca11f7df.png";
import imgMgi from "figma:asset/c6f18cf9ae32f1211778c4cec70a04bd0581d943.png";
import imgIcddrb from "figma:asset/5fe4879b8ec37b86777b57fed80f5c8976e5963c.png";
import imgFresh from "figma:asset/5b67be8022542584cc3586961212c32c1ef3b5f5.png";

import { useLanguage } from "../../context/LanguageContext";

const clients = [
  imgAlArabian, imgBengalClassic, imgCafeZ, imgCoffeeAvenue, imgCrimsonCup, imgDhakaiKhana,
  imgAbdulMonem, imgWalton, imgNovatek, imgMgi, imgIcddrb, imgFresh
];

export function Clients() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black text-black uppercase tracking-tight">
            {t('clients')}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 max-w-6xl mx-auto">
          {clients.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img src={logo} alt={`Client ${i}`} className="max-h-16 w-auto object-contain" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-3 border-2 border-black rounded-md font-bold uppercase text-sm hover:bg-black hover:text-white transition-all">
            {t('explore_products')} →
          </button>
        </div>
      </div>
    </section>
  );
}