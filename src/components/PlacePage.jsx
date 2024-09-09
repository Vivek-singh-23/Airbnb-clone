import React from "react";
import { useParams } from "react-router-dom";
import AccountNav from "./AccountNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import BookingWidget from "./BookingWidget";
import { PlaceGallery } from "./PlaceGallery";
import AddressLink from "./AddressLink";

export const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) return;
    axios.get(`/places/${id}`).then((response) => setPlace(response.data));
  }, [id]);

  if (!place) return "";

  if (showAllPhotos) {
    return (
      <div className="">
        <AccountNav />
        <div className=" inset-0 bg-black text-white min-h-screen z-50 p-12">
          <div className="grid gap-8">
            <h2 className="text-4xl mb-6">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-12 top-8 flex gap-2 py-3 px-6 rounded-2xl shadow-lg bg-white text-black"
            >
              <MdOutlineClose />
              Close Photos
            </button>
            {place?.photos?.length > 0 &&
              place.photos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    className="w-full cursor-pointer h-auto object-cover"
                    src={"http://localhost:4000/" + photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AccountNav />
      <div className="mt-6 bg-gray-100  px-16 pt-12 pb-8">
        <h1 className="text-4xl mb-6">{place.title}</h1>

        <AddressLink>{place.address}</AddressLink>

        <PlaceGallery place={place}/>

        <div className="mt-12 mb-12 grid gap-12 grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-6">
              <h2 className="font-semibold text-3xl mb-4">Description</h2>
              <p className="text-gray-700 leading-7">{place.description}</p>
            </div>
            <div className="text-gray-600">
              <p>Check-in: {place.checkIn}</p>
              <p>Check-out: {place.checkOut}</p>
              <p>Max number of guests: {place.maxGuests}</p>
            </div>
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>

        <div className="bg-white -mx-8 px-8 py-12 border-t">
          <h2 className="font-semibold text-3xl mb-4">Extra info</h2>
          <p className="text-sm text-gray-700 leading-7">{place.extraInfo}</p>
        </div>
      </div>
    </div>
  );
};
