"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {

  const [dark, setDark] = useState(false);


  const toggleDark = () => {

    document.documentElement.classList.toggle("dark");

    setDark(!dark);

  };


  return (

    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/80
      dark:bg-slate-950/80
      backdrop-blur-md
      shadow-sm
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


        <Link
          href="/"
          className="
          text-2xl
          font-extrabold
          text-slate-900
          dark:text-white
          "
        >
          Bosna Pusulası
        </Link>



        <div
          className="
          flex
          items-center
          gap-6
          "
        >


          <Link
            href="/"
            className="
            text-slate-700
            dark:text-slate-300
            hover:text-blue-600
            "
          >
            Ana Sayfa
          </Link>



          <Link
            href="/#turlar"
            className="
            text-slate-700
            dark:text-slate-300
            hover:text-blue-600
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
            "
          >
            Gezi Rehberi
          </Link>



          <Link
            href="/rezervasyon"
            className="
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



          <button
            onClick={toggleDark}
            className="
            px-3
            py-2
            rounded-lg
            bg-slate-200
            dark:bg-slate-800
            text-slate-800
            dark:text-white
            "
          >

            {dark ? "☀️" : "🌙"}

          </button>


        </div>


      </div>


    </nav>

  );

}