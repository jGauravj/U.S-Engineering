"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleClick = () => {
    setAccordianOpen(!accordianOpen);
  };

  return (
    <div className="py-4 w-full   border-t-2  last:border-b-2  border-black/10 dark:border-white/10  ">
      <div className="flex justify-between items-center " onClick={handleClick}>
        <span className=" font-medium text-zinc-900 dark:text-neutral-100">
          {title}
        </span>
        <button>
          {accordianOpen ? (
            <IoIosArrowDown className=" rotate-180 transition-all duration-500" />
          ) : (
            <IoIosArrowDown className=" rotate-0 transition-all duration-500" />
          )}
        </button>
      </div>
      <div
        className={` overflow-hidden transition-all duration-700 ease-in-out text-sm ${
          accordianOpen ? "max-h-40 opacity-100" : " max-h-0 opacity-0"
        }`}
      >
        <div className=" mt-3 overflow-hidden text-zinc-500 dark:text-neutral-400  transition-all duration-300 ">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
