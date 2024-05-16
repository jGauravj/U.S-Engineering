import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import Offer from "@/components/Offer";

const page = () => {
  return (
    <div className="h-screen overflow-x-hidden w-full flex justify-center relative bg-[#FFFEFB] dark:bg-zinc-950">
      <div className="min-h-screen w-full relative lg:mx-36 md:mx-10 mx-5">
        <Navbar />
        <Hero />
        <InfiniteMovingCardsDemo />
        <Offer />

      </div>
    </div>
  );
};

export default page;
//max-w-[76.2rem]
