import React from "react";
import Image from "next/image";
import HeroImg from "../../public/hero-img.jpg";

const Hero = () => {
  return (
    <div className="w-full flex h-full items-center">
      <div className=" absolute max-w-5xl -right-[24rem] top-28 ">
        <Image
          src={HeroImg}
          alt="hero-img"
          className=" rounded-3xl border-2 border-black/10 dark:border-white/10"
        />
      </div>
      <div className="  flex flex-col max-w-[50%]">
        <h1 className=" text-6xl font-regular leading-tight dark:text-neutral-100 text-zinc-900 ">
          U.S. Engineering Where Quality Meets Precision
        </h1>
        <p className="text-base  text-zinc-600 dark:text-neutral-300 mt-5">
          Transforming Hospitals with International Standards. Elevate your
          facility with our expert interior design and equipment services,
          meeting U.S., UK, German, Turkish, and Italian standards.
        </p>
        <div className="flex gap-3 mt-7">
          <button className="px-8 py-3 bg-blue-600 active:bg-blue-700 hover:bg-blue-600 rounded-xl text-[#FAFAFA] ">
            Get in touch
          </button>
          <button className="px-8 py-3  active:bg-blue-700 hover:bg-blue-600 hover:text-[#FAFAFA] rounded-xl text-zinc-500 ">
            See our product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
