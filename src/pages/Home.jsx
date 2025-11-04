//import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero/Hero";
import CarNews from "../components/Home/News/CarNews";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import Featured from "../components/Home/Featured/Featured";
import OurMission from "../components/Home/Mission/OurMission";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CarNews />
      <WhyUs />
      <Featured />
      <OurMission />
      <Footer />
    </>
  );
};

export default Home;
