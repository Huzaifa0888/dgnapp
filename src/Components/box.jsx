import React from "react";

const Box = () => {
  return (
    <>
      <div className="py-10 flex flex-col justify-center item-center lg:grid grid-cols-3 md:max-w-3xl  xl:gap-x-52 gap-y-4 w-full pt-10  px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mx-auto w-64">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="h-[340px] box p-7">
              <img
                className="w-full"
                src="https://www.dgnapp.ai/static/media/benefit1.7bdfca10831b54695ca35d9c74263514.svg"
                alt="benefit1"
              />
              <p className="text-sm  text-white text-center font-semibold mt-6">
                Smart solutions for micro market cap investors
              </p>
            </div>
            <div className="absolute left-0 bottom-0  bg-gradient-to-t from-purple-400 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="w-64 mx-auto ">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="h-[340px] box p-7">
              <img
                className="w-full"
                src="https://www.dgnapp.ai/static/media/benefit2.0fb687fd7c806b4b2434b567803e0f11.svg"
                alt="benefit2"
              />
              <p className="text-sm text-white text-center font-semibold mt-6">
                Unique blockchain data reports of micro cap tokens
              </p>
            </div>
            <div className="absolute left-0 bottom-0  bg-gradient-to-t from-purple-400 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="mx-auto w-64 ">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="box p-7 h-[340px]">
              <img
                className="w-full"
                src="https://www.dgnapp.ai/static/media/benefit3.31b6a62cc098b7677154f9444b4880cb.svg"
                alt="benefit3"
              />
              <p className="text-sm text-white text-center font-semibold mt-6">
                Machine learning to help avoid scams
              </p>
            </div>
            <div className="absolute right-0 top-0  bg-gradient-to-b from-purple-400 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
