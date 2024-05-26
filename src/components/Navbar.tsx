"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/usengi-logo.png";
import { ModeToggle } from "./ToggleButton";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItem: NavItem[] = [
  {
    label: "Products",
    link: "/products",
    children: [
      {
        label: "Todo list",
        link: "#",
      },
      {
        label: "Gas piple",
        link: "#",
      },
      {
        label: "OPD",
        link: "#",
      },
      {
        label: "Much more",
        link: "#",
      },
    ],
  },
  {
    label: "Service",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
      },
      {
        label: "Gas piple",
        link: "#",
      },
      {
        label: "OPD",
        link: "#",
      },
      {
        label: "Much more",
        link: "#",
      },
    ],
  },
  {
    label: "About",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
  {
    label: "Career",
    link: "#",
  },
];

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [animationParent] = useAutoAnimate();
  const toggleSideMenu = () => {
    setSideMenu(!isSideMenuOpen);
  };

  return (
    <nav className=" z-50  fixed mx-auto flex justify-center top-0 left-0 right-0 items-center border-b border-black/5 backdrop-blur-md md:py-2 py-4 bg-white/10 dark:bg-zinc-950/10 dark:border-white/5">
      <div
        ref={animationParent}
        className="w-full lg:mx-36 md:mx-10 mx-5 flex justify-between items-center "
      >
        <div>
          <h1 className=" text-base font-medium text-zinc-950 dark:text-[#FAFAFA]">U.S. Engineering</h1>
        </div>

        {/* movile */}
        {isSideMenuOpen && <MobileNav toggleSideMenu={toggleSideMenu} />}

        <div className="md:flex gap-10 items-center text-sm hidden md ">
          {navItem.map((data, index) => (
            <ul key={index} className="group relative transition-all duration-300  py-3">
              <li className="flex cursor-pointer items-center group-hover:text-zinc-950 dark:group-hover:text-[#FAFAFA] gap-2 dark:text-[#FAFAFA99] text-[#09090B99] font-normal">
                <Link href={data.link ?? "#"}>
                  <span className=" ">{data.label}</span>
                </Link>

                {data.children && (
                  <FaChevronDown className=" text-xs rotate-180 transition-all duration-300  group-hover:rotate-0" />
                )}
              </li>

              {data.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-2xl border border-black/10 bg-white dark:bg-zinc-950 dark:border-white/10 py-3 shadow-md transition-all duration-300 group-hover:flex">
                  {data.children.map((ch, index) => (
                    <p
                      key={index}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-[#09090B99] dark:text-[#FAFAFA99] dark:hover:text-[#FAFAFA] hover:text-zinc-950"
                    >
                      <Link href={ch.link ?? "#"}>
                        <span className=" whitespace-nowrap pl-3">
                          {ch.label}
                        </span>
                      </Link>
                    </p>
                  ))}
                </div>
              )}
            </ul>
          ))}

          <ModeToggle />
        </div>
        <HiOutlineMenuAlt3
          onClick={toggleSideMenu}
          className=" cursor-pointer text-2xl md:hidden dark:text-[#FAFAFA] text-zinc-950"
        />
      </div>
    </nav>
  );
};

export default Navbar;

function MobileNav({ toggleSideMenu }: { toggleSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/80 md:hidden">
      <div className=" h-full w-[65%] bg-[#FFFEFB] dark:bg-zinc-950 px-4 py-4">
        <section className="flex justify-end items-center gap-5">
          <ModeToggle />
          <MdClose
            className=" cursor-pointer text-2xl"
            onClick={toggleSideMenu}
          />
        </section>
        <div className="flex flex-col text-base ">
          {navItem.map((data, index) => (
            <SingleNavItem
              key={index}
              label={data.label}
              link={data.link}
              iconImage={data.iconImage}
            >
              {data.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(data: NavItem) {
  const [isItemOpen, setItem] = useState(false);
  const [animationParent] = useAutoAnimate();
  const toggleItem = () => {
    return setItem(!isItemOpen);
  };

  return (
    <ul className="relative transition-all py-4" ref={animationParent}>
      <li
        className="flex cursor-pointer items-center group-hover:text-zinc-950 gap-2 dark:text-[#FAFAFA99] text-[#09090B99] dark:hover:text-[#FAFAFA] pl-4"
        onClick={toggleItem}
      >
        <Link href={data.link ?? "#"}>
          <span className=" ">{data.label}</span>
        </Link>

        {data.children && (
          <FaChevronDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </li>

      {isItemOpen && data.children && (
        <div className=" w-auto flex-col gap-1 rounded-2xl bg-[#FFFEFB] dark:bg-zinc-950 py-3 transition-all ">
          {data.children.map((ch, index) => (
            <p
              key={index}
              className="flex cursor-pointer items-center py-2 pl-6 pr-8 text-[#09090B99] dark:text-[#FAFAFA99] hover:text-zinc-950 dark:hover:text-[#FAFAFA]"
            >
              <Link href={ch.link ?? "#"}>
                <span className=" whitespace-nowrap pl-3">{ch.label}</span>
              </Link>
            </p>
          ))}
        </div>
      )}
    </ul>
  );
}
