import Link from "next/link";


export default function MostarPage() {

  return (

    <main className="min-h-screen bg-slate-100 dark:bg-slate-950">


      <section

        className="
        relative
        h-[500px]
        flex
        items-center
        justify-center
        text-white
        "

        style={{

          backgroundImage: "url('/images/mostar.png')",

          backgroundSize: "cover",

          backgroundPosition: "center",

        }}

      >

        <div className="
        absolute
        inset-0
        bg-black/60
        "></div>



        <div className="
        relative
        z-10
        text-center
        px-6
        ">


          <h1 className="
          text-5xl
          md:text-6xl
          font-extrabold
          mb-5
          ">

            Mostar Turu

          </h1>


          <p className="
          text-xl
          text-slate-200
          ">

            Tarih, kültür ve eşsiz manzaralarla
            unutulmaz bir Bosna deneyimi.

          </p>


        </div>


      </section>





      <section className="
      max-w-5xl
      mx-auto
      px-6
      py-16
      ">


        <div className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        shadow-xl
        p-8
        md:p-12
        ">



          <h2 className="
          text-3xl
          font-bold
          text-slate-900
          dark:text-white
          mb-6
          ">

            Mostar Gezilecek Yerler

          </h2>



          <ul className="
          space-y-4
          text-slate-700
          dark:text-slate-300
          text-lg
          ">


            <li>
              🌉 Mostar Köprüsü
            </li>


            <li>
              🕌 Blagaj Tekkesi
            </li>


            <li>
              🏘️ Poçitel Tarihi Köyü
            </li>


          </ul>




          <h2 className="
          text-3xl
          font-bold
          text-slate-900
          dark:text-white
          mt-10
          mb-5
          ">

            Tur Hakkında

          </h2>



          <p className="
          text-lg
          leading-relaxed
          text-slate-700
          dark:text-slate-300
          ">

            Mostar turumuzda Osmanlı mirasının izlerini,
            tarihi sokakları ve Bosna'nın eşsiz doğal
            güzelliklerini keşfediyoruz. Profesyonel
            rehber eşliğinde unutulmaz bir gün geçiriyoruz.

          </p>




          <Link

            href="/rezervasyon"

            className="
            inline-block
            mt-10
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-4
            rounded-xl
            font-bold
            "

          >

            Rezervasyon Yap

          </Link>



        </div>


      </section>


    </main>

  );

}