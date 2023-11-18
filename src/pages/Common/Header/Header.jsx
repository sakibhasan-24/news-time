import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
export default function Header() {
  return (
    <div className="max-w-6xl mx-auto text-center my-10 space-y-2">
      <img src={logo} alt="logo" className="max-w-3xl mx-auto" />
      <p className="text-2xl text-white font-bold">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xs font-bold text-white">
        {moment().format("MMMM D, YYYY, h:mm:ss a")}
      </p>
    </div>
  );
}
