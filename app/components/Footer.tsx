export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


        <div>
          <h3 className="text-2xl font-bold mb-4">
            🇧🇦 Bosna Rehberi
          </h3>

          <p className="text-slate-400">
            Bosna Hersek'in tarihi şehirlerini yerel rehberler eşliğinde keşfedin.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-bold mb-4">
            Hızlı Menü
          </h3>

          <div className="flex flex-col gap-2 text-slate-300">

            <a href="#">
              Anasayfa
            </a>

            <a href="#turlar">
              Turlar
            </a>

            <a href="#">
              Hakkımızda
            </a>

            <a href="#">
              İletişim
            </a>

          </div>

        </div>


        <div>

          <h3 className="text-xl font-bold mb-4">
            İletişim
          </h3>

          <p className="text-slate-300 mb-3">
            WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>


          <a
            href="https://wa.me/905332966518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl transition"
          >
            WhatsApp'tan Yaz
          </a>

        </div>


      </div>


      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">

        © 2026 Bosna Rehberi. Tüm hakları saklıdır.

      </div>


    </footer>
  );
}