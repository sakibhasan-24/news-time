import React from "react";
import Header from "../Common/Header/Header";
import Navbar from "../Common/Navbar/Navbar";
import LeftSideNav from "../Common/LeftSideNav/LeftSideNav";
import RightSideNav from "../Common/RightSideNav/RightSideNav";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border">
          <h1>Coming......</h1>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}
