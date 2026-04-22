"use client";

import ScrollReveal from "./ScrollReveal";

export default function StorySection() {
  return (
    <section id="story" className="relative py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-[#C4956A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C4956A]">
              The story
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-black text-4xl md:text-6xl tracking-tight leading-[1.05] text-[#1A1A1A]">
            Manna means{" "}
            <span className="italic font-medium text-[#C4956A]">
              &ldquo;what is it?&rdquo;
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-10 text-xl md:text-2xl leading-[1.55] text-[#2A2A2A] max-w-3xl">
            Every morning in the wilderness, bread appeared on the ground —
            just enough for that day. The Israelites called it manna. Not a
            feast. Not a stockpile. A portion, daily.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-lg leading-[1.7] text-[#5A5A5A] max-w-2xl">
            Manna the app is built around that same rhythm. One verse. One
            notification. One habit. Not another feed to scroll, but a quiet
            place to begin your day in scripture — with the full Bible waiting
            whenever you want to go deeper.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 pt-10 border-t border-[#EBEBEB] grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "3", l: "Translations" },
              { n: "66", l: "Books" },
              { n: "31K+", l: "Verses" },
              { n: "1", l: "Tap to open" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-black text-3xl md:text-4xl text-[#1A1A1A]">
                  {s.n}
                </div>
                <div className="mt-1 text-[12px] uppercase tracking-wider text-[#9B9B9B]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
