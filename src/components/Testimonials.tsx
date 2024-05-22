"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="flex flex-col gap-10 relative bg-indigo-100 ">
      <div className=" flex absolute items-center justify-center z-20 mt-20 lg:mt-36 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className=" flex absolute items-center justify-center z-20 top-[15rem] lg:mt-36 ">
        <InfiniteMovingCards
          items={testimonials2}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    para: "Amazing service and top-notch products! The attention to detail is exceptional. I highly recommend this company to anyone looking for quality and reliability.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "Exceptional quality and outstanding customer service. Every interaction has been positive, and the products consistently exceed my expectations.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "Best products and fantastic service. The team is always helpful and responsive. I will definitely buy again and recommend them to friends and family!",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "Great service and superb quality. The products exceeded my expectations in every way. I am extremely satisfied and will continue to be a loyal customer.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "High-quality products and excellent customer care. Every interaction has been impressive. I appreciate the commitment to excellence and highly recommend this company.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
];

const testimonials2 = [
  {
    para: "Amazing service and top-notch products! The attention to detail is exceptional. I highly recommend this company to anyone looking for quality and reliability.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "Exceptional quality and outstanding customer service. Every interaction has been positive, and the products consistently exceed my expectations.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "Best products and fantastic service. The team is always helpful and responsive. I will definitely buy again and recommend them to friends and family!",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "Great service and superb quality. The products exceeded my expectations in every way. I am extremely satisfied and will continue to be a loyal customer.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
  {
    para: "High-quality products and excellent customer care. Every interaction has been impressive. I appreciate the commitment to excellence and highly recommend this company.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi.",
  },
];
