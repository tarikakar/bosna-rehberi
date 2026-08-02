"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/#anasayfa"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <Image
            src="/images/favicon.png"
            alt="Bosna Pusulası"
            width={48}
            height={48}
            priority
            className="rounded-full"
          />

          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Bosna Pusulası
          </span>
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/#anasayfa"
            className="transition hover:text-blue-600 dark:text-slate-300"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/#turlar"
            className="transition hover:text-blue-600 dark:text-slate-300"
          >
            Turlar
          </Link>

          <Link
            href="/#neden-biz"
            className="transition hover:text-blue-600 dark:text-slate-300"
          >
            Neden Biz
          </Link>

          <Link
            href="/yorumlar"
            className="transition hover:text-blue-600 dark:text-slate-300"
          >
            Yorumlar
          </Link>

          <Link
            href="/rehber"
            className="transition hover:text-blue-600 dark:text-slate-300"
          >
            Rehber
          </Link>

          <ThemeToggle />

          <Link
            href="/rezervasyon"
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              bg-[#005BBB]
              px-6
              py-3
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#004b99]
              hover:shadow-[0_0_25px_rgba(0,91,187,0.45)]
            "
          >
            <span className="relative z-10">
              Rezervasyon
            </span>

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                animate-bosnia-flag
                bg-gradient-to-r
                from-transparent
                via-blue-300/70
                via-yellow-300/90
                via-white/80
                to-transparent
              "
            />
          </Link>

        </div>

        {/* Mobil Sağ Alan */}
        <div className="flex items-center gap-3 md:hidden">

          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/10
              p-2
              backdrop-blur-xl
              transition
              hover:bg-white/20
            "
            aria-label="Menüyü Aç/Kapat"
          >
            {menuOpen ? (
              <X size={24} className="text-slate-900 dark:text-white" />
            ) : (
              <Menu size={24} className="text-slate-900 dark:text-white" />
            )}
          </button>

        </div>
      </div>

      {/* Mobil Menü */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          md:hidden
          ${
            menuOpen
              ? "max-h-[500px] border-t border-white/10"
              : "max-h-0"
          }
        `}
      >
        <div className="space-y-1 bg-white/95 p-6 backdrop-blur-xl dark:bg-slate-950/95">

          <Link
            href="/#anasayfa"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/#turlar"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Turlar
          </Link>

          <Link
            href="/#neden-biz"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Neden Biz
          </Link>

          <Link
            href="/yorumlar"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Yorumlar
          </Link>

          <Link
            href="/rehber"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Rehber
          </Link>

          <Link
            href="/rezervasyon"
            onClick={closeMenu}
            className="
              mt-4
              block
              rounded-xl
              bg-[#005BBB]
              px-4
              py-3
              text-center
              font-bold
              text-white
              transition
              hover:bg-[#004b99]
            "
          >
            Rezervasyon
          </Link>

        </div>
      </div>
    </nav>
  );
}