import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mehmet A.",
    city: "İstanbul",
    text:
      "Bosna gezimiz boyunca Kerim Bey bizimle çok yakından ilgilendi. Tarihi anlatımları ve samimiyeti sayesinde unutulmaz bir gezi yaşadık.",
  },
  {
    name: "Ayşe K.",
    city: "Ankara",
    text:
      "Burak Bey ile gerçekleştirdiğimiz Bosna turundan çok memnun kaldık. Her şey planlı ve profesyoneldi. Kesinlikle tavsiye ederiz.",
  },
  {
    name: "Ahmet Y.",
    city: "Bursa",
    text:
      "Mostar ve Saraybosna turu beklentimizin çok üzerindeydi. Kendimizi turist değil misafir gibi hissettik.",
  },
];

export default function Reviews() {
  return (
    <section
      id="yorumlar"
      className="bg-white py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300">
            Google Benzeri Yorumlar
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl dark:text-white">
            Misafirlerimiz Ne Diyor?
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Bosna Pusulası ile seyahat eden misafirlerimizin deneyimleri.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            >

              <div className="mb-5 flex">

                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600 dark:text-slate-300">
                "{review.text}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {review.city}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}