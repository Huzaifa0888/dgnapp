
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
          <p className="text-white mt-3 text-[18px] w-full font-medium text-center">
            Token contract: 0xd068c7c941fbbd2300cb2f1841858c2643722dc7 
          </p>
          <div className="flex justify-center mt-5">
            <a href="#" title="" className="btn text-center" role="button ">
              Buy
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <img src="/tokenomics.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Tokenomics