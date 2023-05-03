import React from 'react'

function Footer() {
  return (
    <>
      <section className=" py-10 mt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-center items-center space-x-32">
            <div className="flex flex-col items-center pb-1 ">
              <img src="/uniswap.svg" className="w-12  h-12" alt="" />
              <p className="text-white mt-3 text-[14px] font-medium text-center">
                Uniswap
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/telegram.svg" className="w-10  h-10" alt="" />
              <p className="text-white mt-3 text-[14px] font-medium text-center">
                Telegram
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/twitter.svg" className="w-10 h-10" alt="" />
              <p className="text-white mt-3 text-[14px] font-medium text-center">
                Twitter
              </p>
            </div>
          </div>
          <div className="w-full mt-2 border-b border-0.5 border-slate-800"></div>
        </div>
        <p className="text-white text-center  rounded-md  pt-4 text-md font-bold">
          DGNAPP.AI © 2023
        </p>
      </section>
    </>
  );
}

export default Footer