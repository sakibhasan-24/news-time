import React from "react";
import Marquee from "react-fast-marquee";

export default function Breaking() {
  return (
    <div className="flex gap-2 max-w-3xl mx-auto">
      <button className="bg-red-800 text-white px-4 py-3 rounded-md whitespace-nowrap">
        Breaking News
      </button>
      <Marquee pauseOnHover={true}>Bangladesh WIn after 20 years</Marquee>
    </div>
  );
}
