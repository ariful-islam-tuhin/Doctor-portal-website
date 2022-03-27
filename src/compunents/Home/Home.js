import React from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import Banner from "./Banner/Banner";

import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
      <Banner></Banner>
   
    </div>
  );
};

export default Home;
