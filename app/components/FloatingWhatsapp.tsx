"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


  return (

    <div
      ref={ref}
      className="fixed bottom-6 right-6 z-[99999]"
    >


      {/* KONUŞMA BALONU */}

      {showBubble && !open && (

        <div
          className="
          absolute bottom-20 right-0
          w-72
          bg-white dark:bg-slate-900
          rounded-2xl
          shadow-2xl
          p-5
          border
          border-slate-200
          dark:border-slate-700
          "
        >

          <button
            onClick={() => setShowBubble(false)}
            className="
            absolute top-3 right-3
            text-slate-400
            hover:text-red-500
            "
          >
            <FaTimes />
          </button>


          <h3 className="
          font-bold
          text-slate-900
          dark:text-white
          ">
            👋 Merhaba
          </h3>


          <p className="
          text-sm
          text-slate-500
          dark:text-slate-400
          mt-2
          ">
            Bosna turları hakkında bilgi almak için bize yazabilirsiniz.
          </p>


        </div>

      )}




      {/* AÇILAN PANEL */}

      {open && (

        <div
          className="
          absolute bottom-20 right-0
          w-80
          bg-white
          dark:bg-slate-900
          rounded-3xl
          shadow-2xl
          overflow-hidden
          border
          border-slate-200
          dark:border-slate-700
          "
        >


          {/* HEADER */}

          <div
            className="
            bg-[#25D366]
            p-5
            text-white
            "
          >

            <div className="flex items-center gap-3">

              <FaWhatsapp size={38}/>


              <div>

                <h2 className="font-bold text-xl">
                  WhatsApp Destek
                </h2>


                <p className="text-sm text-green-100">
                  Ekibimiz size yardımcı olmak için burada.
                </p>


                <p className="text-xs text-green-100 mt-1">
                  Ortalama 5 dakika içinde yanıtlıyoruz.
                </p>


              </div>

            </div>

          </div>





          <div className="p-5 space-y-4">



            {/* REZERVASYON */}

            <a
              href="https://wa.me/905332966518"
              target="_blank"
              rel="noopener noreferrer"

              className="
              flex
              items-center
              justify-between
              p-4
              rounded-2xl
              bg-slate-50
              dark:bg-slate-800
              hover:bg-green-50
              transition
              "
            >


              <div>

                <h3 className="
                font-bold
                text-slate-900
                dark:text-white
                ">
                  🚐 Rezervasyon & Turlar
                </h3>


                <p className="
                text-sm
                text-slate-500
                dark:text-slate-400
                mt-1
                ">
                  Tur bilgileri ve rezervasyon için bize ulaşın.
                </p>


              </div>


              <FaWhatsapp
                size={32}
                className="text-[#25D366]"
              />


            </a>





            {/* DESTEK */}

            <a
              href="https://wa.me/905462368215"
              target="_blank"
              rel="noopener noreferrer"

              className="
              flex
              items-center
              justify-between
              p-4
              rounded-2xl
              bg-slate-50
              dark:bg-slate-800
              hover:bg-green-50
              transition
              "
            >


              <div>


                <h3 className="
                font-bold
                text-slate-900
                dark:text-white
                ">
                  💬 Müşteri Destek
                </h3>


                <p className="
                text-sm
                text-slate-500
                dark:text-slate-400
                mt-1
                ">
                  Sorularınız için bize yazabilirsiniz.
                </p>


              </div>


              <FaWhatsapp
                size={32}
                className="text-[#25D366]"
              />


            </a>





            <div
              className="
              border-t
              border-slate-200
              dark:border-slate-700
              pt-4
              "
            >

              <p className="
              text-sm
              text-slate-500
              dark:text-slate-400
              ">
                🕘 Her gün 09:00 - 22:00
              </p>


              <p className="
              text-sm
              text-green-600
              font-semibold
              mt-2
              ">
                ⚡ Hızlı destek
              </p>


            </div>



          </div>



        </div>

      )}






      {/* WHATSAPP BUTON */}

      <button

        onClick={() => {
          setOpen(!open);
          setShowBubble(false);
        }}

        className="
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        hover:bg-[#1ebe5d]
        text-white
        shadow-2xl
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
        "

      >

        <FaWhatsapp size={35}/>

      </button>



    </div>

  );
}