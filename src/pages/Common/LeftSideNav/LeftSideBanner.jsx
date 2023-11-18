import React from "react";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/3.png";
import moment from "moment";
export default function LeftSideBanner() {
  return (
    <section className="my-6">
      <div>
        <div>
          <img src={img1} alt="img" />
        </div>
        <div className="">
          <h2 className="text-center my-6 font-bold text-2xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex items-center justify-between">
            <p>sports</p>
            <span>🗂️</span>
            <h1> {moment().format("MMMM D,")}</h1>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div>
          <img src={img2} alt="img" />
        </div>
        <div>
          <h2 className="text-center font-bold text-2xl my-6">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex items-center justify-between">
            <p className="font-extrabold">sports</p>
            <span>🗂️</span>
            <h1> {moment().format("MMMM D,")}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
