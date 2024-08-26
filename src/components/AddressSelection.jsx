import React, { useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -37.8136,
  lng: 144.9631,
};

const AddressSelection = () => {
  const key = process.env.GOOGLE_API;
  const onLoad = useCallback(function callback(map) {
    // This function is called when the map is loaded.
  }, []);

  const onUnmount = useCallback(function callback(map) {
    // This function is called when the map is unmounted.
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-4">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <div className="flex items-center mb-6">
            <img
              className="h-6 w-6"
              src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg"
              alt="Location Icon"
            />
            <h2 className="text-xl font-medium ml-2">Address Selection</h2>
          </div>

          <form>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-emerald-600"
                placeholder="Address"
                id="location-input"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-emerald-600"
                placeholder="Apt, Suite, etc (optional)"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-emerald-600"
                placeholder="City"
                id="locality-input"
              />
            </div>

            <div className="flex justify-between mb-4">
              <input
                type="text"
                className="w-5/12 p-3 border-b border-gray-300 focus:outline-none focus:border-emerald-600"
                placeholder="State/Province"
                id="administrative_area_level_1-input"
              />
              <input
                type="text"
                className="w-5/12 p-3 border-b border-gray-300 focus:outline-none focus:border-emerald-600"
                placeholder="Zip/Postal code"
                id="postal_code-input"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-emerald-600"
                placeholder="Country"
                id="country-input"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700"
            >
              Checkout
            </button>
          </form>
        </div>
        <div>
          {/* Google Map Component */}
          <div className="mt-8 mb-6">
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

export default AddressSelection;
