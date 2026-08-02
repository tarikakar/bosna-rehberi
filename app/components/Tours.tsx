const tours = [
  {
    title: "Saraybosna Turu",
    description:
      "Başçarşı, Sebil, Latin Köprüsü ve Tünel Müzesi.",
    duration: "Tam Gün",
  },
  {
    title: "Mostar Turu",
    description:
      "Mostar Köprüsü, Blagaj Tekkesi ve Poçitelj.",
    duration: "Tam Gün",
  },
  {
    title: "Travnik & Jajce Turu",
    description:
      "Travnik Kalesi, Plava Voda, Jajce Şelalesi ve tarihi şehir merkezi.",
    duration: "Tam Gün",
  },
];

export default function Tours() {
  return (
    <section
      id="turlar"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popüler Turlar
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {tour.title}
              </h3>

              <p className="text-slate-300 mb-6">
                {tour.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-emerald-400 font-medium">
                  {tour.duration}
                </span>

                <a
                  href="https://wa.me/905332966518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition"
                >
                  Bilgi Al
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}