import Link from "next/link";

export default function RehberPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="text-7xl mb-6">🚧</div>

        <h1 className="text-5xl font-extrabold mb-6">
          Çok Yakında
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed mb-10">
          Bosna Rehberi sayfamız üzerinde çalışıyoruz.
          Çok yakında Bosna Hersek hakkında gezi rehberleri,
          öneriler ve faydalı içerikler burada yer alacak.
        </p>

        <Link
          href="/"
          className="
            inline-block
            bg-green-600
            hover:bg-green-700
            px-8
            py-4
            rounded-2xl
            font-bold
            transition
          "
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}