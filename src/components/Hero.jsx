import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="h-[500px] relative">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      {/* Overlay */}
      <div className="absolute grid grid-cols-2 top-[15%] w-full">
        <div></div>
        <div className="bg-slate-400/30 p-4 rounded-md w-full">
          <p className="text-white font-bold py-4 text-xl">ProConnect</p>
          <div className="text-white text-4xl font-bold">Quality services</div>
          <div className="text-gray-200">
            Experienced Professionals to serve you at your doorstep
          </div>
          <div className="py-4">
            <ReactTyped
              className="text-3xl font-bold text-emerald-300 my-5"
              strings={[
                "Electrician",
                "Plumber",
                "Carpet Cleaning",
                "AC Repair",
                "Full Home Cleaning",
                "Furniture Assembly",
                "Gardner",
                "Smart Lock and Security",
              ]}
              typeSpeed={140}
              backSpeed={280}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
