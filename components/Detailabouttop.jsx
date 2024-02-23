import React from "react";

const Detailaboutytop = () => {
  return (
    <section className="bg-bgBlue">
      <div className="max-w-6xl mx-auto">
        <div className=" lg:px-[128px] mb-6 px-4 ">
          <h1 className="font-dmSerif text-[32px] sm:text-[48px] lg:text-[56px] text-center lg:text-left text-sanJuanBlue leading-none lg:max-w-[730px] sm:max-w-[573px] sm:mx-auto lg:mx-0 ">
            We empower innovators by delivering access to the financial system
          </h1>
        </div>
        <div className="sm:px-[128px] ">
          <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-0 py-6">
            <h3 className="font-dmSerif text-sanJuanBlue text-[24px] sm:text-[32px] sm:min-w-[230px]">
              Our Vision
            </h3>
            <p className="text-center sm:text-left text-[15px] text-lightSanJuanBlue">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{" "}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-0 py-6">
            <h3 className="font-dmSerif text-sanJuanBlue text-[24px] sm:text-[32px] sm:min-w-[230px]">
              Our Business
            </h3>
            <p className="text-center sm:text-left text-[15px] text-lightSanJuanBlue">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detailaboutytop;
