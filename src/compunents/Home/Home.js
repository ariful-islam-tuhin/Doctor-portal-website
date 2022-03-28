import React from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import Banner from "./Banner/Banner";
import OurDoctors from "./OurDoctors/OurDoctors";

import Services from "./Services/Services";

const Home = () => {
  return (
    <div>      
      <AppointmentBanner></AppointmentBanner>
      <br />
      <Services></Services>
      <br />
      <br />
      <br />
      <OurDoctors></OurDoctors>
      <br />
      <Banner></Banner>
     
    
    </div>
  );
};

export default Home;
