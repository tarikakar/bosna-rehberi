export default function Features() {
  const features = [
    {
      title: "Yerel Rehber",
      text: "Bosna'yı bilen profesyonel rehberlerle unutulmaz deneyimler.",
      icon: "🧭",
    },
    {
      title: "Konforlu Ulaşım",
      text: "Turlar boyunca güvenli ve rahat ulaşım imkanı.",
      icon: "🚐",
    },
    {
      title: "WhatsApp Desteği",
      text: "Rezervasyon ve tüm sorularınız için hızlı iletişim.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 px-6 transition-colors">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Neden Bizi Tercih Etmelisiniz?
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>


              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {item.title}
              </h3>


              <p className="text-slate-600 dark:text-slate-300">
                {item.text}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}