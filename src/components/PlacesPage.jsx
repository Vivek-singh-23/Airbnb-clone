import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import AccountNav from "./AccountNav";

const PlacesPage = () => {


  return (
    <div>
      <AccountNav />

      <div className="text-center">
        <Link
          className="inline-flex gap-2 items-center bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}
        >
          <FaPlus />
          Add new Place
        </Link>
      </div>
    </div>
  );
};

export default PlacesPage;
