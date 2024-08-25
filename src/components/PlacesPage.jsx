import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import AccountNav from "./AccountNav";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get('/user-places')
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
        {places.length > 0 ? (
          places.map((place) => (
            <Link 
              key={place._id} 
              to={`/account/places/${place._id}`} 
              className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl"
            >
              <div className="w-32 h-32 bg-gray-300 shrink-0">
                {place.photos.length > 0 && (
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={`http://localhost:4000/${place.photos[0]}`}
                    alt={place.title}
                  />
                )}
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No places added yet.</p>
        )}
      </div>
    </div>
  );
};

export default PlacesPage;
