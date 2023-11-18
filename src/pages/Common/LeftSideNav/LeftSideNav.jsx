import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftSideNav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categoriesdata.json")
      .then((res) => res.json())

      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div className="px-4">
      <h1 className="text-4xl text-center font-bold my-4 bg-gray-600 px-2 rounded-md py-2 whitespace-nowrap">
        all categories
      </h1>
      {categories.map((category) => (
        <NavLink
          className="block ml-2 mb-2 text-lg font-bold hover:px-6 py-2 hover:bg-blue-600 hover:rounded-lg hover:shadow-xl text-white transition duration-300"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}
