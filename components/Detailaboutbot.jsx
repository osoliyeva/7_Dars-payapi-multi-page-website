import React from "react";

const Detailaboutbot = () => {
  return (
    <section className="bg-bgBlue">
      <div className="max-w-6xl mx-auto">
        <hr className="py-2" />
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full text-center sm:text-left sm:px-4 py-4">
            <p className="text-lightSanJuanBlue">Team Members</p>
            <h2 className="text-darkPink font-bold text-[56px]">300+</h2>
          </div>
          <div className="w-full text-center sm:text-left sm:px-4 py-4">
            <p className="text-lightSanJuanBlue">Office in the US</p>
            <h2 className="text-darkPink font-bold text-[56px]">3</h2>
          </div>
          <div className="w-full text-center sm:text-left sm:px-4 py-4">
            <p className="text-lightSanJuanBlue">Transaction analyzed</p>
            <h2 className="text-darkPink font-bold text-[56px]">10M+</h2>
          </div>
        </div>
        <hr className="py-2" />
        <div className="sm:px-[128px] ">
          <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-0 py-6">
            <h3 className="font-dmSerif text-sanJuanBlue text-[24px] sm:text-[32px] sm:min-w-[230px]">
              The Culture
            </h3>
            <p className="text-center sm:text-left text-[15px] text-lightSanJuanBlue">
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-0 py-6">
            <h3 className="font-dmSerif text-sanJuanBlue text-[24px] sm:text-[32px] sm:min-w-[230px]">
              The People
            </h3>
            <p className="text-center sm:text-left text-[15px] text-lightSanJuanBlue">
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detailaboutbot;
