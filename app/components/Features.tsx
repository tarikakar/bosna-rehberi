import {
  MapPinned,
  Bus,
  Compass,
  MessageCircle,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="neden-biz"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Arka Plan */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/mostar-bg.jpg')",
        }}
      />

      {/* Koyu Katman */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-6xl mx-auto">

        {/* Başlık */}
        <div className="text-center mb-16">

          <span className="inline-block rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm font-semibold tracking-widest uppercase text-green-400">
            Bosna Pusulası
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-white">
            Bosna'yı Yerel Rehberlerle Keşfedin
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Turistik rotaların ötesine geçin. Tarihi, kültürü ve doğal
            güzellikleri yerel ekibimiz eşliğinde güvenle keşfedin.
          </p>

        </div>

        {/* Kartlar */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/15">

            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                <MapPinned className="h-8 w-8 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            <h3 className="text-center text-2xl font-bold text-white">
              Yerel Rehber
            </h3>

            <p className="mt-4 text-center leading-7 text-slate-300">
              Bölgeyi yakından tanıyan rehberlerimiz sayesinde Bosna'yı
              gerçek hikâyeleriyle keşfedin.
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/15">

            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                <Bus className="h-8 w-8 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            <h3 className="text-center text-2xl font-bold text-white">
              Konforlu Ulaşım
            </h3>

            <p className="mt-4 text-center leading-7 text-slate-300">
              Modern araçlarımızla güvenli, rahat ve keyifli bir yolculuk
              deneyimi yaşayın.
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/15">

            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                <Compass className="h-8 w-8 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            <h3 className="text-center text-2xl font-bold text-white">
              Özel Rotalar
            </h3>

            <p className="mt-4 text-center leading-7 text-slate-300">
              Popüler noktaların yanında keşfedilmeyi bekleyen özel rotaları
              da birlikte geziyoruz.
            </p>

          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/15">

            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                <MessageCircle className="h-8 w-8 text-green-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            <h3 className="text-center text-2xl font-bold text-white">
              Hızlı Destek
            </h3>

            <p className="mt-4 text-center leading-7 text-slate-300">
              WhatsApp üzerinden sorularınıza kısa sürede dönüş yapıyor,
              rezervasyon sürecinde yanınızda oluyoruz.
            </p>

          </div>

        </div>

        {/* Alt Bilgi */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-green-400">
              500+
            </h3>
            <p className="mt-2 text-slate-300">
              Mutlu Misafir
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-green-400">
              5★
            </h3>
            <p className="mt-2 text-slate-300">
              Memnuniyet
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-green-400">
              %100
            </h3>
            <p className="mt-2 text-slate-300">
              Yerel Deneyim
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-green-400">
              09:00–22:00
            </h3>
            <p className="mt-2 text-slate-300">
              WhatsApp Desteği
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}