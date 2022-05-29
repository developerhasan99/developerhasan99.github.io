import Provider from "../context/Provider";

import SeoHead from "../components/SEO/SEOHead";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Resume from "../components/Resume";
import Passion from "../components/Service/Service";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <Provider>
      <SeoHead />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Resume />
      <Passion />
      <Work />
      <Contact />
      <Footer />
    </Provider>
  );
}

export default Home;
