"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="flex absolute items-center justify-center z-50 ">
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
