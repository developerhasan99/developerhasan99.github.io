import { useState } from "react";

import SeoHead from "../components/seo-head";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Resume from "../components/resume";
import Passion from "../components/service";
import Work from "../components/work";

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
    </>
  );
}

export default Home;
