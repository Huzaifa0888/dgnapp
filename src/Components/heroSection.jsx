

function HeroSection() {
  return (
    <>
      <section className="md:py-20 py-20 bg-[url('/public/background.jpg')] min-h-[200px]  lg:pb-[100px] md:bg-cover lg:py-0  lg:bg-auto bg-center bg-no-repeat ">
        <div className="px-4  mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid  items-stretch grid-cols-1  gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="flex items-center justify-start lg:h-[700px] lg:order-1  ">
              <div className="lg:mt-20">
                <h2 className=" text-3xl font-extrabold leading-tight text-white lg:w-[70%] md:w-[85%] sm:text-4xl lg:text-[64px]   md:mt-5 lg:leading-tight">
                  Exposure to better data Smarter investing Mitigate risk
                </h2>
                <p className="lg:mb-20 mb-10 text-xl leading-relaxed text-white lg:mt-9 mt-4 lg:w-[50%]">
                  Developing tools, for micro market cap token investors, by
                  combining blockchain data and AI
                </p>

                <a href="#" title="" className="btn mt-4" role="button ">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection