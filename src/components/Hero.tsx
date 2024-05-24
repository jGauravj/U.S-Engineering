import React from "react";
import Image from "next/image";
import HeroImg from "../../public/hero-img.jpg";

const Hero = () => {
  return (
    <div className="w-full flex flex-col sm:mt-16   ">
      <div className="grid grid-cols-1 place-items-center sm:place-items-center sm:grid-cols-2 relative w-full sm:mt-40 ">
        <div className="absolute lg:max-w-4xl md:max-w-3xl sm:max-w-2xl sm:translate-x-[60%]  md:translate-x-[60%] sm:top-auto top-[5.5rem]  lg:translate-x-[70%] items-center  sm:mt-0 mx-5 sm:mx-0">
          <Image
            src={HeroImg}
            alt="hero-img"
            className=" rounded-3xl border-2 border-black/10 dark:border-white/10"
          />
        </div>
        <div className=" hero-content flex flex-col sm:justify-center mt-[21.5rem] sm:mt-0 lg:ml-36 md:ml-10 mx-5">
          <h1 className=" w-full lg:text-6xl md:text-5xl text-5xl sm:4xl font-normal leading-tight dark:text-neutral-100 text-zinc-900 ">
            U.S. Engineering Where Quality Meets Precision
          </h1>
          <p className="sm:text-base    text-zinc-600 dark:text-neutral-300 mt-5">
            Transforming Hospitals with International Standards. Elevate your
            facility with our expert interior design and equipment services,
            meeting U.S., UK, German, Turkish, and Italian standards.
          </p>
          <div className="flex  gap-3 mt-7">
            <button className="md:px-8 py-3 sm:px-4 px-6  bg-blue-600 active:bg-blue-700 hover:bg-blue-600 rounded-xl text-[#FAFAFA] ">
              Get in touch
            </button>
            <button className="md:px-8 sm:px-4 px-6 py-3  active:bg-blue-700 hover:bg-blue-600 hover:text-[#FAFAFA] rounded-xl text-zinc-500 ">
              See our product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
