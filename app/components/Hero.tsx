import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        text-white
      "
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Karartma Katmanı */}
      <div
        className="
          absolute
          inset-0
          bg-black/60
        "
      />

      {/* İçerik */}
      <div
        className="
          relative
          z-10
          text-center
          px-6
          max-w-5xl
        "
      >
        <h1
          className="
            text-5xl
            md:text-7xl
            font-extrabold
            mb-6
          "
        >
          Bosna Pusulası
        </h1>

        <p
          className="
            text-xl
            md:text-2xl
            text-slate-200
            mb-8
          "
        >
          Mostar, Saraybosna, Travnik ve <strong>Jajce</strong>{" "}
          rotalarında unutulmaz Bosna deneyimleri.
        </p>

        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-4
            justify-center
          "
        >
          <a
            href="#turlar"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              transition
            "
          >
            Turları İncele
          </a>

          <Link
            href="/rezervasyon"
            className="
              bg-white
              hover:bg-slate-200
              text-slate-900
              px-8
              py-4
              rounded-xl
              font-bold
              transition
            "
          >
            Rezervasyon Yap
          </Link>
        </div>
      </div>
    </section>
  );
}