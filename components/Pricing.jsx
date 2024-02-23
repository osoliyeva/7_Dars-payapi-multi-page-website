import CheckIcon from "../public/shared/check.svg";

const Pricing = () => {
  return (
    <section className="bg-bgBlue">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-dmSerif text-[32px] sm:text-[48px] lg:text-[56px] text-sanJuanBlue font-bold text-center lg:text-left lg:px-4 mb-6">
          Pricing
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="px-4 w-full">
            <h3 className="font-dmSerif text-darkPink text-[24px] lg:text-[32px]  text-center lg:text-left">
              Free Plan
            </h3>
            <p className="hidden sm:flex text-[15px] text-lightSanJuanBlue text-center lg:text-left">
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <h2 className="font-dmSerif text-[56px] sm:text-[48px] lg:text-[56px] font-bold text-center lg:text-left mb-4 text-sanJuanBlue">
              $0.00
            </h2>
            <hr className="mb-4 " />
            <div className="lg:px-4 flex flex-col lg:items-start items-center gap-y-2 mb-6">
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Transactions</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Auth</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Identity</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-bgBlue" />
                <p className=" text-lightSanJuanBlue">Investment</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-bgBlue" />
                <p className=" text-lightSanJuanBlue">Assets</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-bgBlue" />
                <p className=" text-lightSanJuanBlue">Liabilities</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-bgBlue" />
                <p className=" text-lightSanJuanBlue">Income</p>
              </div>
            </div>
            <hr className="py-4" />
            <div className="flex justify-center lg:justify-start lg:px-4 mb-8">
              <button className="border border-sanJuanBlue text-sanJuanBlue rounded-full w-[168px] h-[48px]  text-[15px] font-bold hover:bg-sanJuanBlue hover:text-waterWhite">
                Request Access
              </button>
            </div>
          </div>
          <div className="px-4 w-full">
            <h3 className="font-dmSerif text-darkPink text-[24px] lg:text-[32px]  text-center lg:text-left">
              Basic Plan
            </h3>
            <p className="hidden sm:flex text-[15px] text-lightSanJuanBlue text-center lg:text-left">
              Launch your project with unlimited requests and no contractual
              minimums{" "}
            </p>
            <h2 className="font-dmSerif text-[56px] sm:text-[48px] lg:text-[56px] font-bold text-center lg:text-left mb-4 text-sanJuanBlue">
              $249.00
            </h2>
            <hr className="mb-4 " />
            <div className="lg:px-4 flex flex-col lg:items-start items-center gap-y-2 mb-6">
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Transactions</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Auth</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Identity</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className=" text-sanJuanBlue">Investment</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className=" text-sanJuanBlue">Assets</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-bgBlue" />
                <p className=" text-lightSanJuanBlue">Liabilities</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-bgBlue" />
                <p className=" text-lightSanJuanBlue">Income</p>
              </div>
            </div>
            <hr className="py-4" />
            <div className="flex justify-center lg:justify-start lg:px-4 mb-8">
              <button className="border border-sanJuanBlue text-sanJuanBlue rounded-full w-[168px] h-[48px]  text-[15px] font-bold hover:bg-sanJuanBlue hover:text-waterWhite">
                Request Access
              </button>
            </div>
          </div>
          <div className="px-4 w-full">
            <h3 className="font-dmSerif text-darkPink text-[24px] lg:text-[32px]  text-center lg:text-left">
              Premium Plan
            </h3>
            <p className="hidden sm:flex text-[15px] text-lightSanJuanBlue text-center lg:text-left">
              Get tailored solutions, volume pricing, and dedicated support for
              your team
            </p>
            <h2 className="font-dmSerif text-[56px] sm:text-[48px] lg:text-[56px] font-bold text-center lg:text-left mb-4 text-sanJuanBlue">
              $499.00
            </h2>
            <hr className="mb-4 " />
            <div className="lg:px-4 flex flex-col lg:items-start items-center gap-y-2 mb-6">
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Transactions</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Auth</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className="text-sanJuanBlue">Identity</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className=" text-sanJuanBlue">Investment</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className=" text-sanJuanBlue">Assets</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className=" text-sanJuanBlue">Liabilities</p>
              </div>
              <div className="flex gap-x-4 justify-left items-center lg:px-6 px-0  w-[200px]">
                <CheckIcon className="stroke-darkPink" />
                <p className=" text-sanJuanBlue">Income</p>
              </div>
            </div>
            <hr className="py-4" />
            <div className="flex justify-center lg:justify-start lg:px-4 mb-8">
              <button className="border border-sanJuanBlue text-sanJuanBlue rounded-full w-[168px] h-[48px]  text-[15px] font-bold hover:bg-sanJuanBlue hover:text-waterWhite">
                Request Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
