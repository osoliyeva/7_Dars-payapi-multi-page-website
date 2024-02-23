import Link from "next/link";
import Image from "next/image";
import Logo from "../public/shared/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-mirageBlue py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between text-waterWhite px-4">
          <div className="flex flex-col sm:flex-row items-center text-[15px] font-bold gap-x-10 sm:gap-y-0 gap-y-5">
            <Link href={"/"}>
              <Logo className="fill-white" />
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-x-10 sm:gap-y-0 gap-y-5 ">
              <Link href="/pricing" className="">
                Pricing
              </Link>
              <Link href="/about" className="">
                About
              </Link>
              <Link href="/contact" className="">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex gap-x-8 pt-6 sm:pt-0">
            <Image
              src={"/shared/facebook.svg"}
              height={24}
              width={24}
              alt=""
              className="text-white cursor-pointer"
            />
            <Image
              src={"/shared/twitter.svg"}
              height={24}
              width={24}
              alt=""
              className="text-white cursor-pointer"
            />
            <Image
              src={"/shared/linkedin.svg"}
              height={24}
              width={24}
              alt=""
              className="text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
