import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tours />
      <Features />
      <Testimonials />
      <FloatingWhatsapp />
      <Footer />
    </>
  );
}