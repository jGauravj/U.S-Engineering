import React from "react";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import { InfiniteMovingCardsDemo } from "@/components/Testimonials";
const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full flex flex-col bg-[#FFFEFB] dark:bg-zinc-950">
      <Hero />
      <Offer />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default page;
//max-w-[76.2rem]
// lg:mx-36 md:mx-10 mx-5
