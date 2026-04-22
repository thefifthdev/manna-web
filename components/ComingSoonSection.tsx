"use client";

import ScrollReveal from "./ScrollReveal";

export default function ComingSoonSection() {
  return (
    <section
      id="coming-soon"
      className="relative py-32 md:py-48 px-6 bg-[#1A1A1A] text-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(196,149,106,0.18),transparent_55%),radial-gradient(circle_at_20%_90%,rgba(139,126,200,0.18),transparent_50%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-[#C4956A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C4956A]">
              What&apos;s next
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-3xl">
            More coming to your daily bread.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-lg text-[#9B9B9B] max-w-xl">
            Two features in active design. Both designed to deepen the habit
            without breaking the simplicity.
          </p>
        </ScrollReveal>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {/* Wallet card */}
          <ScrollReveal>
            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-10 h-full overflow-hidden hover:border-[#C4956A]/40 transition-colors">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C4956A]/10 blur-3xl"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4956A]/15 border border-[#C4956A]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4956A] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#C4956A]">
                    Phase 2 · Coming soon
                  </span>
                </div>

                <div className="mt-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C4956A" strokeWidth="1.5">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <circle cx="18" cy="14" r="1.5" fill="#C4956A" />
                  </svg>
                </div>

                <h3 className="mt-8 font-black text-3xl md:text-4xl tracking-tight leading-tight">
                  Bring your Solana identity.
                </h3>

                <p className="mt-5 text-[#9B9B9B] leading-[1.65]">
                  Connect Phantom, Solflare, or Seed Vault. Mint favorite
                  verses as compressed NFTs. Tithe via Solana Pay. Your
                  scripture, on-chain — privately, by choice.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["MWA", "cNFT verses", "Solana Pay tithes"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Wrapped card */}
          <ScrollReveal delay={0.1}>
            <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-10 h-full overflow-hidden hover:border-[#8B7EC8]/40 transition-colors">
              <div
                aria-hidden
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#8B7EC8]/10 blur-3xl"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B7EC8]/15 border border-[#8B7EC8]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7EC8] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#B5ACDE]">
                    Year-end · Coming soon
                  </span>
                </div>

                <div className="mt-10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B7EC8" strokeWidth="1.5">
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 4 4 5-5" />
                    <circle cx="20" cy="9" r="1.5" fill="#8B7EC8" />
                  </svg>
                </div>

                <h3 className="mt-8 font-black text-3xl md:text-4xl tracking-tight leading-tight">
                  Manna Wrapped.
                  <br />
                  <span className="text-[#B5ACDE]">Your year in scripture.</span>
                </h3>

                <p className="mt-5 text-[#9B9B9B] leading-[1.65]">
                  See your most-read books, longest streak, verses you shared,
                  and your spiritual journey — wrapped into a single beautiful
                  shareable card at year-end.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Top verses", "Streak chart", "Shareable card"].map(
                    (t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
