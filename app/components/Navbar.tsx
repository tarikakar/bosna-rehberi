"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);



  const toggleDark = () => {

    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }

  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        {/* Logo */}
        <a 
          href="#"
          className="text-2xl font-bold text-white"
        >
          🇧🇦 Bosna Rehberi
        </a>



        {/* Desktop Menü */}

        <nav className="hidden md:flex items-center gap-8 text-white">

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            Anasayfa
          </a>


          <a
            href="#hakkimizda"
            className="hover:text-blue-400 transition"
          >
            Hakkımızda
          </a>


          <a
            href="#turlar"
            className="hover:text-blue-400 transition"
          >
            Turlar
          </a>


          <a
            href="#iletisim"
            className="hover:text-blue-400 transition"
          >
            İletişim
          </a>


        </nav>




        <div className="flex items-center gap-3">


          {/* Dark Mode */}

          <button
            onClick={toggleDark}
            className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>



          {/* Rezervasyon */}

          <a
            href="https://wa.me/905332966518?text=Merhaba,%20Bosna%20turları%20için%20rezervasyon%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold text-white transition"
          >
            Rezervasyon
          </a>



          {/* Mobil Menü Butonu */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>


        </div>


      </div>





      {/* Mobil Menü */}

      {open && (

        <div className="md:hidden bg-slate-900 text-white px-6 py-6 space-y-5">


          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block"
          >
            Anasayfa
          </a>


          <a
            href="#hakkimizda"
            onClick={() => setOpen(false)}
            className="block"
          >
            Hakkımızda
          </a>


          <a
            href="#turlar"
            onClick={() => setOpen(false)}
            className="block"
          >
            Turlar
          </a>


          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="block"
          >
            İletişim
          </a>


          <a
            href="https://wa.me/905332966518?text=Merhaba,%20Bosna%20turları%20için%20rezervasyon%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-center py-3 rounded-xl"
          >
            Rezervasyon
          </a>


        </div>

      )}


    </header>
  );
}