"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function FloatingWhatsapp() {

  const [open, setOpen] = useState(false);


  const sendWhatsApp = (message: string) => {

    window.open(
      "https://wa.me/905332966518?text=" +
      encodeURIComponent(message),
      "_blank"
    );

  };


  return (

    <div className="fixed bottom-6 right-6 z-50">


      {open && (

        <div
          className="
          mb-4
          w-80
          bg-white
          dark:bg-slate-900
          rounded-3xl
          shadow-2xl
          p-6
          border
          border-slate-300
          dark:border-slate-700
          "
        >


          <h3
            className="
            text-xl
            font-bold
            text-slate-900
            dark:text-white
            mb-3
            "
          >

            Merhaba 👋

          </h3>



          <p
            className="
            text-slate-800
            dark:text-slate-200
            mb-5
            font-medium
            leading-relaxed
            "
          >

            Bosna Rehberi'ne hoş geldiniz.
            Size nasıl yardımcı olabiliriz?

          </p>



          <div className="space-y-3">



            <button

              onClick={() =>
                sendWhatsApp(
                  "Merhaba, Bosna turları hakkında bilgi almak istiyorum."
                )
              }

              className="
              w-full
              bg-slate-200
              hover:bg-slate-300
              dark:bg-slate-700
              dark:hover:bg-slate-600
              p-3
              rounded-xl
              text-left
              text-slate-900
              dark:text-white
              font-semibold
              transition
              "

            >

              🚌 Tur bilgisi almak istiyorum

            </button>





            <button

              onClick={() =>
                sendWhatsApp(
                  "Merhaba, Bosna tur tarihleri hakkında bilgi almak istiyorum."
                )
              }

              className="
              w-full
              bg-slate-200
              hover:bg-slate-300
              dark:bg-slate-700
              dark:hover:bg-slate-600
              p-3
              rounded-xl
              text-left
              text-slate-900
              dark:text-white
              font-semibold
              transition
              "

            >

              📅 Tarih öğrenmek istiyorum

            </button>





            <button

              onClick={() =>
                sendWhatsApp(
                  "Merhaba, Bosna turu için rezervasyon yapmak istiyorum."
                )
              }

              className="
              w-full
              bg-green-600
              hover:bg-green-700
              text-white
              p-3
              rounded-xl
              font-bold
              transition
              "

            >

              ✅ Rezervasyon yapmak istiyorum

            </button>



          </div>


        </div>

      )}





      <button

        onClick={() => setOpen(!open)}

        className="
        w-16
        h-16
        rounded-full
        bg-green-500
        hover:bg-green-600
        text-white
        flex
        items-center
        justify-center
        shadow-2xl
        transition
        hover:scale-110
        "

      >

        <FaWhatsapp size={38}/>


      </button>



    </div>

  );

}