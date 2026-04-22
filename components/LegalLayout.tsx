import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
  title: string;
  eyebrow?: string;
  effectiveDate?: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  eyebrow = "Legal",
  effectiveDate,
  children,
}: Props) {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#9B9B9B] hover:text-[#1A1A1A] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              Back to home
            </Link>
          </div>

          <div className="mb-12 pb-10 border-b border-[#EBEBEB]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[1px] bg-[#C4956A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C4956A]">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-black text-4xl md:text-5xl tracking-tight leading-[1.05] text-[#1A1A1A]">
              {title}
            </h1>
            {effectiveDate && (
              <div className="mt-5 text-[13px] text-[#9B9B9B]">
                Effective {effectiveDate}
              </div>
            )}
          </div>

          <article className="legal-prose">{children}</article>
        </div>
      </main>
      <Footer />

      <style>{`
        .legal-prose {
          color: #2A2A2A;
          font-size: 16px;
          line-height: 1.75;
        }
        .legal-prose h2 {
          font-weight: 800;
          font-size: 22px;
          line-height: 1.3;
          color: #1A1A1A;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .legal-prose h2:first-child { margin-top: 0; }
        .legal-prose h3 {
          font-weight: 700;
          font-size: 17px;
          color: #1A1A1A;
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .legal-prose p { margin-bottom: 1rem; }
        .legal-prose ul { list-style: disc; padding-left: 1.25rem; margin-bottom: 1rem; }
        .legal-prose ul li { margin-bottom: 0.5rem; }
        .legal-prose a { color: #C4956A; text-decoration: underline; }
        .legal-prose strong { color: #1A1A1A; font-weight: 700; }
      `}</style>
    </>
  );
}
