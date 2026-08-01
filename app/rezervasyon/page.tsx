"use client";

import { useState } from "react";

export default function ReservationPage() {

  const [form, setForm] = useState({
    name: "",
    age: "",
    tour: "",
    people: "",
    date: "",
  });


  const sendWhatsApp = () => {

    const message = `
Merhaba, Bosna turu için rezervasyon bilgisi almak istiyorum.

Ad Soyad: ${form.name}
Yaş: ${form.age}
Gezi Türü: ${form.tour}
Kişi Sayısı: ${form.people}
Tarih: ${form.date}
`;

    const whatsappUrl =
      "https://wa.me/905332966518?text=" +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");

  };


  return (

    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 py-32 px-6">


      <div className="max-w-4xl mx-auto">


        <div className="text-center mb-10">

          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
            Rezervasyon
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300">
            Bosna gezinizi planlamak için bilgilerinizi bırakın.
          </p>

        </div>



        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8">


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
            className="w-full mb-4 p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
            onChange={(e)=>setForm({...form,people:e.target.value})}
          />



          <input
            type="date"
            className="w-full mb-6 p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
            onChange={(e)=>setForm({...form,date:e.target.value})}
          />



          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-bold transition"
          >
            WhatsApp ile Rezervasyon Gönder
          </button>


        </div>


      </div>


    </main>

  );
}