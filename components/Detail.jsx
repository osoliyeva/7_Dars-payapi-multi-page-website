import Image from "next/image";
import React from "react";

const Detail = () => {
  return (
    <section className="w-full py-6 bg-bgBlue">
      <div className="max-w-6xl mx-auto flex flex-col items-center font-publicSans">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full">
            <Image
              src={"/home/illustration-easy-to-implement.svg"}
              width={445}
              height={284}
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-center text-center lg:text-left">
            <h3 className="font-dmSerif sm:text-[48px] text-[32px] font-bold text-sanJuanBlue">
              Easy to implement
            </h3>
            <p className="text-lightSanJuanBlue text-[15px] max-w-[445px]">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full flex flex-col justify-center text-center lg:text-left">
            <h3 className="font-dmSerif sm:text-[48px] text-[32px] font-bold text-sanJuanBlue">
              Simple UI & UX
            </h3>
            <p className="text-lightSanJuanBlue text-[15px] max-w-[445px]">
              Our Our pre-built form is easy to integrate in your app or
              website’s checkout flow and designed to optimize conversion.
            </p>
          </div>
          <div className="w-full">
            <Image
              src={"/home/illustration-simple-ui.svg"}
              width={445}
              height={284}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
