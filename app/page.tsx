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
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}