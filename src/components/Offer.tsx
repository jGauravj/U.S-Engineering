import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Offer = () => {
  type OfferSection = {
    name: string;
    number: string;
    para: string;
    button: string;
    icon: string;
  };

  const offerItem: OfferSection = [
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
      name: "Modular ICU & ICCU",
      number: "04",
      para: "Crafted with precision and expertise, our Modular ICU & ICCU units provide advanced care environments, promoting healing and comfort for patients in critical conditions. ",
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
      name: "PSA Oxygen Generation Plant",
      number: "06",
      para: "Our Pressure Swing Adsorption (PSA) Oxygen Generation Plant ensures a reliable and continuous supply of medical-grade oxygen, vital for patient care in hospitals.",
      button: "Read more",
      icon: <MdOutlineArrowRightAlt />,
    },
  ];

  return (
    <div className="grid grid-cols-3 w-full mt-40">
      <div className="">
        <h2 className=" text-2xl">Interior Design</h2>
        <h3 className=" text-9xl">01</h3>
        <p>
          Our Pressure Swing Adsorption (PSA) Oxygen Generation Plant ensures a
          reliable and continuous supply of medical-grade oxygen, vital for
          patient care in hospitals.
        </p>
        <button className="flex items-center gap-2">
          Read more
          <span>
            <MdOutlineArrowRightAlt />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Offer;
