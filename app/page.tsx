import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import StartTraining from "./components/StartTraining";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <StartTraining />
      <Footer />
    </main>
  );
}
