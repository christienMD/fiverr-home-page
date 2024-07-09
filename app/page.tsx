
import FiverrGetInspired from "./components/FiverrGetInspired";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";


export default function Home() {
  return (
    <main>
      <Hero />
      <PopularCategories />
      <FiverrGetInspired />
      <Footer />
    </main>
  );
}
