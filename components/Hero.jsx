import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-bgBlue">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col justify-center w-full  text-center lg:text-left px-4">
            <h1 className="font-bold text-sanJuanBlue text-[32px] sm:text-[48px] lg:text-[72px] font-dmSerif leading-none mb-4">
              Start building with our APIs for absolutely free.
            </h1>
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
            <div className="text-lightSanJuanBlue mb-4">
              Have any question?{" "}
              <Link href={"/contact"} className="font-bold">
                Contact Us
              </Link>
            </div>
          </div>
          <div className=" flex w-full justify-center px-4">
            <Image
              src={"/home/illustration-phone-mockup.svg"}
              width={263}
              height={500}
              className=""
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
