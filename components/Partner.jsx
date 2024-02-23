import Link from "next/link";
import GoogleLogo from "../public/shared/google.svg";
import HewlettPackard from "../public/shared/hewlett-packard.svg";
import MicrosoftLogo from "../public/shared/microsoft.svg";
import Nvidia from "../public/shared/nvidia.svg";
import Oracle from "../public/shared/oracle.svg";
import Tesla from "../public/shared/tesla.svg";

const Partner = () => {
  return (
    <section className="bg-mirageBlue/90 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className=" w-full">
            <div className="text-white flex flex-col justify-center text-center lg:text-left gap-y-4 px-4">
              <h2 className="font-dmSerif text-[32px] sm:text-[48px]">
                Who we work with
              </h2>
              <p className="text-[15px] max-w-[445px] leading-7 mx-auto lg:mx-0">
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.{" "}
              </p>
              <Link href={"/about"}>
                <button className="border border-waterWhite rounded-full w-[129px] h-[48px] mb-4 mx-auto lg:mx-0 hover:bg-waterWhite hover:text-sanJuanBlue font-bold">
                  About Us
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto  w-full px-4 mb-6 lg:mb-0">
            <div className=" flex items-center justify-center min-h-[40px] my-2">
              <Tesla className="fill-white" />
            </div>
            <div className=" flex items-center justify-center min-h-[40px] my-2">
              <MicrosoftLogo className="fill-white" />
            </div>
            <div className=" flex items-center justify-center min-h-[40px] my-2">
              <HewlettPackard className="fill-white" />
            </div>
            <div className=" flex items-center justify-center min-h-[40px] my-2">
              <Oracle className="fill-white" />
            </div>
            <div className=" flex items-center justify-center min-h-[40px] my-2">
              <GoogleLogo className="fill-white" />
            </div>
            <div className=" flex items-center justify-center min-h-[40px] my-2">
              <Nvidia className="fill-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
