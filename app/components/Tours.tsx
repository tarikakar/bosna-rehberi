import Link from "next/link";

const tours = [
  {
    title: "Mostar Turu",
    description:
      "Mostar Köprüsü, Blagaj Tekkesi ve Poçitelj tarihi köyünü keşfedin.",
    image: "/images/hero.png",
    duration: "Tam Gün",
  },

  {
    title: "Saraybosna Turu",
    description:
      "Başçarşı, Sebil, Latin Köprüsü ve Tünel Müzesi ile tarihin izlerini takip edin.",
    image: "/images/saraybosna.jpg",
    duration: "Tam Gün",
  },

  {
    title: "Travnik & Jajce Turu",
    description:
      "Travnik Kalesi, Plava Voda ve Jajce Şelalesi ile doğal güzellikleri keşfedin.",
    image: "/images/travnik.jpg",
    duration: "Tam Gün",
  },
];

export default function Tours() {
  return (
    <section
      id="turlar"
      className="
        py-20
        bg-slate-100
        dark:bg-slate-950
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
        <div
          className="
            text-center
            mb-12
          "
        >
          <h2
            className="
              text-4xl
              font-extrabold
              text-slate-900
              dark:text-white
              mb-4
            "
          >
            Popüler Turlar
          </h2>

          <p
            className="
              text-slate-600
              dark:text-slate-400
              text-lg
            "
          >
            Bosna'nın en özel rotalarını yerel rehberler eşliğinde keşfedin.
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
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
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
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                    mb-3
                  "
                >
                  {tour.title}
                </h3>

                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                    mb-4
                  "
                >
                  {tour.description}
                </p>

                <div
                  className="
                    text-blue-600
                    dark:text-blue-400
                    font-bold
                    mb-5
                  "
                >
                  {tour.duration}
                </div>

                <Link
                  href="/rezervasyon"
                  className="
                    inline-block
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-bold
                    transition
                  "
                >
                  Bilgi Al
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}