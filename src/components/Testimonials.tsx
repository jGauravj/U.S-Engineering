"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TestimonialItem } from "./types";


const testimonials:TestimonialItem[] = [
  {
    para: "Amazing service and top-notch products! The attention to detail is exceptional. I highly recommend this company to anyone looking for quality and reliability.",
    name: "ESIC Hospital",
    subname: " Basaidarapur, New Delhi",
  },
  {
    para: "Exceptional quality and outstanding customer service. Every interaction has been positive, and the products consistently exceed my expectations.",
    name: "ILBS Hospital",
    subname: "Vasant Kunj, New Delhi",
  },
  {
    para: "Best products and fantastic service. The team is always helpful and responsive. I will definitely buy again and recommend them to friends and family!",
    name: "Uttar Pradesh Rajkiya",
    subname: "Nirman Nigam Ltd",
  },
  {
    para: "Great service and superb quality. The products exceeded my expectations in every way. I am extremely satisfied and will continue to be a loyal customer.",
    name: "ESIC Hospital",
    subname: "Jhilmil, Delhi",
  },
  {
    para: "High-quality products and excellent customer care. Every interaction has been impressive. I appreciate the commitment to excellence and highly recommend this company.",
    name: "Lok Nayak Hospital",
    subname: "New Delhi",
  },
];

const testimonials2: TestimonialItem[] = [
  {
    para: "Amazing service and top-notch products! The attention to detail is exceptional. I highly recommend this company to anyone looking for quality and reliability.",
    name: "Sushruta Trauma Center",
    subname: "Civil Lines, New Delhi",
  },
  {
    para: "Exceptional quality and outstanding customer service. Every interaction has been positive, and the products consistently exceed my expectations.",
    name: "ESIC Hospital",
    subname: "Manesar, Haryana",
  },
  {
    para: "Best products and fantastic service. The team is always helpful and responsive. I will definitely buy again and recommend them to friends and family!",
    name: "Vikash Hospital",
    subname: "Najafgarh New Delhi",
  },
  {
    para: "Great service and superb quality. The products exceeded my expectations in every way. I am extremely satisfied and will continue to be a loyal customer.",
    name: "RGSS Hospital",
    subname: "Tahirpur, Delhi",
  },
  {
    para: "High-quality products and excellent customer care. Every interaction has been impressive. I appreciate the commitment to excellence and highly recommend this company.",
    name: "Safdarjung Hospital",
    subname: "VMMC, New Delhi.",
  },
];
const testimonials3: TestimonialItem[] = [
  {
    para: "Excellent service and top-notch products! The quality is consistently impressive, and the team is incredibly supportive. Highly recommend this company for all medical supply needs.",
    name: "S.R.H.C Hospital",
    subname: "Narela New Delhi",
  },
  {
    para: "Superb products and outstanding customer service. The team is always prompt and attentive, ensuring our needs are met. I am thoroughly satisfied with every purchase.",
    name: "Deen Dayal Upadhyay Hospital",
    subname: "Harinagar, New Delhi",
  },
  {
    para: "Top-tier service and high-quality products! The staff is knowledgeable and helpful, making every transaction smooth and efficient. I highly recommend this company.",
    name: "DMRC- ILBS Hospital",
    subname: "Vasant Kunj, New Delhi",
  },
  {
    para: "Impeccable service and superior products. Every order is handled with care and precision. This company is our go-to for reliable and high-quality medical supplies.",
    name: "Pt. Madan Mohan Malaviya",
    subname: "Malviya Nagar, New Delhi",
  },
  {
    para: "Outstanding quality and excellent customer support. The products are consistently reliable, and the service team is exceptional. Highly recommend for anyone in need of quality medical supplies.",
    name: "Life Care Multi Specialty",
    subname: " Karol Bagh, New Delhi.",
  },
];


export function Testimonials() {
  return (
    <div className="flex flex-col relative mt-[5rem] lg:mt-[7rem]">
      <h1 className="text-center lg:text-6xl md:text-5xl text-5xl sm:4xl dark:text-neutral-100 text-zinc-900">
        Words from Hospitals
      </h1>
      <p className="text-center text-base text-zinc-600 dark:text-neutral-300 pt-4">
        Discover the kind words our clients have shared about their experience
        with U.S. Engineering in enhancing their hospital environments.
      </p>
      <div className=" flex absolute items-center justify-center z-20 mt-[14rem] sm:mt-[10rem] lg:mt-[10rem] ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className=" flex absolute items-center justify-center z-20 top-[31rem] sm:top-[26.5rem] md:top-[25rem] lg:top-[16rem] lg:mt-36 ">
        <InfiniteMovingCards
          items={testimonials2}
          direction="left"
          speed="slow"
        />
      </div>
      <div className=" flex absolute items-center justify-center z-20 top-[48rem] sm:top-[43rem] md:top-[40rem] lg:top-[31rem] lg:mt-36 ">
        <InfiniteMovingCards
          items={testimonials3}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

