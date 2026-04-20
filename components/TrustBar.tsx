"use client";

import { motion, useReducedMotion } from "motion/react";
import { Lock, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

type PaymentBrand = "pix" | "visa" | "mastercard" | "amex" | "boleto" | "transfer";

const paymentMethods: Array<{ name: string; brand: PaymentBrand }> = [
  { name: "Pix", brand: "pix" },
  { name: "Visa", brand: "visa" },
  { name: "Mastercard", brand: "mastercard" },
  { name: "Amex", brand: "amex" },
  { name: "Boleto", brand: "boleto" },
  { name: "Transferência", brand: "transfer" },
];

function BrandIcon({ brand }: { brand: PaymentBrand }) {
  switch (brand) {
    case "pix":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            d="M12 2.75 21.25 12 12 21.25 2.75 12 12 2.75Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8.6 8.6 12 12l3.4-3.4M8.6 15.4 12 12l3.4 3.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "visa":
      return (
        <svg viewBox="0 0 40 24" aria-hidden="true" className="h-5 w-8">
          <rect x="1" y="1" width="38" height="22" rx="6" fill="rgba(255,255,255,0.08)" />
          <text
            x="20"
            y="16"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
            fill="currentColor"
            letterSpacing="1"
          >
            VISA
          </text>
        </svg>
      );
    case "mastercard":
      return (
        <svg viewBox="0 0 40 24" aria-hidden="true" className="h-5 w-8">
          <rect x="1" y="1" width="38" height="22" rx="6" fill="rgba(255,255,255,0.08)" />
          <circle cx="18" cy="12" r="6.5" fill="#FF5F00" opacity="0.95" />
          <circle cx="23" cy="12" r="6.5" fill="#EB001B" opacity="0.9" />
          <circle cx="20.5" cy="12" r="6.5" fill="#F79E1B" opacity="0.55" />
        </svg>
      );
    case "amex":
      return (
        <svg viewBox="0 0 40 24" aria-hidden="true" className="h-5 w-8">
          <rect x="1" y="1" width="38" height="22" rx="6" fill="#1EA7FF" opacity="0.95" />
          <text
            x="20"
            y="16"
            textAnchor="middle"
            fontSize="10"
            fontWeight="900"
            fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
            fill="#06131A"
            letterSpacing="1"
          >
            AMEX
          </text>
        </svg>
      );
    case "boleto":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <rect x="4" y="6.5" width="16" height="11" rx="2.5" fill="rgba(255,255,255,0.08)" />
          <path
            d="M7 9v6M9 9v6M11 9v6M14 9v6M16 9v6M18 9v6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "transfer":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            d="M7 7h13m0 0-3-3m3 3-3 3M17 17H4m0 0 3-3m-3 3 3 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function BrandIconWrap({ brand, children }: { brand: PaymentBrand; children: ReactNode }) {
  const brandClass =
    brand === "pix"
      ? "text-[#00E676] shadow-[0_0_0_1px_rgba(0,230,118,0.12),0_10px_30px_rgba(0,230,118,0.05)]"
      : brand === "visa"
        ? "text-[#6AA6FF] shadow-[0_0_0_1px_rgba(106,166,255,0.14),0_10px_30px_rgba(106,166,255,0.06)]"
        : brand === "mastercard"
          ? "text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_10px_30px_rgba(0,0,0,0.2)]"
          : brand === "amex"
            ? "text-white shadow-[0_0_0_1px_rgba(30,167,255,0.18),0_10px_30px_rgba(30,167,255,0.06)]"
            : brand === "boleto"
              ? "text-[#FDE047] shadow-[0_0_0_1px_rgba(253,224,71,0.14),0_10px_30px_rgba(253,224,71,0.04)]"
              : "text-[#A78BFA] shadow-[0_0_0_1px_rgba(167,139,250,0.16),0_10px_30px_rgba(167,139,250,0.05)]";

  return (
    <span
      className={[
        "grid place-items-center h-9 w-9 rounded-xl border border-white/10",
        "bg-gradient-to-br from-white/10 to-white/0",
        "transition-transform group-hover:scale-[1.04]",
        brandClass,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export function TrustBar() {
  const reduceMotion = useReducedMotion();
  const looped = [...paymentMethods, ...paymentMethods];

  return (
    <section id="pagamento" className="py-16 md:py-20 px-6 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00E676]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Pagamento simples e seguro
        </h2>
        <p className="text-[#AAAAAA] text-lg mb-12 max-w-xl mx-auto">
          Aceite no formato que preferir — Pix com aprovação imediata e cartões principais.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={["relative mb-12", reduceMotion ? "reduced" : ""].join(" ")}
        >
          <div className="viewport">
            <div className="track">
              {looped.map((method, idx) => (
                <div
                  key={`${method.name}-${idx}`}
                  className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-default shrink-0"
                >
                  <BrandIconWrap brand={method.brand}>
                    <BrandIcon brand={method.brand} />
                  </BrandIconWrap>
                  <span className="text-sm font-semibold tracking-tight text-white/70 group-hover:text-white transition-colors">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .viewport {
              overflow: hidden;
              -webkit-mask-image: linear-gradient(
                to right,
                transparent,
                black 10%,
                black 90%,
                transparent
              );
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }

            .track {
              display: flex;
              gap: 12px;
              width: max-content;
              will-change: transform;
              animation: scroll 18s linear infinite;
            }

            :global(.reduced) .track {
              animation: none;
              transform: translateX(0);
            }

            .viewport:hover .track {
              animation-play-state: paused;
            }

            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm border-t border-white/5 pt-8">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#00E676]" />
            <span className="text-white/60">Compra 100% segura</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00E676]" />
            <span className="text-white/60">Conexão criptografada (SSL)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-white/60">Dados protegidos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

