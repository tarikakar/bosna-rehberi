import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center text-white">

        <span className="mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
          🇧🇦 Yerel Rehberlerle Bosna Deneyimi
        </span>

        <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
          Bosna'yı
          <br />
          Yerel Rehberlerle
          <span className="block text-blue-400">
            Keşfedin
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
          Saraybosna, Mostar, Travnik ve Jajce rotalarında
          unutamayacağınız kültür, tarih ve doğa deneyimi.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">

          <a
            href="#turlar"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-blue-700"
          >
            Turları İncele
          </a>

          <Link
            href="/rezervasyon"
            className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur transition hover:bg-white hover:text-slate-900"
          >
            Rezervasyon Yap
          </Link>

        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-5 md:grid-cols-4">

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-black">500+</h3>
            <p className="mt-2 text-sm text-slate-300">
              Mutlu Misafir
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-black">5★</h3>
            <p className="mt-2 text-sm text-slate-300">
              Ortalama Puan
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-black">%100</h3>
            <p className="mt-2 text-sm text-slate-300">
              Yerel Deneyim
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-black">7/24</h3>
            <p className="mt-2 text-sm text-slate-300">
              WhatsApp Desteği
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}