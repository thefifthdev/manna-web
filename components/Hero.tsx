"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroLottie from "./HeroLottie";
import { APP_TAGLINE, APP_SUB } from "../lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(196,149,106,0.12),transparent_60%)]"
      />
      <div className="grain" aria-hidden />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full bg-[rgba(196,149,106,0.12)] border border-[rgba(196,149,106,0.25)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4956A] animate-pulse" />
          <span className="text-[12px] font-semibold tracking-wider uppercase text-[#7A5230]">
            Built for Solana Mobile
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#1A1A1A]"
        >
          {APP_TAGLINE}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mt-6 text-[17px] md:text-xl text-[#5A5A5A] max-w-xl leading-relaxed"
        >
          {APP_SUB}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-[15px] font-semibold pl-6 pr-5 py-3.5 rounded-full hover:bg-[#C4956A] transition-colors"
          >
            Get on Solana dApp Store
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 border border-[#EBEBEB] bg-white text-[#1A1A1A] text-[15px] font-semibold px-6 py-3.5 rounded-full hover:border-[#C4956A] hover:text-[#C4956A] transition-colors"
          >
            See features
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex items-center gap-6 text-[12px] uppercase tracking-wider text-[#9B9B9B]"
        >
          <span>KJV · NLT · NIV</span>
          <span className="w-1 h-1 rounded-full bg-[#9B9B9B]" />
          <span>Home Widget</span>
          <span className="w-1 h-1 rounded-full bg-[#9B9B9B]" />
          <span>Offline</span>
        </motion.div>
      </div>
    </section>
  );
}
