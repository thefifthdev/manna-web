"use client";

import { useEffect, useRef } from "react";

export default function HeroLottie() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const lottie = (await import("lottie-web")).default;
      if (cancelled || !containerRef.current) return;
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/splash-lottie.json",
      });
    })();
    return () => {
      cancelled = true;
      const anim = animRef.current as { destroy?: () => void } | null;
      if (anim?.destroy) anim.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="w-[260px] h-[260px] md:w-[340px] md:h-[340px]"
    />
  );
}
