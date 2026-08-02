import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-white/90
        dark:bg-slate-950/90
        backdrop-blur
        border-b
        border-slate-200
        dark:border-slate-800
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <Link
          href="/#anasayfa"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/favicon.png"
            alt="Bosna Pusulası"
            width={50}
            height={50}
            priority
            className="rounded-full object-cover"
          />

          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Bosna Pusulası
          </span>
        </Link>

        {/* MENÜ */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/#anasayfa"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/#turlar"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
          >
            Turlar
          </Link>

          <Link
            href="/#neden-biz"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
          >
            Neden Biz
          </Link>

          <Link
            href="/yorumlar"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
          >
            Yorumlar
          </Link>

          <Link
            href="/rehber"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
          >
            Rehber
          </Link>

          <ThemeToggle />

          {/* PREMIUM REZERVASYON BUTONU */}
          <Link
            href="/rezervasyon"
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-700
              hover:shadow-[0_0_25px_rgba(59,130,246,0.55)]
            "
          >
            <span className="relative z-10">
              Rezervasyon
            </span>

            {/* Bosna Bayrağı Efekti */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                animate-bosnia-flag
                opacity-80
                bg-gradient-to-r
                from-transparent
                via-blue-300/70
                via-yellow-300/90
                via-white/80
                to-transparent
              "
            />

            {/* Hafif parlama */}
            <span
              className="
                absolute
                inset-0
                rounded-xl
                ring-1
                ring-white/10
              "
            />
          </Link>

        </div>
      </div>
    </nav>
  );
}