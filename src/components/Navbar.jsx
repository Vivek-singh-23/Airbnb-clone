import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <header className="flex flex-col md:flex-row items-center justify-between p-4 md:px-8 lg:px-12">
        <div className="flex justify-between w-full md:w-auto mb-4 md:mb-0">
          <Link to="/" className="flex items-center gap-2">
            <img src="../images/airbnnb.png" alt="Airbnb logo" className="h-8 w-8" />
            <span className="font-bold text-xl">airbnb</span>
          </Link>
          <button className="md:hidden">
            <HiMenu className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 w-full md:w-auto mb-4 md:mb-0">
          <div className="flex justify-between w-full md:w-auto items-center">
            <div className="flex items-center gap-2">
              <div>Anywhere</div>
              <div className="border-l border-gray-300 h-full mx-2"></div>
              <div>Any week</div>
              <div className="border-l border-gray-300 h-full mx-2"></div>
              <div>Add guests</div>
            </div>
            <button className="ml-2 md:ml-4">
              <FaSearch className="bg-primary text-white h-6 w-6 p-1 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4">
          <HiMenu className="h-6 w-6 hidden md:block" />
          <Link to={user ? "/account" : "/login"}>
            <MdOutlineAccountCircle className="h-6 w-6" />
          </Link>
          {!!user && <div className="hidden sm:block">{user.name}</div>}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
