import React from "react";
import { RiMapPin2Fill } from "react-icons/ri";


const AddressLink = ({children, className=null}) => {
    if(!className){
        className='my-3 block'
    }
    
    className+=' flex gap-1 font-semibold underline' 
  
    return (
    <div>
      <a
        className={className}
        href={"https://maps.google.com/?q=" + children}
      >
        <RiMapPin2Fill className="mr-2" />
        {children}
      </a>
    </div>
  );
};

export default AddressLink;
