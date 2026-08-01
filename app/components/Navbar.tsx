"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {

  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);


  const toggleDark = () => {

    setDark(!dark);

    document.documentElement.classList.toggle("dark");

  };


  return (

    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-slate-950
      border-b
      border-slate-800
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-4
      flex
      items-center
      justify-between
      ">


        <Link
          href="/"
          className="
          text-2xl
          font-extrabold
          text-white
          "
        >
          🇧🇦 Bosna Rehberi
        </Link>



        {/* Masaüstü Menü */}

        <div className="
        hidden
        md:flex
        items-center
        gap-8
        text-white
        font-medium
        ">

          <Link href="/">
            Anasayfa
          </Link>

          <Link href="/#hakkimizda">
            Hakkımızda
          </Link>

          <Link href="/#turlar">
            Turlar
          </Link>

          <Link href="/#iletisim">
            İletişim
          </Link>

        </div>




        <div className="flex items-center gap-3">


          <button
            onClick={toggleDark}
            className="
            bg-slate-800
            hover:bg-slate-700
            text-white
            px-4
            py-2
            rounded-xl
            "
          >
            🌙
          </button>



          <Link
            href="/rezervasyon"
            className="
            hidden
            md:block
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-2
            rounded-xl
            font-bold
            "
          >
            Rezervasyon
          </Link>



          {/* Mobil Menü Butonu */}

          <button

            onClick={() => setMenu(!menu)}

            className="
            md:hidden
            text-white
            text-3xl
            "
          >

            ☰

          </button>


        </div>


      </div>




      {/* Mobil Menü */}

      {menu && (

        <div
          className="
          md:hidden
          bg-slate-900
          px-6
          py-6
          space-y-4
          text-white
          "
        >

          <Link
            href="/"
            onClick={() => setMenu(false)}
            className="block"
          >
            Anasayfa
          </Link>


          <Link
            href="/#hakkimizda"
            onClick={() => setMenu(false)}
            className="block"
          >
            Hakkımızda
          </Link>


          <Link
            href="/#turlar"
            onClick={() => setMenu(false)}
            className="block"
          >
            Turlar
          </Link>


          <Link
            href="/#iletisim"
            onClick={() => setMenu(false)}
            className="block"
          >
            İletişim
          </Link>


          <Link
            href="/rezervasyon"
            onClick={() => setMenu(false)}
            className="
            block
            bg-blue-600
            text-center
            py-3
            rounded-xl
            font-bold
            "
          >
            Rezervasyon
          </Link>


        </div>

      )}


    </nav>

  );

}