import React, { useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section5 from "../Section5";
import Section6 from "../Section6";

function Home() {
  useEffect(() => {
    document.title = "Inicio"; // Título predeterminado de tu sitio web
    return () => {
      document.title = "Inicio";
    };
  }, []);
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/*<Section5 />*/}
      <Section6 />
      <Footer />
    </>
  );
}

export default Home;
