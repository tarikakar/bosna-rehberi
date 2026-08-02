import Link from "next/link";

export default function RehberPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-semibold mb-6">
          Bosna Pusulası
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Rehber Bölümü Hazırlanıyor
        </h1>

        <p className="text-xl text-slate-300 leading-9 mb-10">
          Bosna Hersek'i daha yakından tanımanıza yardımcı olacak
          gezi rehberleri, seyahat önerileri, tarihi bilgiler,
          restoran tavsiyeleri ve yerel ipuçları üzerinde çalışıyoruz.
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Yakında Sizlerle
          </h2>

          <ul className="space-y-3 text-slate-300 text-lg">
            <li>✓ Saraybosna gezi rehberi</li>
            <li>✓ Mostar seyahat önerileri</li>
            <li>✓ Jajce ve Travnik keşif rotaları</li>
            <li>✓ Bosna mutfağı ve restoran tavsiyeleri</li>
            <li>✓ Ulaşım ve seyahat ipuçları</li>
          </ul>
        </div>

        <Link
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            rounded-2xl
            bg-green-600
            hover:bg-green-700
            px-8
            py-4
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