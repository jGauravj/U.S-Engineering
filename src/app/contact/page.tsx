"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/ui/loader";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDIsabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (firstName && email) {
      setIsButtonDIsabled(false);
    } else {
      setIsButtonDIsabled(true);
    }
  }, [firstName, email]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          email,
          message,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);

        setFirstName("");
        setEmail("");
        setMessage("");

        toast({
          title: "Yeah!",
          description: "Your message has been send",
          variant: "success",
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Uh oh! Something went wrong.",
          description: `Error: ${errorData.message}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log("Error submiting form", error);
      if (error instanceof Error) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: `Error: ${error.message}`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "An Unknown error occurred.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen z-30 mb-16">
      <div className="h-[30rem] -z-10  -top-4 w-full dark:bg-zinc-950 bg-[#FFFEFB] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute">
        <div className="h-10 xl:h-32 bg-gradient-to-t from-[#FFFEFB] dark:bg-gradient-to-t dark:from-zinc-950 absolute -bottom-5 left-0 xl:bottom-0 w-full z-10"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-[#FFFEFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="lg:mx-36 z-30 md:mx-10 mx-5 flex flex-col gap-10 justify-center mt-28">
        <div className=" flex flex-col items-center gap-3">
          <h1 className="bg-zinc-200 dark:bg-zinc-600 text-xs py-0.5 px-2 rounded-md">
            Contact
          </h1>
          <h1 className="text-3xl text-center font-medium dark:text-neutral-100 text-zinc-900">
            Contact
          </h1>
        </div>
        {isLoading && <Loader />}
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5  ">
          <div className="border rounded-lg border-black/15 dark:border-white/15 p-5 flex flex-col gap-6 bg-[#FFFEFB] dark:bg-zinc-950">
            <h1 className="text-3xl text-zinc-950 dark:text-neutral-100">
              Contact Us
            </h1>
            <div className="flex flex-col gap-1">
              <p className="text-zinc-400 dark:text-neutral-400 text-xs font-medium tracking-wider ">
                ADDRESS
              </p>
              <p className="text-zinc-900 dark:text-neutral-100 sm:w-1/2">
                124/Block 6D Rangpuri Mahipalpur New Delhi -110037
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-zinc-400 dark:text-neutral-400 text-xs font-medium tracking-wider">
                EMAIL
              </p>
              <p className="text-zinc-900 dark:text-neutral-100">
                usengineeringcareer@gmail.com
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-zinc-400 dark:text-neutral-400 text-xs font-medium tracking-wider">
                PHONE
              </p>
              <p className="text-zinc-900 dark:text-neutral-100">9013013014</p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className=" flex w-full flex-col gap-3 border p-6 rounded-lg dark:border-white/15 border-black/15 bg-[#FFFEFB] dark:bg-zinc-950"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-950 dark:text-neutral-100">
                Name
              </label>
              <input
                type="text"
                id="fname"
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="py-2.5 px-3 dark:border-white/15 border-black/15 border rounded-md outline-none outline-2 dark:focus:outline-[#E2E2E2] focus:outline-zinc-900 text-sm bg-inherit  "
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm  text-zinc-950 dark:text-neutral-100 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-2.5 px-3 dark:border-white/15 border-black/15 border rounded-md outline-none outline-2 dark:focus:outline-[#E2E2E2] focus:outline-zinc-900 text-sm bg-inherit "
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm  text-zinc-950 dark:text-neutral-100 ">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="py-2.5 px-3 dark:border-white/15 border-black/15 border rounded-md outline-none outline-2 dark:focus:outline-[#E2E2E2] focus:outline-zinc-900 text-sm bg-inherit "
              />
            </div>

            <button
              type="submit"
              className="dark:bg-[#E2E2E2] bg-[#2f2f31]  text-[#E2E2E2] dark:text-zinc-950 text-sm font-medium rounded-md py-2.5 disabled:opacity-75 disabled:cursor-not-allowed sm:w-32 dark:hover:bg-[#cecece] hover:bg-[#414144]"
              disabled={isButtonDisabled || isLoading}
            >
              Submit
            </button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.934064798824!2d77.1206319687527!3d28.541701500000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c3f9e914acf%3A0x7bf893c42975cb93!2sOnline%20Ads%20Campaign!5e0!3m2!1sen!2sin!4v1717783387077!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[350px] rounded-md mb-7 border border-black/10 dark:border-white/10"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
