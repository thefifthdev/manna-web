"use client";

import ScrollReveal from "./ScrollReveal";

interface Feature {
  n: string;
  eyebrow: string;
  title: string;
  desc: string;
  tags: string[];
  visual: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    n: "01",
    eyebrow: "Daily verse",
    title: "One verse, every morning.",
    desc: "A fresh passage waits on your home screen and lock screen. Open it, share it, or let it sit with you through the day.",
    tags: ["Home widget", "Share card", "Notifications"],
    visual: (
      <div className="relative aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#FFF8F1] to-[#F5E6D3] border border-[#EBEBEB] p-8 flex flex-col">
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#C4956A] font-semibold">
          Verse of the day
        </div>
        <div className="mt-auto">
          <div className="font-black text-3xl leading-tight text-[#1A1A1A]">
            &ldquo;Give us this day our daily bread.&rdquo;
          </div>
          <div className="mt-4 text-[13px] text-[#7A5230] font-semibold">
            Matthew 6:11
          </div>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    eyebrow: "Full Bible reader",
    title: "KJV, NLT, NIV — switch instantly.",
    desc: "The whole canon, clean typography, one-tap translation switching. Designed to be read — not just searched.",
    tags: ["3 translations", "Chapter reader", "Font control"],
    visual: (
      <div className="relative aspect-[3/4] rounded-3xl bg-white border border-[#EBEBEB] p-8 flex flex-col">
        <div className="flex gap-2 mb-6">
          {["KJV", "NLT", "NIV"].map((t, i) => (
            <span
              key={t}
              className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                i === 0
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-[#F5F5F5] text-[#9B9B9B]"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="text-[11px] uppercase tracking-wider text-[#9B9B9B] font-semibold">
          John 1
        </div>
        <div className="mt-4 space-y-3 text-[15px] leading-[1.7] text-[#2A2A2A]">
          <p>
            <sup className="text-[#C4956A] font-bold mr-1">1</sup>In the
            beginning was the Word, and the Word was with God, and the Word was
            God.
          </p>
          <p className="opacity-70">
            <sup className="text-[#C4956A] font-bold mr-1">2</sup>The same was
            in the beginning with God.
          </p>
          <p className="opacity-40">
            <sup className="text-[#C4956A] font-bold mr-1">3</sup>All things
            were made by him…
          </p>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    eyebrow: "Search",
    title: "Find any verse in seconds.",
    desc: "Look up a reference, search a theme, rediscover something half-remembered. Results land instantly.",
    tags: ["Reference lookup", "Keyword search", "History"],
    visual: (
      <div className="relative aspect-[3/4] rounded-3xl bg-white border border-[#EBEBEB] p-8 flex flex-col">
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#F5F5F5]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#9B9B9B]">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <span className="text-[14px] text-[#1A1A1A] font-medium">
            love your enemies
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {[
            "Matthew 5:44",
            "Luke 6:27",
            "Luke 6:35",
            "Romans 12:20",
          ].map((r, i) => (
            <div
              key={r}
              className="p-3 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB]"
              style={{ opacity: 1 - i * 0.15 }}
            >
              <div className="text-[12px] font-semibold text-[#C4956A]">
                {r}
              </div>
              <div className="text-[13px] text-[#5A5A5A] mt-1 line-clamp-1">
                …love your enemies, bless them that curse you…
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: "04",
    eyebrow: "Save & share",
    title: "Long-press any verse. Share beautifully.",
    desc: "Save passages for later, or export a themed share card you&apos;d actually want to post. Four themes built in.",
    tags: ["Save verses", "4 themes", "1080×1920"],
    visual: (
      <div className="relative aspect-[3/4] rounded-3xl bg-[#1A1A1A] p-8 flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,149,106,0.3),transparent_60%)]" />
        <div className="relative z-10 text-[11px] uppercase tracking-[0.2em] text-[#C4956A] font-semibold">
          Manna · Share card
        </div>
        <div className="relative z-10 mt-auto">
          <div className="font-black text-2xl leading-tight text-white">
            &ldquo;Be still, and know that I am God.&rdquo;
          </div>
          <div className="mt-4 text-[12px] text-[#C4956A] font-semibold">
            Psalm 46:10
          </div>
        </div>
      </div>
    ),
  },
  {
    n: "05",
    eyebrow: "Streaks",
    title: "A habit, gently tracked.",
    desc: "Open Manna each day and watch your streak grow. No guilt, no gamification — just a quiet record of showing up.",
    tags: ["Daily streak", "Milestones", "Private"],
    visual: (
      <div className="relative aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] border border-[#EBEBEB] p-8 flex flex-col items-center justify-center">
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#9B9B9B] font-semibold">
          Current streak
        </div>
        <div className="mt-4 font-black text-[96px] leading-none text-[#1A1A1A]">
          42
        </div>
        <div className="mt-2 text-[14px] text-[#5A5A5A]">days in a row</div>
        <div className="mt-10 flex gap-1.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm"
              style={{
                background: i < 12 ? "#C4956A" : "#EBEBEB",
                opacity: i < 12 ? 1 - (11 - i) * 0.05 : 1,
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-[#C4956A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C4956A]">
              Features
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-[1.05] text-[#1A1A1A] max-w-3xl">
            Everything you need for daily scripture.
            <span className="text-[#9B9B9B]"> Nothing you don&apos;t.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-24 space-y-32 md:space-y-48">
          {FEATURES.map((f, i) => (
            <div
              key={f.n}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ScrollReveal>{f.visual}</ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div>
                  <div className="font-black text-[11px] tracking-[0.2em] text-[#C4956A]">
                    {f.n} — {f.eyebrow.toUpperCase()}
                  </div>
                  <h3 className="mt-4 font-black text-3xl md:text-5xl tracking-tight leading-[1.05] text-[#1A1A1A]">
                    {f.title}
                  </h3>
                  <p className="mt-6 text-lg leading-[1.65] text-[#5A5A5A]">
                    {f.desc}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[rgba(196,149,106,0.12)] text-[#7A5230] border border-[rgba(196,149,106,0.2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
