import React from "react";

import AccountNav from "./AccountNav";
import { useState } from "react";

import { MdOutlineClose } from "react-icons/md";

export const PlaceGallery = ({ place }) => {
    const [showAllPhotos, setShowAllPhotos] = useState(false);


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
      <div className="relative mb-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          <div className="md:col-span-1">
            {place.photos?.[0] && (
              <div className="overflow-hidden rounded-lg">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="w-full h-full cursor-pointer object-cover"
                  src={"http://localhost:4000/" + place.photos[0]}
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {place.photos?.slice(1, 3).map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="w-full h-full cursor-pointer object-cover"
                  src={"http://localhost:4000/" + photo}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="absolute bottom-6 right-6 py-3 px-6 bg-white rounded-2xl shadow-lg"
        >
          Show more photos
        </button>
      </div>
    </div>
  );
};
