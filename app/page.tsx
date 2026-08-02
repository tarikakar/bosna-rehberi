import LoadingScreen from "./components/LoadingScreen";
import FlyingPlane from "./components/FlyingPlane";
import FadeIn from "./components/FadeIn";

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
    <main className="min-h-screen overflow-x-hidden bg-white dark:bg-slate-950">
      <LoadingScreen />

      <FlyingPlane />

      <Navbar />

      <Hero />

      <FadeIn>
        <Tours />
      </FadeIn>

      <FadeIn>
        <Features />
      </FadeIn>

      <FadeIn>
        <Gallery />
      </FadeIn>

      <FadeIn>
        <Reviews />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>

      <FloatingWhatsapp />
    </main>
  );
}