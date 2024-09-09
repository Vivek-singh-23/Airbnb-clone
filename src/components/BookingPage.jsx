import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountNav from "./AccountNav";
import axios from "axios";
import AddressLink from "./AddressLink";
import { PlaceGallery } from "./PlaceGallery";
import BookingDates from "./BookingDates";

export const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }

  return (
    <div>
      <AccountNav />
      <div className="container mx-auto my-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800">{booking.place.title}</h1>
        <AddressLink className="my-2 block text-blue-500 hover:underline">
          {booking.place.address}
        </AddressLink>
        
        <div className="bg-gray-100 p-6 my-6 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Your booking information:</h2>
            <BookingDates booking={booking} />
          </div>
          <div className="bg-primary p-6 text-white rounded-2xl text-center md:text-right">
            <div className="text-lg font-medium">Total price</div>
            <div className="text-3xl font-bold">${booking.price}</div>
          </div>
        </div>

        <PlaceGallery place={booking.place} />
      </div>
    </div>
  );
};
