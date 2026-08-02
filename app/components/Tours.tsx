const tours = [
  {
    title: "⭐⭐⭐ TEST MOSTAR ⭐⭐⭐",
    image: "/images/hero.png",
    description:
      "Mostar Köprüsü, Blagaj Tekkesi ve Poçitelj'in tarihi atmosferini keşfedin.",
  },
  {
    title: "⭐⭐⭐ TEST SARAJBOSNA ⭐⭐⭐",
    image: "/images/saraybosna.jpg",
    description:
      "Başçarşı, Sebil, Latin Köprüsü ve Tünel Müzesi ile Saraybosna'nın tarihini keşfedin.",
  },
  {
    title: "⭐⭐⭐ TEST JAJCE ⭐⭐⭐",
    image: "/images/travnik.jpg",
    description:
      "Travnik Kalesi, Plava Voda ve Jajce Şelalesi'nin eşsiz güzelliklerini görün.",
  },
];

export default function Tours() {
  return (
    <section
      id="turlar"
      className="py-24 px-6 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-600">
            TEST TEST TEST
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Bu bir testtir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {tour.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {tour.description}
                </p>

                <a
                  href="https://wa.me/905332966518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold"
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