"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function DownloadCTA() {
  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-[32px] overflow-hidden border border-[#EBEBEB] bg-gradient-to-br from-white to-[#FFF8F1] p-10 md:p-20">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C4956A]/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#8B7EC8]/10 blur-3xl"
            />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4956A]" />
                <span className="text-[11px] font-bold tracking-wider uppercase">
                  Available on Solana dApp Store
                </span>
              </div>

              <h2 className="mt-8 font-black text-4xl md:text-6xl tracking-tight leading-[1.05] text-[#1A1A1A]">
                Ready for your{" "}
                <span className="italic font-medium text-[#C4956A]">
                  daily bread
                </span>
                ?
              </h2>

              <p className="mt-6 text-lg text-[#5A5A5A] max-w-lg mx-auto">
                Install Manna from the Solana dApp Store. No account needed.
                Free, offline, and yours.
              </p>

              <div className="mt-10">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-[16px] font-semibold pl-7 pr-6 py-4 rounded-full hover:bg-[#C4956A] transition-colors"
                >
                  Install from dApp Store
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-5 text-[12px] uppercase tracking-wider text-[#9B9B9B]">
                <span>Free</span>
                <span className="w-1 h-1 rounded-full bg-[#9B9B9B]" />
                <span>No account</span>
                <span className="w-1 h-1 rounded-full bg-[#9B9B9B]" />
                <span>Works offline</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
