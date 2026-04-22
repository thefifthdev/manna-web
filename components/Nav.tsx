"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { APP_NAME } from "../lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#EBEBEB]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt={APP_NAME}
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
          <span className="font-bold tracking-tight text-[17px]">
            {APP_NAME}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#5A5A5A]">
          <a href="#story" className="hover:text-[#1A1A1A] transition-colors">
            Story
          </a>
          <a href="#features" className="hover:text-[#1A1A1A] transition-colors">
            Features
          </a>
          <a href="#coming-soon" className="hover:text-[#1A1A1A] transition-colors">
            What&apos;s next
          </a>
        </nav>

        <Link
          href="/download"
          className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white text-[13px] font-semibold pl-4 pr-3 py-2 rounded-full hover:bg-[#C4956A] transition-colors"
        >
          Download
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
