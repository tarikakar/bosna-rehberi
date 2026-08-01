"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


        <h1 className="text-2xl font-bold text-white">
          🇧🇦 Bosna Rehberi
        </h1>


        {/* Masaüstü Menü */}
        <nav className="hidden md:flex gap-8 text-white">

          <a 
            href="#"
            className="hover:text-blue-400 transition"
          >
            Anasayfa
          </a>


          <a 
            href="#turlar"
            className="hover:text-blue-400 transition"
          >
            Turlar
          </a>


          <a 
            href="#"
            className="hover:text-blue-400 transition"
          >
            Hakkımızda
          </a>


          <a 
            href="#"
            className="hover:text-blue-400 transition"
          >
            İletişim
          </a>

        </nav>



        <div className="flex items-center gap-3">


          {/* Rezervasyon WhatsApp */}
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
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>


        </div>


      </div>



      {/* Mobil Menü */}

      {open && (

        <div className="md:hidden bg-slate-900 text-white px-6 py-5 space-y-4">


          <a 
            href="#"
            className="block"
          >
            Anasayfa
          </a>


          <a 
            href="#turlar"
            className="block"
          >
            Turlar
          </a>


          <a 
            href="#"
            className="block"
          >
            Hakkımızda
          </a>


          <a 
            href="#"
            className="block"
          >
            İletişim
          </a>


        </div>

      )}


    </header>
  );
}