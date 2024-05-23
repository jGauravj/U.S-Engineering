import React from "react";
import Hero from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import Offer from "@/components/Offer";
import { Testimonials } from "@/components/Testimonials";
const page = () => {
  return (
    <div className="h-screen overflow-x-hidden w-full flex justify-center relative bg-[#FFFEFB] dark:bg-zinc-950">
      <div className="lg:mx-36 md:mx-10 mx-5">
        <Hero />
        <Offer />
        <Testimonials />
      </div>
    </div>
  );
};

export default page;
//max-w-[76.2rem]
