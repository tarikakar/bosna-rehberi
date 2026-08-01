export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Koyu katman */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* İçerik */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
          🇧🇦 Bosna Hersek Turları
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Bosna'yı
          <span className="text-blue-400"> Keşfet</span>
        </h1>

        <p className="mt-6 text-lg text-slate-200 max-w-2xl mx-auto">
          Saraybosna, Mostar, Travnik ve Bosna'nın eşsiz doğasını profesyonel
          rehberlerle keşfedin.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#turlar"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Turları İncele
          </a>

          <a
            href="https://wa.me/905332966518?text=Merhaba,%20Bosna%20turları%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition"
          >
            WhatsApp'tan Yaz
          </a>
        </div>
      </div>
    </section>
  );
}