import React from "react";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full flex flex-col bg-[#FFFEFB] dark:bg-zinc-950">
      <div className="h-[30rem] z-10 -top-5 w-full dark:bg-zinc-950 bg-[#FFFEFB] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute">
        <div className="h-10 xl:h-32 bg-gradient-to-t from-[#FFFEFB] dark:bg-gradient-to-t dark:from-zinc-950 absolute -bottom-5 left-0 xl:bottom-0 w-full z-10"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-[#FFFEFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <Hero />
      <Offer />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default page;
//max-w-[76.2rem]
// lg:mx-36 md:mx-10 mx-5
