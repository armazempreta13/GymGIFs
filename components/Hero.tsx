"use client";

import { motion, useReducedMotion } from "motion/react";
import { cubicBezier } from "motion";
import { CheckCircle, ArrowRight, ChevronDown, Play } from "lucide-react";
import { siteConfig } from "../site.config";
import { SecurityBadge } from "./SecurityBadge";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) } 
  }
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] px-6 overflow-hidden border-b border-white/5 flex items-center pt-20 pb-24 md:pt-28 md:pb-28">
      {/* Background Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_30%,rgba(0,230,118,0.08),transparent_60%),radial-gradient(700px_450px_at_85%_35%,rgba(59,130,246,0.06),transparent_55%)]" />
        <motion.div 
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: "rgba(0, 230, 118, 0.10)" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] blur-[150px] rounded-full"
        />
        <motion.div 
          animate={reduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.05, 0.085, 0.05] }}
          transition={reduceMotion ? undefined : { duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] blur-[120px] rounded-full"
        />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12"
      >
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div 
            variants={itemVariants}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-sm font-semibold mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="text-white/80">{siteConfig.hero.socialProof.text}</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.92] mb-8 tracking-tighter text-white"
          >
             Domine a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00C863]">
               Execução Perfeita
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[#AAAAAA] mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            {siteConfig.hero.subtitle}
          </motion.p>
          
          <motion.div
             variants={itemVariants}
             className="flex flex-col gap-4 items-center lg:items-start"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <motion.a 
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                href={siteConfig.global.checkoutUrl} 
                className="group flex items-center justify-center gap-2 bg-[#00E676] text-[#0F0F0F] font-extrabold text-lg px-8 py-5 rounded-2xl transition-all shadow-[0_0_40px_rgba(0,230,118,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F0F]"
              >
                {siteConfig.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                href="#conteudo"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex items-center justify-center px-6 py-5 rounded-2xl border border-white/10 text-white/80 font-bold text-base hover:border-white/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F0F]"
              >
                Ver o conteúdo
              </motion.a>
            </div>

            <SecurityBadge
              variant="stamp"
              className="w-fit mx-auto lg:mx-0 justify-center lg:justify-start"
            />

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
              {["Acesso imediato", "Sem mensalidade", "Garantia 7 dias"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/65"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E676]/80" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Benefits */}
        <motion.div 
           variants={itemVariants}
           className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          {siteConfig.hero.benefits.map((bullet, idx) => (
            <motion.div 
              key={idx} 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.03, y: -2 }
              }
              transition={reduceMotion ? undefined : { type: "spring", stiffness: 420, damping: 28 }}
              className="p-6 rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col gap-4 text-left shadow-2xl hover:border-white/20 hover:shadow-[#00E676]/15 transition-colors cursor-default"
            >
               <div className="w-10 h-10 rounded-full bg-[#00E676]/10 flex items-center justify-center">
                  <CheckCircle className="text-[#00E676] w-6 h-6" /> 
               </div>
               <span className="font-semibold text-white leading-snug">{bullet}</span>
            </motion.div>
          ))}
          <motion.div 
             whileHover={reduceMotion ? undefined : { scale: 1.01 }}
             className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] border border-[#00E676]/20 flex items-center gap-4 cursor-default"
          >
              <div className="w-12 h-12 rounded-full bg-[#00E676]/10 flex items-center justify-center shrink-0">
                  <Play className="w-6 h-6 text-[#00E676] fill-[#00E676]" />
              </div>
              <p className="text-sm text-[#AAAAAA]">
                <strong className="text-white block">{siteConfig.hero.urgency.title}</strong>
                {siteConfig.hero.valueAnchor}
              </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        aria-label="Rolar para ver mais"
        href="#pagamento"
        initial={{ opacity: 0, y: 6 }}
        animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, 6, 0] }}
        transition={reduceMotion ? { duration: 0.6 } : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur text-white/60 hover:text-white/80 hover:bg-black/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F0F]"
      >
        <span className="text-xs font-semibold tracking-tight">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.a>

    </section>
  );
}
