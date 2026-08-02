const tours = [
  {
    title: "Mostar Turu",
    image: "/images/hero.png",
    description:
      "Mostar Köprüsü, Blagaj Tekkesi ve Poçitel'in tarihi atmosferini keşfedin.",
  },

  {
    title: "Saraybosna Turu",
    image: "/images/saraybosna.jpg",
    description:
      "Başçarşı, Sebil, Latin Köprüsü ve Tünel Müzesi ile Saraybosna'nın tarihini keşfedin.",
  },

  {
    title: "Travnik & Yayçe Turu",
    image: "/images/travnik.jpg",
    description:
      "Travnik Kalesi, Plava Voda ve Yayçe Şelalesi'nin eşsiz güzelliklerini görün.",
  },
];


export default function Tours() {

  return (

    <section
      id="turlar"
      className="
      py-24
      px-6
      bg-slate-100
      dark:bg-slate-950
      "
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-14">


          <h2 className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-slate-900
          dark:text-white
          ">

            Popüler Turlar

          </h2>


          <p className="
          mt-4
          text-lg
          text-slate-600
          dark:text-slate-300
          ">

            Bosna'nın en güzel rotalarını keşfedin.

          </p>


        </div>




        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >


          {tours.map((tour, index) => (

            <div

              key={index}

              className="
              bg-white
              dark:bg-slate-900
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:-translate-y-2
              transition
              "

            >


              <img

                src={tour.image}

                alt={tour.title}

                className="
                w-full
                h-64
                object-cover
                "

              />



              <div className="p-6">


                <h3 className="
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                mb-3
                ">

                  {tour.title}

                </h3>




                <p className="
                text-slate-600
                dark:text-slate-300
                leading-relaxed
                mb-6
                ">

                  {tour.description}

                </p>




                <a

                  href="/rezervasyon"

                  className="
                  block
                  text-center
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-xl
                  font-bold
                  transition
                  "

                >

                  Rezervasyon

                </a>



              </div>


            </div>


          ))}


        </div>


      </div>


    </section>

  );

}