import { useState } from "react";

import SeoHead from "../components/seo-head";
import Header from "../components/Header/Header";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience/Experience";
import Resume from "../components/resume";
import Passion from "../components/service";
import Work from "../components/work";
import Contact from "../components/Contact/Contact";

function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const handleNavStat = (status) => {
    setIsSticky(!status);
  };
  return (
    <>
      <SeoHead />
      <Header isSticky={isSticky} />
      <Hero handleNavStat={handleNavStat} />
      <About />
      <Experience />
      <Resume />
      <Passion />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
