import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import Perks from './Perks';

const PlacesPage = () => {
    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState(1)

    function inputHeader(text) {
        return (
            <h2 className='text-2xl mt-4'>{text}</h2>
        )
    }

    function inputDecription(text) {
        return (
            <p className='text-gray-500 text-sm'>{text}</p>
        )
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDecription(description)}
            </>
        )
    }

    function addPhotoByLink() {

    }

    return (
        <div className='p-4 md:p-8 lg:p-12'>
            {action !== 'new' && (
                <div className='text-center'>
                    <Link className='inline-flex gap-2 items-center bg-primary text-white py-2 px-6 rounded-full' to={'/account/places/new'}>
                        <FaPlus />Add new Place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form action="">
                        {preInput('Title', 'Title for your Place. Should be short and catchy for your place')}
                        <input className='w-full p-2 border rounded' type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='title' />

                        {preInput('Address', 'Address to this Place')}
                        <input className='w-full p-2 border rounded' type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder='address' />

                        {preInput('Photos', 'more == better')}
                        <div className='flex gap-2 flex-wrap'>
                            <input className='flex-grow p-2 border rounded' type="text" value={photoLink} onChange={e => setPhotoLink(e.target.value)} placeholder='Add using link ... jpg' />
                            <button className='bg-gray-200 px-4 py-2 rounded-2xl'>Add&nbsp;photo</button>
                        </div>

                        <div className='mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
                            <button className='flex flex-col items-center justify-center border bg-transparent rounded-2xl p-4 text-2xl text-gray-600'>
                                <FaCloudUploadAlt className='w-8 h-8' />
                                Upload
                            </button>
                        </div>

                        {preInput('Description', 'Description of the place')}
                        <textarea className='w-full p-2 border rounded' value={description} onChange={e => setDescription(e.target.value)} />

                        {preInput('Perks', 'Select all the perks')}
                        <Perks selected={perks} onChange={setPerks} />

                        {preInput('ExtraInfo', 'Maybe Houserules.. etc')}
                        <textarea className='w-full p-2 border rounded' value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />

                        {preInput('Check in&out time, max guests', 'add check in and out time')}
                        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                            <div>
                                <h3>Checkin time</h3>
                                <input className='w-full p-2 border rounded' type="number" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                            </div>
                            <div>
                                <h3>Checkout time</h3>
                                <input className='w-full p-2 border rounded' type="number" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                            </div>
                            <div>
                                <h3>Max Guests</h3>
                                <input className='w-full p-2 border rounded' type="number" value={maxGuests} onChange={e => setMaxGuests(e.target.value)} />
                            </div>
                        </div>

                        <button className='bg-primary text-white py-2 px-4 rounded mt-4'>Save</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default PlacesPage
