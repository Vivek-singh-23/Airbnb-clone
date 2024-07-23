import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Perks from "./Perks";
import axios from "axios";
import AccountNav from "./AccountNav";

const PlacesFormPage = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => [...prev, filename]);
    setPhotoLink("");
  }

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  async function addNewPlace(e) {
    e.preventDefault();
    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
  }

  return (
    <div>
        <AccountNav/>
      <div className="px-16 py-4">
        <form onSubmit={addNewPlace}>
          {preInput(
            "Title",
            "Title for your Place. Should be short and catchy for your place"
          )}
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />

          {preInput("Address", "Address to this Place")}
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
          />

          {preInput("Photos", "more == better")}
          <div className="flex gap-2 flex-wrap">
            <input
              className="flex-grow p-2 border rounded"
              type="text"
              value={photoLink}
              onChange={(e) => setPhotoLink(e.target.value)}
              placeholder="Add using link ... jpg"
            />
            <button
              onClick={addPhotoByLink}
              className="bg-gray-200 px-4 py-2 rounded-2xl"
            >
              Add&nbsp;photo
            </button>
          </div>

          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {addedPhotos.length > 0 &&
              addedPhotos.map((link) => (
                <div key={link} className="flex h-auto">
                  <img
                    className="rounded-2xl w-full object-cover"
                    src={"http://localhost:4000/uploads/" + link}
                    alt=""
                  />
                </div>
              ))}
            <label className="cursor-pointer flex flex-col items-center justify-center border bg-transparent rounded-2xl p-4 text-2xl text-gray-600">
              <input
                type="file"
                multiple
                className="hidden"
                onChange={uploadPhoto}
              />
              <FaCloudUploadAlt className="w-8 h-8" />
              Upload
            </label>
          </div>
          {preInput("Description", "Description of the place")}
          <textarea
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {preInput("Perks", "Select all the perks")}
          <Perks selected={perks} onChange={setPerks} />

          {preInput("Extra Info", "Maybe house rules, etc.")}
          <textarea
            className="w-full p-2 border rounded"
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />

          {preInput(
            "Check in&out time, max guests",
            "Add check in and out time"
          )}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3>Check-in time</h3>
              <input
                className="w-full p-2 border rounded"
                type="number"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <h3>Check-out time</h3>
              <input
                className="w-full p-2 border rounded"
                type="number"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div>
              <h3>Max Guests</h3>
              <input
                className="w-full p-2 border rounded"
                type="number"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
          </div>

          <button className="bg-primary text-white py-2 px-4 rounded mt-4">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlacesFormPage;
