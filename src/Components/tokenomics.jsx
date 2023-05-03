
function Tokenomics() {
  return (
    <section className=" py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8  max-w-7xl">
        <div className="flex flex-col items-center">
          <span className=" text-center text-[32px] text ">Tokenomics</span>
          <p className="text-white mt-4 text-[18px] font-medium text-center">
            Token name: DGNAPP.AI
          </p>
          <p className="text-white mt-3 text-[18px] font-medium text-center">
            Token symbol: $DEGAI
          </p>
          <span className="text-white mt-3 text-[18px] flex  font-medium text-center">
            <span className="lg:block hidden"> Token contract: </span>
            0xd068c7c941fbbd2300cb2f1841858c2643722dc7
          </span>
          <div className="flex justify-center mt-5">
            <a href="#" title="" className="btn text-center" role="button ">
              Buy
            </a>
          </div>
        </div>

        <div className="flex justify-center overflow-x-hidden mt-20 h-[500px] xl:block lg:hidden">
          <div className="w-full h-[500px] overflow-x-hidden absolute">
            <div className="overflow-x-hidden top-[85px] right-[90px] relative flex items-center justify-end h-[100px] w-[400px]">
              <div className="text-white">
                <p className=" text-center text-gray-600"> Supply</p>
                <p className="text-center font-bold text-[18px]">
                  0% buy fee 5% sell
                </p>
                <p className="text-center font-bold text-[18px]">
                  0% buy fee 5% sell
                </p>
              </div>
              <div className="ml-[20px] border-r-0 border-b-0 w-[20px] border-[1px] border-solid border-[#dc12fc] h-[100px] opacity-50"></div>
            </div>
          </div>
          <div className="w-full h-[500px] overflow-x-hidden absolute">
            <div className="top-[235px] left-[20px] relative flex items-center justify-end h-[100px] w-[400px]">
              <div className="text-white">
                <p className=" text-center text-gray-600"> Taxes</p>
                <p className="text-center font-bold text-[18px]">
                  {" "}
                  0% buy fee 5% sell
                </p>
                <p className="text-center font-bold text-[18px]">
                  {" "}
                  0% buy fee 5% sell
                </p>
              </div>
              <div className="ml-[20px] border-r-0 border-b-0 w-[20px] border-[1px] border-solid border-[#dc12fc] h-[100px] opacity-50"></div>
            </div>
          </div>
          <div className="w-full h-[500px] overflow-x-hidden absolute ">
            <div className=" top-[295px] left-[405px] relative   items-center justify-end h-[100px] w-[400px]">
              <div className=" ml-[200px] top-20 mb-1  border-r-0 border-b-0 border-t-0 w-[20px] border-[1px] border-solid border-[#dc12fc] h-[30px] opacity-50"></div>

              <div className=" text-white">
                <p className=" text-center text-gray-600"> Taxes</p>
                <p className="text-center font-bold text-[18px]">
                  0% buy fee 5% sell
                </p>
                <p className="text-center font-bold text-[18px]">
                  0% buy fee 5% sell
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] overflow-x-hidden absolute">
            <div className="top-[245px] left-[570px] relative flex items-center justify-end h-[100px] w-[400px]">
              <div className="mr-[20px] border-l-0 border-b-0 w-[20px] border-[1px] border-solid border-[#dc12fc] h-[100px] opacity-50"></div>

              <div className="text-white">
                <p className=" text-center text-gray-600"> Taxes</p>
                <p className="text-center font-bold text-[18px]">
                  {" "}
                  0% buy fee 5% sell
                </p>
                <p className="text-center font-bold text-[18px]">
                  {" "}
                  0% buy fee 5% sell
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] overflow-x-hidden absolute">
            <div className="top-[85px] left-[690px] relative flex items-center justify-end h-[100px] w-[400px]">
              <div className="mr-[20px] border-l-0 border-b-0 w-[20px] border-[1px] border-solid border-[#dc12fc] h-[100px] opacity-50"></div>

              <div className="text-white">
                <p className=" text-center text-gray-600"> Supply</p>
                <p className="text-center font-bold text-[18px]">
                  0% buy fee 5% sell
                </p>
                <p className="text-center font-bold text-[18px]">
                  0% buy fee 5% sell
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/tokenomics.png" alt="" className="h-[280px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics