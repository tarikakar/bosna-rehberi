import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

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
      className="bg-slate-100 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Popüler Rotalar
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl dark:text-white">
            Bosna'nın En Güzel Turları
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Yerel rehberlerimiz eşliğinde Bosna Hersek'in tarihi ve doğal
            güzelliklerini keşfedin.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {tours.map((tour, index) => (

            <article
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900"
            >

              <div className="relative">

                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur dark:bg-slate-900/90 dark:text-white">

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {tour.duration}
                  </div>

                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {tour.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {tour.description}
                </p>

                <Link
                  href="/rezervasyon"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Bilgi Al
                  <ArrowRight size={18} />
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}