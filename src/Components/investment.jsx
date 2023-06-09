import React from "react";

const Investment = () => {
  return (
    <section className="mt-28 py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-center">
          <span className="text text-center text-[32px] ">
            Take control of your investments
          </span>
        </div>

        <div className="flex lg:justify-between mt-10  justify-center items-center lg:flex-nowrap flex-wrap w-full lg:h-80  ">
          <div className="w-full md:w-6/12 md:pr-6">
            <div className="w-11/12 mx-auto ">
              <img
                className=" md:p-0 lg:p-28"
                src="/description.svg"
                alt="description1"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 lg:mt-0 ">
            <div className="w-11/12 mx-auto">
              <p className="text-[#3c4fe3] text-lg font-normal lg:mb-7 mb-3 ">
                US.
              </p>
              <p className="text-white text-[18px] font-medium">
                We are in the process of developing our flagship feature:
                <span className="font-extrabold">
                  the AI Investment Toolbox
                </span>
                . This feature will consist of three main tools: Token Research
                Tool (the beta is currently available), AI Pump Dump Detector
                and AI Fraud Address Detector. Our main goal is to provide
                clarity (in the form of advanced data) for investors and
                traders.
              </p>
            </div>
          </div>
        </div>
        <div className="order flex lg:justify-between mt-10 justify-center items-center lg:flex-nowrap flex-wrap w-full lg:h-80 ">
          <div className="w-full md:w-7/12 lg:mt-0  order-2  lg:order-1">
            <div className="w-11/12 mx-auto">
              <p className="text-[#3c4fe3] text-lg font-normal  mb-7 ">YOU.</p>
              <p className="text-white text-[18px] font-medium">
                We are in the process of developing our flagship feature:
                <span className="font-extrabold">
                  the AI Investment Toolbox
                </span>
                . This feature will consist of three main tools: Token Research
                Tool (the beta is currently available), AI Pump Dump Detector
                and AI Fraud Address Detector. Our main goal is to provide
                clarity (in the form of advanced data) for investors and
                traders.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:pr-6 order-1 lg:order-2">
            <div className="w-11/12 mx-auto ">
              <img
                className=" md:p-0 lg:p-28"
                src="/description1.svg"
                alt="description1"
              />
            </div>
          </div>
        </div>
        <div className="mt-10   flex lg:justify-between  justify-center items-center lg:flex-nowrap flex-wrap w-full lg:h-80">
          <div className="w-full md:w-6/12 md:pr-6">
            <div className="w-11/12 mx-auto ">
              <img
                className=" md:p-0 lg:p-28"
                src="/description2.svg"
                alt="description1"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 lg:mt-0 ">
            <div className="w-11/12 mx-auto">
              <p className="text-[#3c4fe3] text-lg font-normal mb-7 ">US.</p>
              <p className="text-white text-[18px] font-medium">
                We are in the process of developing our flagship feature:
                <span className="font-extrabold">
                  the AI Investment Toolbox
                </span>
                . This feature will consist of three main tools: Token Research
                Tool (the beta is currently available), AI Pump Dump Detector
                and AI Fraud Address Detector. Our main goal is to provide
                clarity (in the form of advanced data) for investors and
                traders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
