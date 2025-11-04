//import React from "react";
import Navbar from "../components/Navbar";

import OurServices from "../components/Services/OurServices";
import OurMission from "../components/Home/Mission/OurMission";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
    
      <OurServices />
      <OurMission/>
      <Footer />
    </>
  );
};

export default Services;
