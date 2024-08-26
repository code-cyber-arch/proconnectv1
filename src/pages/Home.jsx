import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyProConnect from "../components/WhyProConnect";
import Services from "../components/Services";
import AddressSelection from "../components/AddressSelection";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Hero />
      <WhyProConnect />
      <Services />
      <AddressSelection />
    </div>
  );
};

export default Home;
