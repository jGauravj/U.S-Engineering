import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-slate-300  py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-36 md:mx-10 mx-5 md:place-items-center">
        <div className="flex w-full justify-start gap-5 flex-col items-start ">
          <div className="flex items-center gap-2">
            <div>
              <Image src={logo} alt="logo" width={40} height={40} />
            </div>
            <h1 className="text-2xl font-medium">U.S Engineering</h1>
          </div>
          <div className="flex md:w-1/2 ">
            <p className="text-base">
              Innovative designs and quality equipment for modern hospitals.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-end w-full">
          <button className="flex mr-[4.5rem] justify-start items-center gap-2 px-8 py-3 border rounded-lg border-black/10">
            <span>
              <FaRegEnvelope />
            </span>
            hello@landingfolio.com
          </button>
          <div className="flex">
            <ul className="flex gap-10 text-base ">
              <li className=" cursor-pointer hover:-translate-y-1 transition-all">
                Products
              </li>
              <li className=" cursor-pointer hover:-translate-y-1 transition-all">
                About
              </li>
              <li className=" cursor-pointer hover:-translate-y-1 transition-all">
                Contact
              </li>
              <li className=" cursor-pointer hover:-translate-y-1 transition-all">
                Career
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:mx-36 md:mx-10 mx-5 flex justify-between items-center mt-5">
        <p className="text-xs">© 2024 US Engineering. All Rights Reserved.</p>
        <p className="text-xs">
          <Link href="https://gauravjangir.vercel.app/">
            Designed by Gaurav Jangir
          </Link>
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
