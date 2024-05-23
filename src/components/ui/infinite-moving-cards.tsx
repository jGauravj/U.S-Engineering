"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { TestimonialItem } from "../types";


export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div ref={containerRef} className={cn("", className)}>
      <ul
  ref={scrollerRef}
  className={cn(
    "flex min-w-full gap-5 shrink-0 w-max border-zinc-200 dark:border-white/10 bg-[#FFFEFB] dark:bg-zinc-950",
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
  {items.map((item, idx) => (
    <li
      className="w-[250px] max-w-full border border-black/10 dark:border-white/10 flex-shrink-0 md:w-[310px] rounded-lg shadow-sm"
      key={item.name}
      style={{ height: 'auto' }} // Set height to 'auto'
    >
      <blockquote>
        <div className="relative z-20 flex justify-center items-center">
          <div className="flex justify-center flex-col p-5">
            <span className="text-sm leading-[1.6] text-zinc-500 dark:text-neutral-300 font-normal border-b pb-3">
              {item.para}
            </span>
            <span className="text-sm pt-3 mt-auto text-zinc-900 dark:text-indigo-500 font-normal">
              {item.name}
            </span>
            <span className="text-sm leading-[1.6] text-zinc-400 dark:text-neutral-500 font-normal">
              {item.subname}
            </span>
          </div>
        </div>
      </blockquote>
    </li>
  ))}
</ul>

    </div>
  );
};
