import React, { useContext } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../../assets/user.png";
import { AuthProvider } from "../../../contexts/AuthContext";
export default function Navbar() {
  const { user, userLogOut } = useContext(AuthProvider);

  const handleLogOut = () => {
    userLogOut().then().catch();
  };
  return (
    <nav className="md:max-w-4xl my-6 mx-auto flex flex-col gap-6 md:flex-row items-center justify-between">
      <div className="font-bold space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/carrier">Carrier</Link>
      </div>
      <div className="w-1/4 flex  justify-center items-center ">
        <img
          className="w-1/4 rounded-full mr-6 "
          src={defaultImage}
          alt="user-image"
        />
        {!user ? (
          <Link to="/login">
            <button className=" rounded-md bg-blue-600 font-bold px-8 py-2">
              LogIn
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              onClick={handleLogOut}
              className=" rounded-md bg-blue-600 font-bold px-8 py-2"
            >
              logOut
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
