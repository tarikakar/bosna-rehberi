export default function Tours() {
  const tours = [
    {
      title: "Mostar Turu",
      description: "Mostar Köprüsü, Blagaj Tekkesi ve Poçitel.",
      duration: "Tam Gün",
      image: "/images/hero.png",
    },
    {
      title: "Saraybosna Turu",
      description: "Başçarşı, Sebil, Latin Köprüsü ve Tünel Müzesi.",
      duration: "Tam Gün",
      image: "/images/saraybosna.jpg",
    },
    {
      title: "Travnik & Yayçe Turu",
      description: "Travnik Kalesi, Plava Voda ve Yayçe Şelalesi.",
      duration: "Tam Gün",
      image: "/images/travnik.jpg",
    },
  ];

  return (
    <section
      id="turlar"
      className="py-20 bg-slate-100 dark:bg-slate-950 px-6 transition-colors"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Popüler Turlar
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {tours.map((tour, index) => (

            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 group"
            >

              <div className="relative overflow-hidden">

                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🇧🇦 Bosna Turu
                </div>

              </div>


              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  {tour.title}
                </h3>


                <p className="text-gray-600 dark:text-slate-300 mb-4">
                  {tour.description}
                </p>


                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-5">
                  {tour.duration}
                </p>


                <a
                  href={`https://wa.me/905332966518?text=${encodeURIComponent(
                    `Merhaba, ${tour.title} hakkında bilgi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
                >
                  WhatsApp'tan Bilgi Al
                </a>


              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}