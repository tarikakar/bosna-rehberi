export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-slate-100 dark:bg-slate-950">

      <div className="max-w-6xl mx-auto">


        <h2 className="
        text-4xl
        md:text-5xl
        font-extrabold
        text-center
        text-slate-900
        dark:text-white
        mb-10
        ">
          Bosna'dan Kareler
        </h2>


        <div className="
        rounded-3xl
        overflow-hidden
        shadow-2xl
        ">

          <img
            src="/images/bosna-galeri.png"
            alt="Bosna tur galerisi"
            className="
            w-full
            h-auto
            object-cover
            hover:scale-105
            transition
            duration-700
            "
          />

        </div>


      </div>

    </section>
  );
}