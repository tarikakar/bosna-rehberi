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

      {/* İLETİŞİM */}
      <section
        id="iletisim"
        className="
          py-20
          px-6
          bg-slate-900
          text-white
        "
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              mb-6
            "
          >
            Bosna Yolculuğunuzu Planlayalım
          </h2>

          <p
            className="
              text-lg
              text-slate-300
              mb-10
            "
          >
            Mostar, Saraybosna, Travnik ve Jajce turlarımız hakkında
            bilgi almak için aşağıdaki WhatsApp numaralarından
            bize ulaşabilirsiniz.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="https://wa.me/905332966518"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-600
                hover:bg-green-700
                text-white
                px-8
                py-4
                rounded-2xl
                font-bold
                text-lg
                transition
              "
            >
              💬 WhatsApp
              <br />
              +90 533 296 65 18
            </a>

            <a
              href="https://wa.me/905462368215"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-600
                hover:bg-green-700
                text-white
                px-8
                py-4
                rounded-2xl
                font-bold
                text-lg
                transition
              "
            >
              💬 WhatsApp
              <br />
              +90 546 236 82 15
            </a>
          </div>

          <p className="mt-8 text-slate-400">
            Haftanın 7 günü WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <Footer />

      <FloatingWhatsapp />
    </main>
  );
}