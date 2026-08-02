
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navClass = scrolled
    ? "fixed top-3 left-4 right-4 z-50 rounded-2xl border border-white/20 bg-white/70 shadow-2xl backdrop-blur-2xl dark:bg-slate-950/70 transition-all duration-500"
    : "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-slate-950/80 transition-all duration-500";

  const linkClass =
    "relative font-medium transition-all duration-300 hover:text-blue-600 dark:text-slate-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className={navClass}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${scrolled ? "py-3" : "py-4"} transition-all duration-300`}>
        <Link href="/#anasayfa" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/images/favicon.png"
            alt="Bosna Pusulası"
            width={48}
            height={48}
            priority
            className="rounded-full transition-transform duration-300 hover:scale-110"
          />
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Bosna Pusulası
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#anasayfa" className={linkClass}>Ana Sayfa</Link>
          <Link href="/#turlar" className={linkClass}>Turlar</Link>
          <Link href="/#neden-biz" className={linkClass}>Neden Biz</Link>
          <Link href="/yorumlar" className={linkClass}>Yorumlar</Link>
          <Link href="/rehber" className={linkClass}>Rehber</Link>

          <ThemeToggle />

          <Link
            href="/rezervasyon"
            className="rounded-xl bg-[#005BBB] px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#004b99] hover:shadow-[0_0_25px_rgba(0,91,187,0.45)]"
          >
            Rezervasyon
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-xl transition hover:bg-white/20"
            aria-label="Menüyü Aç/Kapat"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"}`}>
        <div className="space-y-1 bg-white/95 p-6 backdrop-blur-xl dark:bg-slate-950/95">
          {[
            ["Ana Sayfa","/#anasayfa"],
            ["Turlar","/#turlar"],
            ["Neden Biz","/#neden-biz"],
            ["Yorumlar","/yorumlar"],
            ["Rehber","/rehber"],
          ].map(([label,href])=>(
            <Link key={href} href={href} onClick={closeMenu}
              className="block rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">
              {label}
            </Link>
          ))}
          <Link
            href="/rezervasyon"
            onClick={closeMenu}
            className="mt-4 block rounded-xl bg-[#005BBB] px-4 py-3 text-center font-bold text-white transition hover:bg-[#004b99]"
          >
            Rezervasyon
          </Link>
        </div>
      </div>
    </nav>
  );
}