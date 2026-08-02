import Link from "next/link";
import Image from "next/image";


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
          href="/"
          className="
          flex
          items-center
          gap-3
          "
        >

          <Image

            src="/images/favicon.png"

            alt="Bosna Pusulası Logo"

            width={60}

            height={60}

            priority

            className="
            rounded-full
            object-cover
            "
          />


          <div>

            <h1
              className="
              text-xl
              md:text-2xl
              font-extrabold
              text-slate-900
              dark:text-white
              "
            >
              Bosna Pusulası
            </h1>


            <p
              className="
              text-xs
              text-slate-500
              dark:text-slate-400
              "
            >
              Mostar ve Saraybosna Turları
            </p>


          </div>


        </Link>




        {/* MENU */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >


          <Link
            href="/"
            className="
            text-slate-700
            dark:text-slate-300
            hover:text-blue-600
            transition
            "
          >
            Ana Sayfa
          </Link>



          <Link
            href="/turlar/mostar"
            className="
            text-slate-700
            dark:text-slate-300
            hover:text-blue-600
            transition
            "
          >
            Turlar
          </Link>



          <Link
            href="/rehber"
            className="
            text-slate-700
            dark:text-slate-300
            hover:text-blue-600
            transition
            "
          >
            Rehber
          </Link>



          <Link
            href="/rezervasyon"
            className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            font-bold
            transition
            "
          >
            Rezervasyon
          </Link>



        </div>


      </div>


    </nav>

  );

}