import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaUserTie, FaTools } from "react-icons/fa";
import { FaCheckCircle, FaStar, FaAward } from "react-icons/fa";

const WhyProConnect = () => {
  return (
    <div className="my-14 mx-8">
      <div className="font-bold text-3xl py-6">Why ProConnect?</div>
      <div className="grid sm:grid-cols-2 mt-6">
        <div>
          <div>
            <div>
              {/* Transparent pricing */}
              <div className="flex items-center gap-6">
                <BsGraphUp size={40} className="text-emerald-500" />
                <div className="m-4">
                  <p className="font-bold text-xl">Transparent pricing</p>
                  <p className="text-gray-400">
                    See fixed prices before you book. No hidden charges.
                  </p>
                </div>
              </div>

              {/* Experts only */}
              <div className="flex items-center gap-6 mt-8">
                <FaUserTie size={40} className="text-emerald-500" />
                <div className="m-4">
                  <p className="font-bold text-xl">Experts only</p>
                  <p className="text-gray-400">
                    Our professionals are well trained and have on-job
                    expertise.
                  </p>
                </div>
              </div>

              {/* Fully equipped */}
              <div className="flex items-center gap-6 mt-8">
                <FaTools size={40} className="text-emerald-500" />
                <div className="m-4">
                  <p className="font-bold text-xl">Fully equipped</p>
                  <p className="text-gray-400">
                    We bring everything needed to get the job done well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-emerald-200/50 h-full flex items-center justify-center rounded-2xl">
            <div>
              {/* Quality Assurance */}
              <div className=" mx-2 items-center gap-6 hidden sm:flex">
                <FaAward size={80} className="text-green-500" />{" "}
                <div className="m-4">
                  <p className="font-bold text-xl">Top Quality</p>
                  <p className="text-gray-400">
                    We ensure the highest quality standards in all our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyProConnect;
