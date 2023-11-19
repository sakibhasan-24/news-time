import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Register() {
  const handleRegistration = (e) => {
    e.preventDefault();
    const newForm = new FormData(e.currentTarget);
    const email = newForm.get("email");
    const password = newForm.get("password");
    const name = newForm.get("name");
    const photoUrl = newForm.get("photoUrl");
    console.log(email, password, name, photoUrl);
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center font-bold  text-4xl tracking-wider my-6">
          Please{" "}
          <span className="text-orange-700 font-extrabold ">Register</span>
        </h1>
        <form onSubmit={handleRegistration}>
          <div className="max-w-3xl mx-auto flex flex-col space-y-6 justify-center items-center">
            <input
              className="w-3/4 px-4 py-4 rounded-md active:border border-sky-800"
              type="text"
              name="name"
              id="name"
              placeholder="name"
            />
            <input
              className="w-3/4 px-4 py-4 rounded-md active:border border-sky-800"
              type="text"
              name="photoUrl"
              id="photoUrl"
              placeholder="photoUrl"
            />
            <input
              className="w-3/4 px-4 py-4 rounded-md active:border border-sky-800"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="w-3/4  px-4 py-4 rounded-md active:border border-sky-800"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <input
              className="w-1/2 text-2xl font-extrabold bg-blue-950 text-white px-6 py-4 rounded-xl cursor-pointer"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <p className="text-center font-bold my-6 ">
          Have any account?{" "}
          <Link to="/register">
            <span className="text-blue-700 font-extrabold">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
