export default function Footer() {
  return (
    <footer
      className="
      bg-slate-950
      text-white
      py-16
      px-6
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-10
        "
      >

        {/* Logo ve açıklama */}

        <div>

          <h2
            className="
            text-3xl
            font-extrabold
            mb-4
            "
          >
            🇧🇦 Bosna Rehberi
          </h2>


          <p
            className="
            text-slate-300
            leading-relaxed
            "
          >
            Bosna'nın tarihini, kültürünü ve eşsiz
            güzelliklerini yerel rehberler eşliğinde keşfedin.
          </p>

        </div>




        {/* Hızlı Menü */}

        <div>

          <h3
            className="
            text-xl
            font-bold
            mb-5
            "
          >
            Hızlı Menü
          </h3>


          <ul
            className="
            space-y-3
            text-slate-300
            "
          >

            <li>
              <a href="/">
                Anasayfa
              </a>
            </li>


            <li>
              <a href="/#turlar">
                Turlar
              </a>
            </li>


            <li>
              <a href="/#iletisim">
                İletişim
              </a>
            </li>


            <li>
              <a href="/rezervasyon">
                Rezervasyon
              </a>
            </li>


          </ul>

        </div>






        {/* İletişim */}

        <div>

          <h3
            className="
            text-xl
            font-bold
            mb-5
            "
          >
            İletişim
          </h3>



          <div
            className="
            space-y-4
            text-slate-300
            "
          >


            <a
              href="https://wa.me/905332966518"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-3
              hover:text-green-400
              transition
              "
            >

              <span>
                💬
              </span>

              <span>
                WhatsApp Destek
              </span>

            </a>



            <p>
              🇧🇦 Bosna Hersek Turları
            </p>


            <p>
              🕘 Her gün 09:00 - 22:00
            </p>


          </div>


        </div>



      </div>





      <div
        className="
        border-t
        border-slate-800
        mt-12
        pt-6
        text-center
        text-slate-400
        "
      >

        © 2026 Bosna Rehberi. Tüm hakları saklıdır.

      </div>


    </footer>
  );
}