import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Navbar = () => {

  const {user} =useContext(UserContext);
  return (
    <div>
      <header className="flex items-center gap-2 p-4 justify-between">
        <Link to={'/'} className="flex gap-2">
          <img src="../images/airbnnb.png" alt="" className="h-8 w-8" />
          <span className="font-bold text-xl">airbnb</span>
        </Link>

        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
          <div>Anywhere</div>
          <div className=" border-l border-gray-300"></div>
          <div>Any week</div>
          <div className=" border-l border-gray-300"></div>
          <div>Add guests</div>
          <button>
            <FaSearch className="bg-primary text-white h-6 w-6 p-1 rounded-full" />
          </button>
        </div>

        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4">
          <HiMenu className="h-6 w-6" />
          <Link to={user?'/account':'/login'}><MdOutlineAccountCircle className="h-6 w-6" /></Link>
          {!!user &&  (<div>{user.name}</div>)    }
        </div>
        
      </header>
    </div>
  );
};

export default Navbar;
