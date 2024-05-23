import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Offer = () => {
  type OfferSection = {
    name: string;
    number: string;
    para: string;
    button: string;
    icon: JSX.Element;
  };

  const offerItem: OfferSection[] = [
    {
      name: "Interior Design",
      number: "01",
      para: "Specialized interior design services crafted for hospitals and healthcare facilities, creating inviting and efficient spaces for healing and comfort.",
      button: "Read more",
      icon: <MdOutlineArrowRightAlt />,
    },
    {
      name: "Medical Gas Pipeline",
      number: "02",
      para: "Medical Gas Pipeline System (MGPS) is installed to provide a safe, convenient and cost-effective system for provision of medical gases to the clinical and nursing staff at the point-of-use for patients. ",
      button: "Read more",
      icon: <MdOutlineArrowRightAlt />,
    },
    {
      name: "Modular Operation Theatre",
      number: "03",
      para: "Modular operation theaters are operation theaters that are built inside a hospital with metal and glass ceilings and walls to provide the patient with the optimum position for the operation. ",
      button: "Read more",
      icon: <MdOutlineArrowRightAlt />,
    },
    {
      name: "PSA Oxygen Plant",
      number: "04",
      para: "Our Pressure Swing Adsorption (PSA) Oxygen Generation Plant ensures a reliable and continuous supply of medical-grade oxygen, vital for patient care in hospitals.",
      button: "Read more",
      icon: <MdOutlineArrowRightAlt />,
    },
    {
      name: "Nurse Call System",
      number: "05",
      para: "Our Nurse Call System ensures efficient communication between patients and staff, enabling timely assistance and enhancing the overall quality of care",
      button: "Read more",
      icon: <MdOutlineArrowRightAlt />,
    },
    {
      name: "Modular ICU & ICCU",
      number: "06",
      para: " Our Modular ICU & ICCU units provide advanced care environments, promoting healing and comfort for patients in critical conditions. ",
      button: "Read more",
      icon: <MdOutlineArrowRightAlt />,
    },
    
  ];

  return (
    <div className="flex flex-col mt-[7rem] lg:mt-[16rem] gap-16 sm:gap-20 ">
      <div className="text-center">
        <h1 className="lg:text-6xl md:text-5xl text-5xl sm:4xl dark:text-neutral-100 text-zinc-900">What We Offer</h1>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  w-full">
        {offerItem.map((data, index) => (
          <div
            key={index}
            className="lg:border-r flex flex-col p-5  border rounded-xl  sm:rounded-none sm:border-b sm:border-0 sm:mb-0 mb-5 sm:odd:border-r custom-grid relative"
          >
            <h2 className=" text-2xl text-zinc-900 dark:text-neutral-100 ">
              {data.name}
            </h2>
            <h3 className=" text-9xl text-zinc-300 dark:text-zinc-700 my-5">
              {data.number}
            </h3>
            <p className="text-base text-zinc-600 dark:text-neutral-300 flex-grow">
              {data.para}
            </p>
            <div className="group mt-auto ">
              <button className="flex items-center gap-2 mt-5 text-zinc-600 dark:text-neutral-300 group-hover:text-zinc-900 dark:group-hover:text-[#FAFAFA]">
                {data.button}
                <span className=" group-hover:translate-x-1 transition-all group-hover:text-base ">
                  {data.icon}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
