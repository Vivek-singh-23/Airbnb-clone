import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import AccountNav from "./AccountNav";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("/user-places")
      .then(({ data }) => {
        setPlaces(data);
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
      });
  }, []);

  return (
    <div>
      <AccountNav />

      <div className="text-center">
        List of all added places
        <br />
        <Link
          className="inline-flex gap-2 items-center bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}
        >
          <FaPlus />
          Add new Place
        </Link>
      </div>

      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={'/account/places/'+place._id} className="flex cursor-pointer gap-4 bg-gray-100  p-4 rounded-2xl">
              <div className="w-32 h-32 bg-gray-300 grow shrink-0">
                {place.photos.length > 0 &&  (
                  <img className="w-32 h-32 object-cover" src={'http://localhost:4000/uploads/'+place.photos[0]} alt="" />
                )}
              </div >
              <div className="grow-0 shrink">
              <h2 className="text-xl">{place.title}</h2>
              <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacesPage;
