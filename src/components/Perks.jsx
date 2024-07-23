import React from "react";
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { FaDisplay } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineDoorFront } from "react-icons/md";




const Perks = ({selected, onChange}) => {
  function handleCbClick(e){
    const {checked, name} = e.target;
    if(checked){
      onChange([...selected, name]);
    }else{
      onChange([...selected.filter(selectedName=> selectedName !== name)])
    }
    
  }
  return (
    <div className='grid mt-2 grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6'>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input onChange={handleCbClick} name="wifi" type="checkbox" />
        <FaWifi />
        <span>Wifi</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" onChange={handleCbClick} name="parking" />
        <FaCar />
        <span>Free Parking Spot</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" onChange={handleCbClick} name="tv"/>
        <FaDisplay />
        <span>TV</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" onChange={handleCbClick} name="pets"/>
        <MdOutlinePets />
        <span>Pets</span>
      </label>

      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" onChange={handleCbClick} name="entrance"/>
        <MdOutlineDoorFront />
        <span>Private Entrance</span>
      </label>
    </div>
  );
};

export default Perks;
