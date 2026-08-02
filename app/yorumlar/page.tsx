export default function YorumlarPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Başlık */}
        <div className="text-center mb-16">

          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Referanslar
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight">
            Misafir Yorumları
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Gerçek misafir deneyimleri ve doğrulanmış değerlendirmeler
            bu sayfada düzenli olarak paylaşılacaktır.
          </p>

        </div>

        {/* Bilgilendirme Kartı */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-10 shadow-2xl">

          <h2 className="text-3xl font-bold text-white">
            Yorumlarımız Güncelleniyor
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            Bu bölüm, misafirlerimizin doğrulanmış değerlendirmeleriyle
            düzenli olarak güncellenecektir.
          </p>

          <p className="mt-4 text-slate-300 leading-8">
            Yalnızca gerçek deneyimlere dayanan yorumları paylaşarak
            ziyaretçilerimize güvenilir ve şeffaf bilgiler sunmayı
            amaçlıyoruz.
          </p>

          <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

            <h3 className="text-lg font-semibold text-blue-300">
              Çok Yakında
            </h3>

            <p className="mt-2 text-slate-300">
              İlk misafirlerimizin doğrulanmış yorumları bu sayfada
              yayınlanacaktır.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}