import React from "react";
import mgps from "../../../public/mgps.jpeg";
import icu from "../../../public/icu-ward-work.jpg";
import modularOT from "../../../public/modular-ot.jpg";
import psa from "../../../public/psa-oxigen.jpeg";
import ncs from "../../../public/Nurse-Call-System.png";
import interior from "../../../public/empty-hallway-background.jpg";
import furniture from "../../../public/hospital-room-interior.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image, { StaticImageData } from "next/image";

type Product = {
  image: StaticImageData;
  name: string;
  description: string;
  button: string;
  icon: JSX.Element;
};

const products: Product[] = [
  {
    image: mgps,
    name: "Medical Gas Pipeline System",
    description:
      "The Medical Gas Pipeline System is a key element of every hospital. The MGPS provides vital medical gases for patient ventilation and various clinical applications.",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: icu,
    name: "I.C.U, C.C.U, Ward Work",
    description:
      "An intensive care unit (ICU) and a critical care unit (CCU) are both hospital wards that provide intensive care to patients with severe or life-threatening illnesses and injuries.",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: modularOT,
    name: "Modualr Operation Theater",
    description:
      "Modular Operation theatre is a modern concept of operation theatre where all modern technology introduced to provide best possible surgical care to the patient.",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: psa,
    name: "PSA Oxygen Generation Plant",
    description:
      "PSA oxygen generation plant is a technology that uses pressurized vessels and zeolite to separate oxygen from other gases in compressed air to produce medical-grade oxygen.",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: ncs,
    name: "Nurse Call System",
    description:
      "A nurse call system allows patients to easily communicate with nurses, ensuring that they receive timely assistance when they need it most.",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: interior,
    name: "Interior Work",
    description:
      "Innovative hospital interior design solutions that enhance functionality, safety, and aesthetics, creating comfortable and efficient spaces for patients and staff.",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: furniture,
    name: "Hospital Furniture",
    description:
      "High-quality, ergonomic hospital furniture designed for durability and comfort, enhancing patient care and creating efficient workspaces for healthcare professionals.",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
];

const page = () => {
  return (
    <div className="min-h-screen  w-full dark:bg-zinc-950 bg-[#FFFEFB] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-[#FFFEFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="lg:mx-36 md:mx-10 mx-5 w-full mt-20 flex flex-col z-30 ">
        <h1 className="text-5xl text-center">Products</h1>
        <div className="grid gap-7 md:grid-cols-3  place-items-center sm:mt-10 mt-8 mb-6 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="border dark:border-white/10 border-black/10 rounded-xl p-6 h-full bg-[#FFFEFB] dark:bg-zinc-950 flex flex-col shadow-md"
            >
              <div className="w-full h-[12rem] lg:h-[13rem] md:h-[11rem] rounded-xl object-contain ">
                <Image
                  src={product.image}
                  alt="mgps"
                  className="rounded-xl w-full h-full"
                />
              </div>
              <div className="flex flex-col mt-6 flex-grow gap-3 ">
                <h1 className="text-zinc-900 dark:text-neutral-100 text-lg">
                  {product.name}
                </h1>
                <p className="text-sm text-zinc-600 dark:text-neutral-300">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto group">
                <button className="flex items-center text-zinc-600 dark:text-neutral-300 gap-2 mt-5 group-hover:text-zinc-900 dark:group-hover:text-[#FAFAFA]">
                  {product.button}
                  <span className="text-lg group-hover:translate-x-1 group-hover:text-xl transition-all">
                    {product.icon}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
