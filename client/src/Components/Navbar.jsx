import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <div
      className="bg-gray-900 p-3 mt-1 font-mono text-white  text-xl text-center 
     hover:bg-gray-700 
    "
    >
      <ul className="flex">
        <li
          className="border border-separate p-1 w-24 rounded-lg hover:bg-blue-600
             transition duration-300 delay-150 hover:delay-150"
        >
          <Link to={"/"}> Home </Link>
        </li>
        <li className="ml-4 border border-separate p-1  w-40 rounded-lg hover:bg-blue-600 transition duration-300 delay-150 hover:delay-150">
         <Link to={"/addemp"}> Add Employee </Link> {" "}
        </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
