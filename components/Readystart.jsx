import React from "react";

const Readystart = () => {
  return (
    <section className="w-full py-6 bg-bgBlue">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center font-publicSans px-4">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-[32px] sm:text-[48px] text-sanJuanBlue font-dmSerif">
            Ready to start?
          </h2>
        </div>
        <div className="sm:bg-waterWhite rounded-full flex flex-col sm:flex-row justify-between min-h-[48px] items-center mb-4 gap-y-2 sm:gap-y-0 sm:max-w-[445px] sm:mx-auto lg:mx-0">
          <div className="sm:h-full h-[48px] w-[327px] ">
            <input
              type="text"
              placeholder="Enter email address "
              className="px-4 w-full h-full rounded-full border-none"
            />
          </div>
          <div className="bg-darkPink rounded-full min-h-[48px] flex items-center w-[327px] sm:w-[173px] text-[15px] justify-center text-waterWhite font-bold cursor-pointer hover:bg-charmPink">
            Schedule a Demo
          </div>
        </div>
      </div>
    </section>
  );
};

export default Readystart;
