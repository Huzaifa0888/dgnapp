import React from "react";

const Box = () => {
  return (
    <>
      <div
        id="about"
        className="py-10 flex flex-col justify-center item-center lg:grid grid-cols-3 md:max-w-3xl  xl:gap-x-52 gap-y-4 w-full pt-10  px-4 mx-auto sm:px-6 lg:px-8 lg:mt-40 lg:max-w-7xl"
      >
        <div className="mx-auto w-64">
          <div className="rounded-3xl overflow-hidden relative">
            <div className="h-[340px] box p-7">
              <img className="w-full" src="/description.svg" alt="benefit1" />
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
              <img className="w-full" src="/description1.svg" alt="benefit2" />
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
              <img className="w-full" src="/description2.svg" alt="benefit3" />
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
