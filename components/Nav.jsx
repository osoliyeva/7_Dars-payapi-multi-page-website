"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/shared/logo.svg";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="w-full py-6 bg-bgBlue">
      <div className="max-w-6xl mx-auto flex justify-between items-center font-publicSans ">
        <div className="flex items-center gap-x-6 px-4">
          <Link href={"/"}>
            <Logo className="fill-sanJuanBlue" />
          </Link>
          <div className="sm:flex hidden">
            <div className="flex gap-x-6 text-sanJuanBlue font-bold text-[15px]">
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
        </div>
        <div className="px-4">
          <div className="bg-darkPink rounded-full h-[38px] items-center justify-center hover:bg-charmPink sm:flex hidden">
            <Link
              href={"/contact"}
              className="text-waterWhite text-[15px] font-bold w-[173px] text-center"
            >
              {" "}
              Schedule a Demo
            </Link>
          </div>
        </div>
        <div className="sm:hidden flex flex-col  px-4">
          <Image
            src={toggleDropdown ? "/shared/close.svg" : "/shared/menu.svg"}
            width={22}
            height={23}
            alt=""
            className="object-contain cursor-pointer z-30"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />

          <div
            className={`${
              !toggleDropdown ? "hidden" : "flex"
            } absolute top-0 right-0 h-full min-w-[300px] z-10 bg-mirageBlue/80`}
          >
            <ul className="list-none flex flex-col mx-auto py-16 text-waterWhite font-bold text-[20px] gap-y-6 items-center">
              <li onClick={() => setToggleDropdown(false)}>
                <Link href={"/pricing"}>Pricing</Link>
              </li>
              <li onClick={() => setToggleDropdown(false)}>
                <Link href={"/about"}>About</Link>
              </li>
              <li onClick={() => setToggleDropdown(false)}>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li
                onClick={() => setToggleDropdown(false)}
                className="bg-darkPink rounded-full w-[173px] h-[38px] text-[15px] flex items-center justify-center"
              >
                <Link href={"/contact"}>Schedule a Demo</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
