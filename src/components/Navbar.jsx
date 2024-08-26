import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === "/";

  return (
    <div className="max-w-6xl mx-auto flex bg-emerald-950 grow items-center justify-between border-b-2 border-emerald-600">
      <div className="flex items-center gap-6">
        <div className="bg-emerald-500 rounded-md m-2 mx-4 cursor-pointer">
          <a href="/">
            <div className="font-semibold m-2">
              <span className="font-bold text-">P</span>ro
              <span className="font-bold text-">C</span>onnect
            </div>
          </a>
        </div>
        <div></div>
      </div>

      {isHome && (
        <div className="flex gap-4 text-white m-2">
          <div className="rounded-md m-2">
            <div className="hover:text-red-600 cursor-pointer">
              <a href="/register">Register as a service provider</a>
            </div>
          </div>
          <div className="rounded-md m-2">
            <div className="hover:text-red-600 cursor-pointer">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
