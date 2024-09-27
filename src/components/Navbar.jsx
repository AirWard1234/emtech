import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className=" flex lg:w-[80%] h-20 sm:w-[100%] md:mt-0 lg:mt-7 lg:rounded-2xl shadow-md border-black border-[2px] items-center sm:justify-between md:justify-evenly">
      {/* logo */}
      <div className="flex md:w-[10%] sm:w-[20%] h-[90%] sm:mx-5 items-center justify-evenly hover:cursor-pointer ">
        <FontAwesomeIcon
          icon={faMicrochip}
          className="md:text-3xl border-2 p-1 border-black rounded-lg"
        />
        <h1 className="text-2xl">EMTECH</h1>
      </div>
      {/* selection */}
      <div className="w-[30%] md:flex justify-evenly sm:hidden">
        <a className="hover:cursor-pointer hover:text-blue-700 transition">
          Home
        </a>
        <a className="hover:cursor-pointer hover:text-blue-700 transition">
          Projects
        </a>
        <a className="hover:cursor-pointer hover:text-blue-700 transition">
          Team
        </a>
      </div>

      <button
        type="button"
        className="sm:hidden md:block bg-gradient-to-r from-blue-200 to-blue-300 px-4 py-2 rounded-2xl shadow-md hover:scale-105"
      >
        Learn More
      </button>

      <div className="sm:flex md:hidden justify-evenly w-[50%]">
        <button
          type="button"
          className="sm:block md:hidden bg-gradient-to-r from-blue-200 to-blue-300 px-3 py-2 rounded-2xl shadow-md hover:scale-105"
        >
          Learn More
        </button>
        <FontAwesomeIcon icon={faBars} className="text-2xl md:hidden mt-1" />
      </div>
    </div>
  );
};

export default Navbar;
