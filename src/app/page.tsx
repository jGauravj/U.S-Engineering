import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";

const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-screen flex justify-center relative bg-[#FFFEFB] dark:bg-zinc-950">
      <div className="min-h-screen w-full  lg:mx-36 md:mx-10 mx-5  ">
        <Navbar />
        <Hero />
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default page;
//max-w-[76.2rem]
