"use client";

import GoogleLogo from "../public/shared/google.svg";
import HewlettPackard from "../public/shared/hewlett-packard.svg";
import MicrosoftLogo from "../public/shared/microsoft.svg";
import Nvidia from "../public/shared/nvidia.svg";
import Oracle from "../public/shared/oracle.svg";
import Tesla from "../public/shared/tesla.svg";

import { useForm } from "react-hook-form";

const Contactform = () => {
  const form = useForm();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  return (
    <section className="bg-bgBlue">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-dmSerif text-[32px] sm:text-[48px] lg:text-[56px] text-center lg:text-left text-sanJuanBlue leading-none px-4 lg:max-w-[730px] sm:max-w-[573px] sm:mx-auto lg:mx-0 pb-2">
          Submit a help request and we’ll get in touch shortly.
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="px-4 max-w-[445px] mx-auto lg:mx-0 border-none"
            >
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}
                  className={`${
                    errors.name
                      ? "border-redError focus:border-redError text-redError"
                      : "border-lightSanJuanBlue focus:border-sanJuanBlue"
                  } bg-transparent py-3 border-b-1 border-t-0 border-x-0 w-full placeholder:text-lightSanJuanBlue transition-all focus:ring-0`}
                  placeholder="Name"
                />
              </div>
              <p className="text-redError text-[11px]">
                {errors.name?.message}
              </p>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Sorry, invalid format here",
                    },
                  })}
                  className={`${
                    errors.email
                      ? "border-redError focus:border-redError text-redError"
                      : "border-lightSanJuanBlue focus:border-sanJuanBlue "
                  } bg-transparent border-b-1 border-t-0 border-x-0 py-3  w-full placeholder:text-lightSanJuanBlue transition-all focus:ring-0`}
                  placeholder="Email Address"
                />
              </div>
              <p className="text-redError">{errors.email?.message}</p>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  {...register("company", {
                    required: {
                      value: true,
                      message: "Company Name is required",
                    },
                  })}
                  className={`${
                    errors.company
                      ? "border-redError focus:border-redError text-redError"
                      : "border-lightSanJuanBlue focus:border-sanJuanBlue "
                  } bg-transparent border-b-1 border-t-0 border-x-0 py-3 w-full placeholder:text-lightSanJuanBlue transition-all focus:ring-0`}
                  placeholder="Company Name"
                />
              </div>
              <p className="text-redError">{errors.company?.message}</p>
              <div className="relative">
                <input
                  type="text"
                  id="title"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required",
                    },
                  })}
                  className={`${
                    errors.title
                      ? "border-redError focus:border-redError text-redError"
                      : "border-lightSanJuanBlue focus:border-sanJuanBlue "
                  } bg-transparent border-b-1 border-t-0 border-x-0 py-3  w-full placeholder:text-lightSanJuanBlue transition-all focus:ring-0`}
                  placeholder="Title"
                />
              </div>
              <p className="text-redError">{errors.title?.message}</p>
              <div className="relative">
                <textarea
                  id="chat"
                  {...register("chat", {
                    required: {
                      value: true,
                      message: "message is required",
                    },
                  })}
                  className={`${
                    errors.chat
                      ? "border-redError focus:border-redError text-redError"
                      : "border-lightSanJuanBlue focus:border-sanJuanBlue "
                  } bg-transparent border-b-1 border-t-0 border-x-0 py-3  w-full placeholder:text-lightSanJuanBlue transition-all focus:ring-0`}
                  placeholder="Message"
                ></textarea>
              </div>
              <p className="text-redError">{errors.chat?.message}</p>

              <div className="flex gap-x-6  items-center">
                <input
                  type="checkbox"
                  className="bg-lightSanJuanBlue h-[24px] w-[24px] focus:ring-transparent checked:bg-darkPink"
                />
                <p>
                  Stay up-to-date with company announcements and updates to our
                  API
                </p>
              </div>

              <div className="py-6">
                <button className="rounded-full text-[15px] w-[152px] h-[48px] border border-sanJuanBlue hover:bg-sanJuanBlue hover:text-waterWhite font-bold text-sanJuanBlue">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full">
            <h3 className="font-dmSerif text-[24px] text-lightSanJuanBlue text-center lg:text-left sm:max-w-[445px] mx-auto lg:mx-0 px-4">
              Join the thousands of innovators already building with us
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto  w-full px-4 mb-6 lg:mb-0">
              <div className=" flex items-center justify-center min-h-[40px] my-2">
                <Tesla className="fill-sanJuanBlue" />
              </div>
              <div className=" flex items-center justify-center min-h-[40px] my-2">
                <MicrosoftLogo className="fill-sanJuanBlue" />
              </div>
              <div className=" flex items-center justify-center min-h-[40px] my-2">
                <HewlettPackard className="fill-sanJuanBlue" />
              </div>
              <div className=" flex items-center justify-center min-h-[40px] my-2">
                <Oracle className="fill-sanJuanBlue" />
              </div>
              <div className=" flex items-center justify-center min-h-[40px] my-2">
                <GoogleLogo className="fill-sanJuanBlue" />
              </div>
              <div className=" flex items-center justify-center min-h-[40px] my-2">
                <Nvidia className="fill-sanJuanBlue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
