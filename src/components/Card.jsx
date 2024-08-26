import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-emerald-50 shadow-md shadow-gray-800 rounded-sm mb-5 border-b-4 border-emerald-600">
      {children}
    </div>
  );
};

export default Card;
