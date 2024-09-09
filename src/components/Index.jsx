import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Index = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-8 m-4 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link to={'/place/'+place._id} key={place.id} className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="bg-gray-500 mb-2 rounded-2xl overflow-hidden flex justify-center items-center h-64">
                {place.photos?.[0] && (
                  <img
                    className="rounded-2xl object-cover w-full h-full"
                    src={"http://localhost:4000/" + place.photos?.[0]}
                    alt=""
                  />
                )}
              </div>
              <h3 className="font-bold text-lg">{place.address}</h3>
              <h2 className="text-sm text-gray-500">{place.title}</h2>
              <div className="mt-1">
                <span className="font-bold">${place.price}</span> per night
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
