import React from "react";

const Loader = () => {
  return (
    <div className=" left-0 right-0 w-full h-full flex justify-center items-center absolute mt-10 backdrop-blur-sm z-50">

    <div className="newtons-cradle">
      <div className="newtons-cradle__dot after:dark:bg-[#E2E2E2] after:bg-zinc-950 "></div>
      <div className="newtons-cradle__dot after:dark:bg-[#E2E2E2] after:bg-zinc-950 "></div>
      <div className="newtons-cradle__dot after:dark:bg-[#E2E2E2] after:bg-zinc-950 "></div>
      <div className="newtons-cradle__dot after:dark:bg-[#E2E2E2] after:bg-zinc-950 "></div>
    </div>
    </div>
  );
};

export default Loader;
