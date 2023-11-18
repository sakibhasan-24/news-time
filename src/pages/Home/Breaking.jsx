import React from "react";
import Marquee from "react-fast-marquee";

export default function Breaking() {
  return (
    <div className=" md:flex flex-col  md:flex-row w-full md:gap-2 md:max-w-3xl md:mx-auto">
      <button className="bg-red-800 my-6 md:my-1 text-white px-4 py-3 rounded-md whitespace-nowrap">
        Breaking News
      </button>
      <Marquee className="bg-blue-950 text-white font-bold" pauseOnHover={true}>
        Bangladesh WIn after 20 years
      </Marquee>
    </div>
  );
}
