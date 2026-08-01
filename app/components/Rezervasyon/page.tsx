"use client";

import { useState } from "react";

export default function ReservationPage() {

  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    tour: "",
    people: "",
    date: "",
    note: "",
  });


  const sendWhatsApp = () => {

    const message = `
Merhaba, rezervasyon hakkında bilgi almak istiyorum.

Ad Soyad: ${form.name}
Yaş: ${form.age}
Telefon: ${form.phone}
Gezi Türü: ${form.tour}
Kişi Sayısı: ${form.people}
Tarih: ${form.date}
Not: ${form.note}
`;

    window.open(
      "https://wa.me/905332966518?text=" +
      encodeURIComponent(message),
      "_blank"
    );

  };


  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 py-32 px-6">


      <div className="max-w-4xl mx-auto">


        <h1 className="text-5xl font-extrabold text-center text-slate-900 dark:text-white mb-6">
          Rezervasyon
        </h1>


        <p className="text-center text-xl text-slate-600 dark:text-slate-300 mb-12">
          Bosna gezinizi planlamak için bilgilerinizi bırakın.
        </p>



        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8">


          <div className="grid md:grid-cols-2 gap-5">


            <input
              placeholder="Ad Soyad"
              className="p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />


            <input
              placeholder="Yaş"
              className="p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,age:e.target.value})}
            />


            <input
              placeholder="Telefon"
              className="p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,phone:e.target.value})}
            />


            <select
              className="p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,tour:e.target.value})}
            >

              <option>Gezi Türü</option>
              <option>Mostar Turu</option>
              <option>Saraybosna Turu</option>
              <option>Travnik & Yayçe Turu</option>

            </select>


            <input
              placeholder="Kaç kişi?"
              className="p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,people:e.target.value})}
            />


            <input
              type="date"
              className="p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
              onChange={(e)=>setForm({...form,date:e.target.value})}
            />

          </div>



          <textarea
            placeholder="Notunuz"
            rows={4}
            className="w-full mt-5 p-4 rounded-xl border bg-white text-slate-900 dark:bg-slate-800 dark:text-white"
            onChange={(e)=>setForm({...form,note:e.target.value})}
          />


          <button
            onClick={sendWhatsApp}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-bold"
          >
            WhatsApp ile Gönder
          </button>


        </div>


      </div>

    </main>
  );
}