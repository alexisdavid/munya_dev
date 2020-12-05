import React from "react";
import About from "./components/About";
import BannerPrice from "./components/BannerPrice";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Discounts from "./components/Discounts";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portafolio from "./components/Portafolio";
import Prices from "./components/Prices";
import PrincipalBaner from "./components/PrincipalBaner";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

const Index = () => {
  return (
    <>
      <Header />
      <PrincipalBaner />
      <About />
      <Services />
      <Experience />
      <BannerPrice />
      <Portafolio />
      <Discounts />
      <Prices />
      <Testimonial />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    
    </>
  );
};

export default Index;
