import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -37.8136,
  lng: 144.9631,
};

const Register = () => {
  const key = process.env.GOOGLE_API;

  const onLoad = useCallback(function callback(map) {
    // This function is called when the map is loaded.
  }, []);

  const onUnmount = useCallback(function callback(map) {
    // This function is called when the map is unmounted.
  }, []);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 max-w-6xl mx-auto">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-center mb-8">
              Register as a Service Provider
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded mt-1"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded mt-1"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded mt-1"
                  placeholder="Enter a secure password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded mt-1"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  ABN (Australian Business Number)
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded mt-1"
                  placeholder="Enter your ABN"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Certifications</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded mt-1"
                  placeholder="List your certifications (e.g., Electrician License)"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Service Type</label>
                <select className="w-full p-3 border border-gray-300 rounded mt-1">
                  <option>Select your service</option>
                  <option>Electrician</option>
                  <option>Plumber</option>
                  <option>Carpet Cleaning</option>
                  <option>AC Repair</option>
                  <option>Full Home Cleaning</option>
                  <option>Furniture Assembly</option>
                  <option>Gardner</option>
                  <option>Smart Lock and Security</option>
                </select>
              </div>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700">
                Register
              </button>
            </form>
          </div>
        </div>
        <div>
          {/* Google Map Component */}
          <div className="mt-8 m-">
            <LoadScript googleMapsApiKey={key}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Add a Marker at the center */}
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
