import { useState, useRef } from "react";

import SeoHead from "../components/SEOHead";
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
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!isMobileNav);
  };

  const handleNavStat = (status) => {
    setIsSticky(!status);
  };
  return (
    <>
      <SeoHead />
      <Header
        isSticky={isSticky}
        isMobileNav={isMobileNav}
        handleMobileNav={handleMobileNav}
      />
      <Hero handleNavStat={handleNavStat} />
      <About />
      <Experience />
      <Resume />
      <Passion />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
