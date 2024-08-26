import React from "react";
import Card from "./Card";
import {
  FaBolt,
  FaWrench,
  FaBroom,
  FaSnowflake,
  FaHome,
  FaCouch,
  FaLeaf,
  FaLock,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-emerald-950 py-2 border-b-2 border-emerald-800">
      <div className="m-6">
        <div className="text-white text-3xl font-bold py-4 gap-5">
          Services Offered
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaLock size={24} className="text-purple-400" />
              Beauty Services
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-3">
              <FaBolt size={24} className="text-yellow-400" />
              Electrician
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaWrench size={24} className="text-blue-400" />
              Plumber
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaBroom size={24} className="text-red-400" />
              Carpet Cleaning
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaSnowflake size={24} className="text-teal-400" />
              AC Repair
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaHome size={24} className="text-green-400" />
              Full Home Cleaning
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaCouch size={24} className="text-orange-400" />
              Furniture Assembly
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaLeaf size={24} className="text-green-400" />
              Gardner
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3 m-2">
              <FaLock size={24} className="text-purple-400" />
              Smart Lock and Security
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
