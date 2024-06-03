import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" border-t  pt-10 pb-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-36 md:mx-10 mx-5 md:place-items-center">
        <div className="flex w-full justify-start gap-5 flex-col items-start ">
          <div className="flex items-center gap-2">
            <div>
              <Image src={logo} alt="logo" width={40} height={40} />
            </div>
            <h1 className="text-2xl font-medium dark:text-neutral-100 text-zinc-900">
              U.S Engineering
            </h1>
          </div>
          <div className="flex md:w-1/2 ">
            <p className="text-base text-zinc-600 dark:text-neutral-400">
              Innovative designs and quality equipment for modern hospitals.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:items-end mt-5 sm:mt-0 w-full">
          <button className="flex w-full sm:w-auto justify-center dark:text-neutral-300 text-zinc-900 mr-[4.5rem] sm:justify-start items-center gap-2 px-8 py-3 border rounded-lg border-black/10 dark:border-white/10">
            <span>
              <FaRegEnvelope />
            </span>
            hello@landingfolio.com
          </button>
          <div className="flex">
            <ul className="flex gap-10 text-base w-full justify-between sm:w-auto flex-wrap">
              <li className=" cursor-pointer hover:-translate-y-1 transition-all text-zinc-400 dark:text-neutral-500 dark:hover:text-white hover:text-black font-normal sm:text-base text-sm">
                Products
              </li>
              <li className=" cursor-pointer hover:-translate-y-1 transition-all text-zinc-400 dark:text-neutral-500 dark:hover:text-white hover:text-black sm:text-base text-sm">
                About
              </li>
              <li className=" cursor-pointer hover:-translate-y-1 transition-all text-zinc-400 dark:text-neutral-500 dark:hover:text-white hover:text-black sm:text-base text-sm">
                Contact
              </li>
              <li className=" cursor-pointer hover:-translate-y-1 transition-all text-zinc-400 dark:text-neutral-500 dark:hover:text-white hover:text-black sm:text-base text-sm">
                Career
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:mx-36 md:mx-10 mx-5 felx-col sm:flex-row sm:flex sm:justify-between items-center mt-5">
        <p className="text-xs dark:text-neutral-400 text-zinc-900 text-center">
          <Link href="https://gauravjangir.vercel.app/">
            Designed by Gaurav Jangir
          </Link>
        </p>
        <p className="text-xs dark:text-neutral-400 text-zinc-900  text-center">
          © 2024 US Engineering. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="flex items-center flex-col">
          <p>Designed by</p>
          <div className="flex items-center gap-1">
            <p className="flex items-center gap-2">
              <Link href="https://gauravjangir.vercel.app/">Gaurav Jangir</Link>
            </p>
            <span>
              <GoLinkExternal />
            </span>
          </div>
        </div> */
}

{
  /* <ul className="flex items-center gap-4 text-base md:text-lg">
<li>Products</li>
<li>About</li>
<li>Contact</li>
<li>Career</li>
</ul> */
}
