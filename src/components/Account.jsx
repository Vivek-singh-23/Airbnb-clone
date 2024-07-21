import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import { CiUser } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { MdOutlineAddHomeWork } from "react-icons/md";

const Account = () => {
  const { user, setUser, ready } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to="/login" />;
  }

  function linkClasses(type = null) {
    let classes = "inline-flex items-center gap-1 py-2 px-6 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white ";
    }else{
        classes += ' bg-gray-200'
    }
    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <Navbar />
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkClasses("profile")} to="/account">
          <CiUser />
          My Profile
        </Link>
        <Link className={linkClasses("booking")} to="/account/booking">
          <FaListUl />
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to="/account/places">
          <MdOutlineAddHomeWork />
          My Accommodation
        </Link>
      </nav>

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}

      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default Account;
