import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Tours />
      <Features />
      <Gallery />
      <Reviews />

      <section id="iletisim" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Bizimle İletişime Geçin
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
            Bosna gezinizi planlamak için ekibimizle WhatsApp üzerinden
            hemen iletişime geçebilirsiniz.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://wa.me/905462368215"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-slate-800 border border-slate-700 p-7 text-left hover:border-green-500 hover:-translate-y-1 transition-all shadow-xl"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">👤 Kerim</h3>
                  <p className="text-slate-300 mt-2">
                    Rezervasyon ve Tur Bilgileri
                  </p>
                </div>
                <span className="text-sm bg-green-600 px-3 py-1 rounded-full">
                  🟢 Çevrimiçi
                </span>
              </div>

              <div className="mt-8 inline-flex bg-green-600 group-hover:bg-green-700 px-5 py-3 rounded-xl font-bold transition">
                WhatsApp'tan Yaz →
              </div>
            </a>

            <a
              href="https://wa.me/905332966518"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-slate-800 border border-slate-700 p-7 text-left hover:border-green-500 hover:-translate-y-1 transition-all shadow-xl"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">👤 Tarık</h3>
                  <p className="text-slate-300 mt-2">
                    Müşteri Destek
                  </p>
                </div>
                <span className="text-sm bg-green-600 px-3 py-1 rounded-full">
                  🟢 Çevrimiçi
                </span>
              </div>

              <div className="mt-8 inline-flex bg-green-600 group-hover:bg-green-700 px-5 py-3 rounded-xl font-bold transition">
                WhatsApp'tan Yaz →
              </div>
            </a>
          </div>

          <div className="mt-10 text-slate-400 space-y-2">
            <p>🕘 Her gün 09:00 – 22:00</p>
            <p>⚡ Genellikle 5 dakika içinde yanıtlıyoruz.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}