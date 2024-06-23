import React from "react";
import Image from "next/image";
import careerImg from "../../assets/career.jpg";
import CareerContent from "@/components/CareerContent";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col mb-16">
      <div className="h-[30rem]  -top-5 w-full dark:bg-zinc-950 bg-[#FFFEFB] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute">
        <div className="h-10 xl:h-32 bg-gradient-to-t from-[#FFFEFB] dark:bg-gradient-to-t dark:from-zinc-950 absolute -bottom-5 left-0 xl:bottom-0 w-full z-10"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-[#FFFEFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="mt-28 z-20">
        <div className="lg:mx-36 md:mx-10 mx-5 flex flex-col items-center gap-3">
          <h1 className="bg-zinc-200 dark:bg-zinc-600 text-xs py-0.5 px-2 rounded-md">
            Career
          </h1>
          <h1 className="text-3xl text-center font-medium dark:text-neutral-100 text-zinc-900">
            Career
          </h1>
          <p className="text-center sm:w-3/4 dark:text-neutral-300 text-zinc-600">
            Since our establishment in 2010, we have been dedicated to
            transforming healthcare facilities with innovative design and
            exceptional service. Our commitment to excellence and quality has
            made us a trusted partner in the healthcare industry, continually
            striving to enhance the functionality and aesthetics of medical
            environments.
          </p>
          <div className="md:h-[35rem]  w-full sm:mt-16 mt-10">
            <Image
              src={careerImg}
              alt="Office-Chair-Img"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="sm:w-3/4 w-full flex flex-col gap-3 mt-6">
            <CareerContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
