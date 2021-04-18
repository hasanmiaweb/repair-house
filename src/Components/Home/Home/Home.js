import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ExtraBenefit from "../ExtraBenefit/ExtraBenefit";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ExtraBenefit></ExtraBenefit>
      <About></About>
      <Services></Services>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
