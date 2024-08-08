"use client"
import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section className="py-10 bg-[#03001417] backdrop-blur-md sm:py-16 lg:py-24">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Our Team and Presence
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-4">
          <div>
            <h3 className="font-bold text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9615DB] to-[#1aceb9]">
                <CountUp start={0} end={5} duration={5} />+
              </span>
            </h3>
            <p className="mt-4 text-lg font-medium text-gray-400">Partners</p>
          </div>
          <div>
            <h3 className="font-bold text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9615DB] to-[#1aceb9]">
                <CountUp start={0} end={40} duration={5} />+
              </span>
            </h3>
            <p className="mt-4 text-lg font-medium text-gray-400">Team Members</p>
          </div>
          <div>
            <h3 className="font-bold text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9615DB] to-[#1aceb9]">
                <CountUp start={0} end={3} duration={5} />
              </span>
            </h3>
            <p className="mt-4 text-lg font-medium text-gray-400">Offices</p>
          </div>
          <div>
            <h3 className="font-bold text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9615DB] to-[#1aceb9]">
                <CountUp start={0} end={13} duration={5} />+
              </span>
            </h3>
            <p className="mt-4 text-lg font-medium text-gray-400">Industries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
