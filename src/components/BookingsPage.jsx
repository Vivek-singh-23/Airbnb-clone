import React, { useEffect, useState } from 'react';
import AccountNav from './AccountNav';
import axios from 'axios';
import { PlaceImg } from './PlaceImg';
import { format, differenceInCalendarDays } from 'date-fns'; 
import { Link } from 'react-router-dom';

export const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('/bookings')
            .then(response => {
                setBookings(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the bookings!", error);
            });
    }, []);

    return (
        <div>
            <AccountNav />
            <div className="container mx-auto px-4 py-8">
                {bookings?.length > 0 ? (
                    bookings.map((booking, index) => (
                        <Link
                        to={`/account/bookings/${booking._id}`} 
                            key={index} 
                            className="flex flex-col md:flex-row gap-4 bg-gray-100 p-4 rounded-2xl overflow-hidden shadow-md mb-4"
                        >
                            <div className="w-full md:w-48">
                                <PlaceImg place={booking.place} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">{booking.place.title}</h2>
                                <div className="text-gray-600">
                                    {format(new Date(booking.checkIn), 'yyyy-MM-dd')} - {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
                                </div>
                                <div className="mt-2">
                                    <span className="font-medium">Number of Nights:</span> {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} <br />
                                    <span className="font-medium">Total:</span> ${booking.price}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No bookings found.</p>
                )}
            </div>
        </div>
    );
};
