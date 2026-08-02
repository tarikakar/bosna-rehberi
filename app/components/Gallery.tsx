import Image from "next/image";

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 dark:bg-slate-950">
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Galeri
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl dark:text-white">
            Bosna'dan Kareler
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Bosna Hersek'in tarihi sokakları, köprüleri ve doğal güzelliklerinden
            unutulmaz manzaralar.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(37,99,235,.25)] dark:bg-slate-900">
          <Image
            src="/images/bosna-galeri.png"
            alt="Bosna Galerisi"
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Bilgi Kutusu */}
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/30 p-6 text-white backdrop-blur-xl transition-all duration-500 group-hover:bg-black/45">
            <h3 className="text-2xl font-bold">
              Bosna'nın Eşsiz Manzaraları
            </h3>

            <p className="mt-2 text-slate-200">
              Mostar, Saraybosna, Travnik ve Jajce'den seçilmiş özel kareler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}