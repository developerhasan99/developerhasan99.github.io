import SeoHead from "../components/seo-head";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";

function Home() {
  return (
    <div>
      <main>
        <SeoHead />
        <Header />
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default Home;
