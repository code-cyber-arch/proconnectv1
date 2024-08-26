import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyProConnect from "./WhyProConnect";
import Services from "./Services";

const Layout = () => {
  return (
    <div className="max-w-6xl mx-2">
      <Navbar />
      <Hero />
      <WhyProConnect />
      <Services />
    </div>
  );
};

export default Layout;
