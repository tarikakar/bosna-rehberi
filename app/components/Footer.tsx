import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-black">
              🇧🇦 Bosna Pusulası
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Bosna Hersek'in tarihi ve doğal güzelliklerini yerel
              rehberler eşliğinde keşfetmeniz için güvenilir tur hizmeti
              sunuyoruz.
            </p>
          </div>

          {/* Menü */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Hızlı Menü
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/#anasayfa"
                className="transition hover:text-blue-400"
              >
                Ana Sayfa
              </Link>

              <Link
                href="/#turlar"
                className="transition hover:text-blue-400"
              >
                Turlar
              </Link>

              <Link
                href="/#neden-biz"
                className="transition hover:text-blue-400"
              >
                Neden Biz
              </Link>

              <Link
                href="/#yorumlar"
                className="transition hover:text-blue-400"
              >
                Yorumlar
              </Link>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              İletişim
            </h3>

            <div className="space-y-5">

              <a
                href="tel:+905462368215"
                className="flex items-center gap-3 text-slate-300 transition hover:text-green-400"
              >
                <Phone size={20} />
                +90 546 236 82 15
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} />
                Bosna Hersek Turları
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock size={20} />
                Her Gün • 09:00 - 22:00
              </div>

            </div>
          </div>

        </div>

        {/* Alt Kısım */}
        <div className="mt-14 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <div className="text-center md:text-left">
              <p className="text-slate-400">
                © {new Date().getFullYear()} Bosna Pusulası
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Tüm hakları saklıdır.
              </p>
            </div>

            <a
              href="#anasayfa"
              className="rounded-full bg-blue-600 p-3 transition hover:scale-110 hover:bg-blue-700"
              aria-label="Sayfanın Başına Dön"
            >
              <ArrowUp size={22} />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}