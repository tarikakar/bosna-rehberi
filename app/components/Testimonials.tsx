export default function Testimonials() {
  const comments = [
    {
      name: "Ahmet Yılmaz",
      text: "Bosna gezimiz harikaydı. Rehberimiz çok ilgiliydi, her şey planlı ve güzeldi.",
    },
    {
      name: "Elif Kaya",
      text: "Mostar ve Saraybosna turu unutulmaz bir deneyim oldu. Kesinlikle tavsiye ederim.",
    },
    {
      name: "Mehmet Demir",
      text: "Konforlu ulaşım ve güzel organizasyon sayesinde çok keyifli bir gezi yaptık.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 px-6 transition-colors">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Misafirlerimizin Yorumları
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {comments.map((item, index) => (

            <div
              key={index}
              className="bg-slate-100 dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >

              <div className="text-yellow-500 text-xl mb-5">
                ★★★★★
              </div>


              <p className="text-gray-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                "{item.text}"
              </p>


              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  {item.name.charAt(0)}
                </div>


                <div>

                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {item.name}
                  </h3>


                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    Mutlu Misafir
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