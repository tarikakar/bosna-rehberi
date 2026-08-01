"use client";

import { useState } from "react";

export default function Reservation() {

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    tour: "",
    people: "",
  });


  const sendWhatsApp = () => {

    const message = `
Merhaba, rezervasyon hakkında bilgi almak istiyorum.

Ad Soyad: ${form.name}
Yaş: ${form.age}
Gezi Türü: ${form.tour}
Kişi Sayısı: ${form.people}
`;

    window.open(
      "https://wa.me/905332966518?text=" + encodeURIComponent(message),
      "_blank"
    );

  };


  return (
    <>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold text-white transition"
      >
        Rezervasyon
      </button>



      {open && (

        <div className="fixed inset-0 z-[999]">

          {/* Arka plan */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />


          {/* Sağ panel */}

          <div
            className="
            absolute
            right-0
            top-0
            h-full
            w-full
            max-w-md
            bg-white
            dark:bg-slate-900
            shadow-2xl
            p-8
            overflow-y-auto
            "
          >


            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-5 text-3xl text-slate-500 hover:text-red-500"
            >
              ×
            </button>



            <h2 className="text-3xl font-extrabold mt-8 mb-3 text-slate-900 dark:text-white">
              Rezervasyon
            </h2>


            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Gezi bilgilerinizi bırakın, size en kısa sürede dönüş yapalım.
            </p>



            <input
              placeholder="Ad Soyad"
              className="w-full mb-4 p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />


            <input
              placeholder="Yaş"
              type="number"
              className="w-full mb-4 p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,age:e.target.value})}
            />



            <select
              className="w-full mb-4 p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,tour:e.target.value})}
            >

              <option>Gezi Türü Seçin</option>
              <option>Mostar Turu</option>
              <option>Saraybosna Turu</option>
              <option>Travnik & Yayçe Turu</option>

            </select>



            <input
              placeholder="Kaç kişi?"
              type="number"
              className="w-full mb-6 p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,people:e.target.value})}
            />



            <button
              onClick={sendWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg"
            >
              WhatsApp'a Gönder
            </button>


          </div>

        </div>

      )}

    </>
  );
}