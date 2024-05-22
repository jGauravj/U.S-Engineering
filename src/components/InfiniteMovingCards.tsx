"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="flex absolute items-center justify-center z-20 mt-20 lg:mt-36 ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "William Shakespeare",
  },
  {
    name: "Edgar Allan Poe",
  },
  {
    name: "Jane Austen",
  },
  {
    name: "Herman Melville",
  },
];
