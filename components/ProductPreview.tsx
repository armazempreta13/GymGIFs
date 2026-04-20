"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Check, Gift } from "lucide-react";
import { siteConfig } from "../site.config";

export function ProductPreview() {
  return (
    <section id="conteudo" className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{siteConfig.productPreview.title}</h2>
          <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto">{siteConfig.productPreview.subtitle}</p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteConfig.productPreview.categories.map((cat, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-[#1A1A1A] rounded-[32px] overflow-hidden flex flex-col h-full border border-white/5 p-6 shadow-xl hover:border-[#00E676]/20 transition-all duration-300"
            >
              <div className="w-full relative h-[180px] mb-6 overflow-hidden rounded-2xl bg-[#222]">
                <Image 
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className='object-cover'
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-[20px] font-bold text-white mb-4 text-center leading-snug">{cat.title}</h3>
                <ul className="space-y-3 mt-auto">
                  {cat.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-[14px] text-[#AAAAAA] font-medium leading-relaxed">
                      <Check className="w-5 h-5 text-[#00E676] mr-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Bonus Card - Now acting as a full-width banner for visual balance */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="md:col-span-2 lg:col-span-3 bg-[#00E676]/5 border border-[#00E676]/20 rounded-[32px] flex flex-row items-center p-8 gap-8 relative overflow-hidden"
          >
            <div className="w-20 h-20 rounded-full bg-[#00E676]/10 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,230,118,0.2)]">
               <Gift className="w-10 h-10 text-[#00E676]" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">{siteConfig.productPreview.bonusTitle}</h3>
              <p className="text-[#AAAAAA] text-sm">{siteConfig.productPreview.bonusDesc}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
