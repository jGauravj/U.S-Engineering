"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="flex flex-col mb-10 gap-5 mt-20">
      <div className="flex flex-col gap-4 lg:mx-36 md:mx-10 mx-5">
        <h1 className="text-center lg:text-6xl md:text-5xl text-5xl sm:4xl dark:text-neutral-100 text-zinc-900">Words from Hospitals</h1>
        <p className=" text-center text-base text-zinc-600 dark:text-neutral-300">
          Discover the kind words our clients have shared about their experience
          with U.S. Engineering in enhancing their hospital environments.
        </p>
      </div>
      <div className=" mt-8 rounded-md flex flex-col  bg-[#FFFEFB] dark:bg-zinc-950  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials[0]}
          direction="right"
          speed="slow"
        />
      </div>
      <div className=" rounded-md flex flex-col  bg-[#FFFEFB] dark:bg-zinc-950  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials[1]}
          direction="left"
          speed="slow"
        />
      </div>
      <div className=" rounded-md flex flex-col  bg-[#FFFEFB] dark:bg-zinc-950  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials[2]}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  [
    {
      quote:
        "Amazing service and top-notch products! The attention to detail is exceptional. I highly recommend this company to anyone looking for quality and reliability.",
      name: "ESIC Hospital",
      title: "Basaidarapur, New Delhi",
    },
    {
      quote:
        "Exceptional quality and outstanding customer service. Every interaction has been positive, and the products consistently exceed my expectations.",
      name: "ILBS Hospital",
      title: "Vasant Kunj, New Delhi",
    },
    {
      quote:
        "Best products and fantastic service. The team is always helpful and responsive. I will definitely buy again and recommend them to friends and family!",
      name: "Uttar Pradesh Rajkiya",
      title: "Nirman Nigam Ltd",
    },
    {
      quote:
        "Great service and superb quality. The products exceeded my expectations in every way. I am extremely satisfied and will continue to be a loyal customer.",
      name: "ESIC Hospital",
      title: "Jhilmil, Delhi",
    },
    {
      quote:
        "High-quality products and excellent customer care. Every interaction has been impressive. I appreciate the commitment to excellence and highly recommend this company.",
      name: "Lok Nayak Hospital",
      title: "New Delhi",
    },
  ],
  [
    {
      quote:
        "Amazing service and top-notch products! The attention to detail is exceptional. I highly recommend this company to anyone looking for quality and reliability.",
      name: "Sushruta Trauma Center",
      title: "Civil Lines, New Delhi",
    },
    {
      quote:
        "Exceptional quality and outstanding customer service. Every interaction has been positive, and the products consistently exceed my expectations.",
      name: "ESIC Hospital",
      title: "Manesar, Haryana",
    },
    {
      quote:
        "Great service and superb quality. The products exceeded my expectations in every way. I am extremely satisfied and will continue to be a loyal customer.",
      name: "RGSS Hospital",
      title: "Tahirpur, Delhi",
    },
    {
      quote:
        "High-quality products and excellent customer care. Every interaction has been impressive. I appreciate the commitment to excellence and highly recommend this company.",
      name: "Safdarjung Hospital",
      title: "VMMC, New Delhi.",
    },
    {
      quote:
        "Best products and fantastic service. The team is always helpful and responsive. I will definitely buy again and recommend them to friends and family!",
      name: "Vikash Hospital",
      title: "Najafgarh New Delhi",
    },
  ],
  [
    {
      quote:
        "Excellent service and top-notch products! The quality is consistently impressive, and the team is incredibly supportive. Highly recommend this company for all medical supply needs.",
      name: "S.R.H.C Hospital",
      title: "Narela New Delhi",
    },
    {
      quote:
        "Top-tier service and high-quality products! The staff is knowledgeable and helpful, making every transaction smooth and efficient. I highly recommend this company.",
      name: "DMRC- ILBS Hospital",
      title: "Vasant Kunj, New Delhi",
    },
    {
      quote:
        "Impeccable service and superior products. Every order is handled with care and precision. This company is our go-to for reliable and high-quality medical supplies.",
      name: "Pt. Madan Mohan Malaviya",
      title: "Malviya Nagar, New Delhi",
    },
    {
      quote:
        "Outstanding quality and excellent customer support. The products are consistently reliable, and the service team is exceptional. Highly recommend for anyone in need of quality medical supplies.",
      name: "Life Care Multi Specialty",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Superb products and outstanding customer service. The team is always prompt and attentive, ensuring our needs are met. I am thoroughly satisfied with every purchase.",
      name: "Deen Dayal Upadhyay Hospital",
      title: "Harinagar, New Delhi",
    },
  ],
];
