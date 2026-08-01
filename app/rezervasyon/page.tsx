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


    window.open(

      "https://wa.me/905332966518?text=" +
      encodeURIComponent(message),

      "_blank"

    );


  };



  return (


    <main className="min-h-screen bg-slate-100 dark:bg-slate-950">



      {/* HERO */}


      <section

        className="
        relative
        h-[420px]
        sm:h-[450px]
        flex
        items-center
        justify-center
        text-white
        "

        style={{

          backgroundImage: "url('/images/hero.png')",

          backgroundSize: "cover",

          backgroundPosition: "center",

        }}

      >


        <div className="
        absolute
        inset-0
        bg-black/60
        "></div>




        <div className="
        relative
        z-10
        text-center
        px-6
        ">


          <h1 className="
          text-3xl
          sm:text-4xl
          md:text-6xl
          font-extrabold
          mb-5
          ">

            Bosna Geziniz İçin Rezervasyon

          </h1>



          <p className="
          text-base
          md:text-xl
          text-slate-200
          max-w-3xl
          mx-auto
          leading-relaxed
          ">

            Mostar, Saraybosna ve Bosna'nın eşsiz
            güzelliklerini keşfetmek için
            sizinle özel bir gezi planlayalım.

          </p>


        </div>


      </section>





      {/* FORM */}


      <section className="
      px-6
      py-12
      md:py-16
      ">


        <div className="
        max-w-5xl
        mx-auto
        ">



          <div className="
          bg-white
          dark:bg-slate-900
          rounded-3xl
          shadow-2xl
          p-5
          sm:p-8
          md:p-12
          ">



            <h2 className="
            text-3xl
            font-bold
            text-center
            text-slate-900
            dark:text-white
            mb-8
            ">

              Rezervasyon Bilgileri

            </h2>





            <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            ">




              <input

                placeholder="Ad Soyad"

                className="
                p-4
                rounded-xl
                border
                bg-white
                text-slate-900
                dark:bg-slate-800
                dark:text-white
                "

                onChange={(e)=>
                  setForm({...form,name:e.target.value})
                }

              />





              <input

                placeholder="Yaş"

                type="number"

                className="
                p-4
                rounded-xl
                border
                bg-white
                text-slate-900
                dark:bg-slate-800
                dark:text-white
                "

                onChange={(e)=>
                  setForm({...form,age:e.target.value})
                }

              />






              <select

                className="
                p-4
                rounded-xl
                border
                bg-white
                text-slate-900
                dark:bg-slate-800
                dark:text-white
                "

                onChange={(e)=>
                  setForm({...form,tour:e.target.value})
                }

              >


                <option>
                  Gezi Türü Seçin
                </option>

                <option>
                  Mostar Turu
                </option>

                <option>
                  Saraybosna Turu
                </option>

                <option>
                  Travnik & Yayçe Turu
                </option>


              </select>






              <input

                placeholder="Kaç kişi?"

                type="number"

                className="
                p-4
                rounded-xl
                border
                bg-white
                text-slate-900
                dark:bg-slate-800
                dark:text-white
                "

                onChange={(e)=>
                  setForm({...form,people:e.target.value})
                }

              />






              <input

                type="date"

                className="
                p-4
                rounded-xl
                border
                bg-white
                text-slate-900
                dark:bg-slate-800
                dark:text-white
                md:col-span-2
                "

                onChange={(e)=>
                  setForm({...form,date:e.target.value})
                }

              />



            </div>






            <button

              onClick={sendWhatsApp}

              className="
              w-full
              mt-8
              bg-green-600
              hover:bg-green-700
              text-white
              py-4
              rounded-xl
              text-base
              sm:text-xl
              font-bold
              transition
              "

            >

              WhatsApp ile Rezervasyon Gönder

            </button>




          </div>



        </div>


      </section>


    </main>


  );

}