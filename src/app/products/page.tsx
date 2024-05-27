import React from "react";
import mgps from "../../../public/mgps.jpeg";
import icu from "../../../public/icu-ward-work.jpg";
import modularOT from "../../../public/modular-ot.jpg";
import psa from "../../../public/psa-oxigen.jpeg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";

const productsItem = () => {
  type Product = {
    image: string;
    name: string;
    description: string;
    button: string;
    icon: JSX.Element;
  };
};

const products: Product[] = [
  {
    image: mgps,
    name: "MGPS Products",
    description:
      "The Medical Gas Pipeline System is a key element of every hospital. The MGPS provides vital medical gases for patient ventilation and various clinical applications",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: icu,
    name: "MGPS Products",
    description:
      "The Medical Gas Pipeline System is a key element of every hospital. The MGPS provides vital medical gases for patient ventilation and various clinical applications",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: modularOT,
    name: "MGPS Products",
    description:
      "The Medical Gas Pipeline System is a key element of every hospital. The MGPS provides vital medical gases for patient ventilation and various clinical applications",
    button: "See all",
    icon: <MdOutlineArrowRightAlt />,
  },
  {
    image: psa,
    name: "MGPS Products",
    description:
      "The Medical Gas Pipeline System is a key element of every hospital. The MGPS provides vital medical gases for patient ventilation and various clinical applications",
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
        <div className="grid gap-7 md:grid-cols-3  place-items-center mt-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="border dark:border-white/10 border-black/10 rounded-xl p-6 h-full bg-zinc-950"
            >
              <div className="w-full lg:h-[13rem] md:h-[11rem] object-fill ">
                <Image
                  src={product.image}
                  alt="mgps"
                  className="rounded-xl w-full h-full"
                />
              </div>
              <div className="flex flex-col mt-6 flex-grow gap-3 text-zinc-900 dark:text-neutral-100">
                <h1 className=" text-lg">{product.name}</h1>
                <p className="text-sm text-zinc-600 dark:text-neutral-300">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto group">
                <button className="flex items-center text-zinc-600 dark:text-neutral-300 gap-2 mt-5 group-hover:text-white">
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
