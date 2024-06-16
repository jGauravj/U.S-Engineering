import React from "react";
import Image from "next/image";
import officeImg from "../../assets/office-chair2.jpg";
import FAQs from "@/components/FAQs";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col mb-16">
      <div className="h-[30rem]  -top-5 w-full dark:bg-zinc-950 bg-[#FFFEFB] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute">
        <div className="h-10 xl:h-32 bg-gradient-to-t from-[#FFFEFB] dark:bg-gradient-to-t dark:from-zinc-950 absolute -bottom-5 left-0 xl:bottom-0 w-full z-10"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-[#FFFEFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="mt-28 z-20">
        <div className="lg:mx-36 md:mx-10 mx-5 flex flex-col items-center gap-3">
          <h1 className="bg-zinc-200 dark:bg-zinc-600 text-xs py-0.5 px-2 rounded-md">
            About
          </h1>
          <h1 className="text-3xl text-center font-medium dark:text-neutral-100 text-zinc-900">
            About Us
          </h1>
          <p className="text-center sm:w-3/4 dark:text-neutral-300 text-zinc-600">
            Since our establishment in 2010, we have been dedicated to
            transforming healthcare facilities with innovative design and
            exceptional service. Our commitment to excellence and quality has
            made us a trusted partner in the healthcare industry, continually
            striving to enhance the functionality and aesthetics of medical
            environments.
          </p>

          <div className="md:h-[35rem]  w-full sm:mt-16 mt-10">
            <Image
              src={officeImg}
              alt="Office-Chair-Img"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="sm:w-3/4 flex flex-col gap-3 mt-6 ">
            <h1 className="text-2xl dark:text-neutral-100 text-zinc-900 font-medium">
              Our Mission
            </h1>
            <p className=" dark:text-neutral-300 text-zinc-600">
              Our mission is to transform healthcare environments through
              innovative solutions and a steadfast commitment to quality. We are
              dedicated to creating functional and comfortable spaces that not
              only enhance patient care but also support the needs of healthcare
              professionals. By focusing on thoughtful design and high-quality
              materials, we aim to improve the overall healthcare experience and
              ensure that our solutions meet the highest standards.
            </p>
            <p className="dark:text-neutral-300 text-zinc-600">
              We believe in continuous improvement and adaptation to the
              evolving needs of the healthcare industry. Our commitment to
              excellence drives us to provide reliable and efficient services
              that contribute to the safety and well-being of patients and staff
              alike. Partnering with us means relying on our expertise and
              dedication to delivering exceptional results, ensuring that
              healthcare facilities can operate at their best.
            </p>
          </div>

          <div className="sm:w-3/4 flex flex-col mt-12 items-center gap-3">
            <h1 className="bg-zinc-200 dark:bg-zinc-600 text-xs py-0.5 px-2 rounded-md">
              FAQs
            </h1>
            <h1 className="text-2xl dark:text-neutral-100 text-zinc-900 font-medium">
              Frequently Asked Questions
            </h1>
            <p className="text-center dark:text-neutral-300 text-zinc-600">
              Discover comprehensive answers to common inquiries about our
              specialized services and solutions for healthcare environment
              transformations.
            </p>

            <div className="w-full">
              <FAQs />
            </div>

            <div className="flex flex-col items-center gap-3 mt-5">
              <h1 className="text-xl font-medium dark:text-neutral-100 text-zinc-900">
                Still have a question?
              </h1>
              <p className=" sm:w-3/5 text-center dark:text-neutral-300 text-zinc-600">
              Reach out to us for more information or specific queries about our services and solutions for healthcare environments.
              </p>
              <button className="py-2 mt-2 sm:text-base text-sm font-medium px-4 border rounded-lg dark:border-white/10 border-black/10 dark:text-neutral-100 text-zinc-900 hover:bg-[#f8f7f4] dark:hover:bg-zinc-900 dark:hover:border-white/30 hover:border-black/30 transition-all ease-in-out">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
