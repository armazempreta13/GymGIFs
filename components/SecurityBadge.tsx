"use client";

import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import type { ComponentProps } from "react";

type Props = {
  variant?: "stamp" | "pill";
  className?: string;
} & Omit<ComponentProps<typeof motion.div>, "className">;

function StampMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-9 w-9 shrink-0">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00E676" stopOpacity="0.95" />
          <stop offset="1" stopColor="#00C863" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M32 3.5l4.5 6.4 7.8-2.4 1.7 7.6 8-0.5-1.4 7.7 7 3.9-4.3 6.3 4.3 6.3-7 3.9 1.4 7.7-8-0.5-1.7 7.6-7.8-2.4-4.5 6.4-4.5-6.4-7.8 2.4-1.7-7.6-8 0.5 1.4-7.7-7-3.9 4.3-6.3-4.3-6.3 7-3.9-1.4-7.7 8 0.5 1.7-7.6 7.8 2.4L32 3.5Z"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.10)"
      />
      <circle cx="32" cy="32" r="18.5" fill="rgba(0,0,0,0.25)" />
      <circle cx="32" cy="32" r="16.5" fill="none" stroke="url(#g)" strokeWidth="2.5" />
      <path
        d="M27 32.5l3.2 3.2L38 28"
        fill="none"
        stroke="url(#g)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 40.5c3.5 3.7 7.6 5.6 12 5.6s8.5-1.9 12-5.6"
        fill="none"
        stroke="rgba(0,230,118,0.35)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SecurityBadge({ variant = "stamp", className, ...props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={[
        "inline-flex items-center gap-3",
        variant === "stamp"
          ? "px-4 py-2.5 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_0_0_1px_rgba(0,230,118,0.08),0_18px_45px_rgba(0,0,0,0.45)]"
          : "px-4 py-2 rounded-full bg-[#111] border border-[#00E676]/20 shadow-[0_0_15px_rgba(0,230,118,0.05)]",
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {variant === "stamp" ? (
        <>
          <motion.div
            animate={{ rotate: [0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <StampMark />
          </motion.div>
          <div className="text-left leading-tight">
            <p className="text-sm font-extrabold text-white">Compra 100% segura</p>
            <div className="mt-1 flex items-center gap-2 text-xs text-[#AAAAAA]">
              <ShieldCheck className="w-4 h-4 text-[#00E676]" />
              <span>SSL certificado • Dados protegidos</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldCheck className="w-5 h-5 text-[#00E676]" />
          </motion.div>
          <div className="text-left leading-tight">
            <p className="text-sm font-bold text-white">Compra 100% segura</p>
            <p className="text-xs text-[#AAAAAA]">Pagamento criptografado (SSL)</p>
          </div>
        </>
      )}
    </motion.div>
  );
}
