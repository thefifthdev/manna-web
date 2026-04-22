import Image from "next/image";
import Link from "next/link";
import { APP_NAME, SUPPORT_EMAIL } from "../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#EBEBEB] bg-[#FAFAFA] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt={APP_NAME}
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-bold text-[17px]">{APP_NAME}</span>
            </Link>
            <p className="mt-4 text-[14px] text-[#5A5A5A] max-w-sm leading-[1.6]">
              A verse for every day. A Bible always with you. Built for Solana
              Mobile.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#9B9B9B] font-semibold">
              Legal
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <Link href="/privacy" className="text-[#1A1A1A] hover:text-[#C4956A]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#1A1A1A] hover:text-[#C4956A]">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-[#1A1A1A] hover:text-[#C4956A]">
                  License
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="text-[#1A1A1A] hover:text-[#C4956A]">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#9B9B9B] font-semibold">
              Elsewhere
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <Link href="/download" className="text-[#1A1A1A] hover:text-[#C4956A]">
                  Solana dApp Store
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-[#1A1A1A] hover:text-[#C4956A]"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#EBEBEB] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-[#9B9B9B]">
          <div>© {year} {APP_NAME}. All rights reserved.</div>
          <div className="max-w-xl md:text-right">
            Scripture via API.Bible. KJV public domain. NLT © Tyndale House
            Foundation. NIV © Biblica.
          </div>
        </div>
      </div>
    </footer>
  );
}
