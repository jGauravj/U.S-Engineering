"use client";

import React, { useState } from "react";
import { PiSuitcase } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import jobsData from "./CareerJobData";

const CareerContent: React.FC = () => {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-8 ">
      {jobsData.map((job) => (
        <div key={job.id} className=" p-4 border rounded-lg relative ">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 flex-wrap mb-2">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="px-2 py-1 rounded-lg bg-blue-100">
                  <PiSuitcase className="w-7 h-7 font-medium text-zinc-950 " />
                </div>
                <h1 className="text-xl font-medium text-zinc-900 dark:text-neutral-100">
                  {job.title}
                </h1>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className=" bg-blue-100 text-zinc-950 text-sm px-3 py-1 font-medium rounded-lg ">
                  Fulltime
                </div>
                <div className="bg-blue-100 text-zinc-950 text-sm px-3 py-1 font-medium rounded-lg ">
                  On-Site
                </div>
                <div className="flex items-center gap-1 bg-blue-100 text-zinc-950 text-sm px-3 py-1 font-medium rounded-lg  ">
                  <span>
                    <IoLocationOutline />
                  </span>
                  Delhi
                </div>
              </div>
            </div>
            <div>
              <button className="bg-blue-500 px-4 py-2 rounded-lg text-sm text-neutral-100 font-medium">
                <a href="mailto:usengineeringcareer@gmail.com" target="_blank">
                  Apply Now
                </a>
              </button>
            </div>
          </div>

          <div
            className={` overflow-auto transition-all duration-700 ease-in-out ${
              expandedJobId === job.id
                ? " max-h-screen  opacity-100"
                : "max-h-0 opacity-0"
            }  `}
          >
            <div className="mt-3 overflow-hidden">
              <h1 className="text-xl font-medium text-zinc-900 dark:text-neutral-100">
                Job Description
              </h1>
              <ul className="mt-2 flex flex-col gap-2">
                {job.description.map((desc, index) => (
                  <li key={index} className="flex gap-2 ">
                    <span className="dark:text-neutral-300 text-zinc-600 flex-shrink-0 mt-1">
                      <IoMdArrowDropright />
                    </span>
                    <span className="dark:text-neutral-300 text-zinc-600">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <h1 className="text-xl font-medium text-zinc-900 dark:text-neutral-100">
                  Who We Are
                </h1>
                <p className="dark:text-neutral-300 text-zinc-600 mt-2">
                  We are a dynamic company committed to excellence and
                  innovation in healthcare solutions. Our mission is to enhance
                  the quality and efficiency of healthcare facilities through
                  cutting-edge technology and exceptional service.
                </p>
                <h1 className="text-xl font-medium text-zinc-900 dark:text-neutral-100 mt-5">
                  Wroking with Us
                </h1>
                <ul className="mt-2 flex flex-col gap-2 mb-4">
                  <li className="flex  ">
                    <span className=" flex-shrink-0 mt-1 mr-2">
                      <IoMdArrowDropright />
                    </span>
                    <div className="flex flex-col ">
                      <span className="font-medium text-zinc-900 whitespace-nowrap mr-1 dark:text-neutral-100">
                        Innovative Environment:
                      </span>
                      <span className="whitespace-normal dark:text-neutral-300 text-zinc-600">
                        Work on groundbreaking projects that make a real
                        difference.
                      </span>
                    </div>
                  </li>
                  <li className="flex  ">
                    <span className=" flex-shrink-0 mt-1 mr-2">
                      <IoMdArrowDropright />
                    </span>
                    <div className="flex flex-col ">
                      <span className="font-medium text-zinc-900 whitespace-nowrap mr-1 dark:text-neutral-100">
                        Professional Growth:
                      </span>
                      <span className="whitespace-normal dark:text-neutral-300 text-zinc-600">
                        Opportunities for continuous learning and career
                        advancement.
                      </span>
                    </div>
                  </li>
                  <li className="flex ">
                    <span className=" flex-shrink-0 mt-1 mr-2">
                      <IoMdArrowDropright />
                    </span>
                    <div className="flex flex-col ">
                      <span className="font-medium text-zinc-900 whitespace-nowrap mr-1 dark:text-neutral-100">
                        Collaborative Culture:
                      </span>
                      <span className="whitespace-normal dark:text-neutral-300 text-zinc-600">
                        Join a supportive and dynamic team of industry experts.
                      </span>
                    </div>
                  </li>
                  <li className="flex">
                    <span className=" flex-shrink-0 mt-1 mr-2">
                      <IoMdArrowDropright />
                    </span>
                    <div className="flex flex-col ">
                      <span className="font-medium text-zinc-900 whitespace-nowrap mr-1 dark:text-neutral-100">
                        Impactful Work:
                      </span>
                      <span className="whitespace-normal dark:text-neutral-300 text-zinc-600">
                        Contribute to meaningful projects that improve
                        healthcare settings.
                      </span>
                    </div>
                  </li>
                  <li className="flex">
                    <span className=" flex-shrink-0 mt-1 mr-2">
                      <IoMdArrowDropright />
                    </span>
                    <div className="flex flex-col ">
                      <span className="font-medium text-zinc-900 whitespace-nowrap mr-1 dark:text-neutral-100">
                        Comprehensive Benefits:
                      </span>
                      <span className="whitespace-normal dark:text-neutral-300 text-zinc-600">
                        Enjoy competitive salaries, health benefits, and other
                        perks.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className=" flex items-center dark:bg-zinc-950 bg-[#FFFEFB] text-sm gap-1 border rounded-md py-1 px-2 dark:border-white/10 border-black/10 absolute"
              onClick={() => handleClick(job.id)}
            >
              <MdKeyboardArrowDown
                className={`text-lg transition-all ease-in-out duration-500 ${
                  expandedJobId === job.id ? "rotate-180" : ""
                } `}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerContent;
