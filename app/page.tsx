import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";


export default function Home() {

  return (

    <main className="min-h-screen">


      <Navbar />


      <Hero />


      <Tours />


      <Features />


      <Gallery />


      <Reviews />



      {/* İLETİŞİM */}

      <section
        id="iletisim"
        className="
        py-20
        px-6
        bg-slate-900
        text-white
        "
      >

        <div className="max-w-5xl mx-auto text-center">


          <h2 className="
          text-4xl
          md:text-5xl
          font-extrabold
          mb-6
          ">

            Bosna Yolculuğunuzu Planlayalım

          </h2>



          <p className="
          text-lg
          text-slate-300
          mb-8
          ">

            Mostar, Saraybosna ve Bosna Hersek'in
            eşsiz güzelliklerini keşfetmek için
            bizimle iletişime geçin.

          </p>



          <p className="
          text-2xl
          font-bold
          ">

            📞 +90 533 296 65 18

          </p>


        </div>


      </section>




      <Footer />



      <FloatingWhatsapp />


    </main>

  );

}