import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

import { CiUser } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { MdOutlineAddHomeWork } from "react-icons/md";

const AccountNav = () => {

    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2]
    
    if(subpage === undefined){
        subpage = 'profile';
    }

    function linkClasses(type = null) {
        let classes = "inline-flex items-center gap-1 py-2 px-6 rounded-full";
        if (type === subpage) {
          classes += " bg-primary text-white ";
        } else {
          classes += " bg-gray-200";
        }
        return classes;
      }



  return (
    <div>
      <Navbar />
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8 flex-wrap">
        <Link className={linkClasses("profile")} to="/account">
          <CiUser />
          My Profile
        </Link>
        <Link className={linkClasses("booking")} to="/account/bookings">
          <FaListUl />
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to="/account/places">
          <MdOutlineAddHomeWork />
          My Accommodation
        </Link>
      </nav>
    </div>
  );
};

export default AccountNav;
