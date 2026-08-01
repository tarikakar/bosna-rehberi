"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {

  return (

    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">


      {/* Mesaj Balonu */}

      <div className="
        hidden md:block
        bg-white
        dark:bg-slate-900
        shadow-xl
        rounded-2xl
        px-5
        py-3
        text-sm
        text-slate-700
        dark:text-white
        border
        border-slate-200
        dark:border-slate-700
      ">

        <p className="font-bold">
          Merhaba 👋
        </p>

        <p>
          Bosna turları hakkında bilgi almak ister misiniz?
        </p>

      </div>



      {/* WhatsApp Logo Butonu */}

      <a
        href="https://wa.me/905332966518?text=Merhaba,%20Bosna%20turları%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-16
          h-16
          rounded-full
          bg-green-500
          hover:bg-green-600
          flex
          items-center
          justify-center
          text-white
          shadow-2xl
          transition
          hover:scale-110
        "
      >

        <FaWhatsapp size={38} />

      </a>


    </div>

  );
}