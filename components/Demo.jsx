import React from "react";
import Finance from "../public/home/finance.svg";
import Banking from "../public/home/banking.svg";
import Payment from "../public/home/payment.svg";

const Demo = () => {
  return (
    <section className="w-full py-6 bg-bgBlue">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center font-publicSans">
        <div className="sm:w-full flex flex-col justify center items-center gap-y-5 min-h-[270px]">
          <Finance className="" />
          <h3 className="text-[18px] font-bold text-sanJuanBlue">
            Personal Finances
          </h3>
          <div className="px-4">
            <p className="text-[15px] text-lightSanJuanBlue text-center ">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.{" "}
            </p>
          </div>
        </div>
        <div className="sm:w-full flex flex-col justify center items-center gap-y-5 min-h-[270px]">
          <Banking className="" />
          <h3 className="text-[18px] font-bold text-sanJuanBlue">
            Banking & Coverage
          </h3>
          <div className="px-4">
            <p className="text-[15px] text-lightSanJuanBlue text-center">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
        </div>
        <div className="sm:w-full flex flex-col justify center items-center gap-y-5 min-h-[270px]">
          <div className="">
            <Payment className="" />
          </div>
          <h3 className="text-[18px] font-bold text-sanJuanBlue">
            Consumer Payments
          </h3>
          <div className="px-4">
            <p className="text-[15px] text-lightSanJuanBlue text-center">
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
