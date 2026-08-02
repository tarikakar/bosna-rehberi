export default function About() {
  return (
    <section
      id="hakkimizda"
      className="py-24 bg-slate-100 dark:bg-slate-900 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Bosna'yı Yerinden Keşfedin
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Bosna Pusulası olarak sizlere sadece bir tur değil,
            unutulmaz bir deneyim sunuyoruz. Yerel rehberlerimiz
            eşliğinde Bosna Hersek'in tarihini, kültürünü ve doğal
            güzelliklerini keşfediyoruz.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Mostar, Saraybosna, Travnik ve <strong>Jajce</strong> rotalarında
            konforlu ulaşım ve profesyonel destek ile güvenli,
            keyifli bir gezi deneyimi yaşayın.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-950 rounded-3xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Neden Biz?
          </h3>

          <ul className="space-y-4 text-slate-600 dark:text-slate-300">
            <li>✅ Yerel ve deneyimli rehberler</li>
            <li>✅ Kişiye özel ilgi</li>
            <li>✅ Konforlu ulaşım</li>
            <li>✅ WhatsApp üzerinden hızlı iletişim</li>
          </ul>
        </div>
      </div>
    </section>
  );
}