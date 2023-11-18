import React from "react";
import qZoneOne from "../../../assets/qZone1.png";
import qZoneTwo from "../../../assets/qZone2.png";
import qZoneThree from "../../../assets/qZone3.png";
import bg from "../../../assets/bg1.png";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function RightSideNav() {
  return (
    <div className="my-12">
      <div className="border px-2 mx-2">
        <div>
          <h1 className="text-center my-4 font-bold">Login</h1>
        </div>
        <div className="flex gap-2 items-center text-center mx p-4 rounded-t-xl mx-2 bg-blue-800">
          <FaGoogle className="text-2xl" />

          <button className="x text-white ">Login with Google</button>
        </div>
        <div className="my-6 flex gap-2 items-center text-center mx p-4 rounded-t-xl mx-2 bg-black">
          <FaGithub className="text-2xl" />

          <button className="x text-white ">Login with Github</button>
        </div>
      </div>
      <div className="my-8">
        <h1 className="font-bold text-lg text-center">Find Us On</h1>
        <section className="my-6 mx-4 border p-6 space-y-4">
          <div className="flex items-center  gap-2 mx-2 bg-blue-700 px-4 py-2 rounded-md">
            <FaFacebook />
            <p>Facebook</p>
          </div>
          <div className="flex items-center gap-2 mx-2 bg-green-800 px-4 py-2 rounded-md">
            <FaTwitter />
            <p>Twitter</p>
          </div>
          <div className="flex items-center gap-2 mx-2 bg-red-800 px-4 py-2 rounded-md">
            <FaInstagram />
            <p>Instragram</p>
          </div>
        </section>
      </div>
      {/* q zone */}
      <div className="mx-2 px-4">
        <h1 className="text-3xl font-bold my-6">Q Zone</h1>
        <section>
          <div>
            <img src={qZoneThree} alt="third" />
          </div>
          <div>
            <img src={qZoneOne} alt="third" />
          </div>
          <div>
            <img src={qZoneTwo} alt="third" />
          </div>
        </section>
      </div>
      {/* end of q zone */}
      <div>
        <section
          className="bg-blue-800 mx-6 px-2 rounded-lg"
          style={{ backgroundImage: { bg } }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-3xl font-bold">
                Create an Amazing Newspaper
              </h1>
              <p className="mb-5">
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
