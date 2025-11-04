//import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const BikesCard = ({ id, img, name, price }) => {

   const navigate = useNavigate();

  const handleBookNow = () => {
    // send car details to order page
    navigate("/Booking", { state: { id, img, name,  price } });

  };
  return (
    <div
      className="border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer hover:bg-lime transition duration-200 ease-lineara"
      key={id}
    >
      <img src={img} alt="img" />
      <h1 className=" font-bold text-xl pl-5 text-primary">{name}</h1>
      <p className=" pl-5 pb-4">
        SELECT YOUR BIKE HERE
      </p>
      <div className=" flex justify-between px-6 pb-2">
        <h3 className=" font-semibold text-xl">₹{price}</h3>
        
        
         <button
          onClick={handleBookNow}
          className=" bg-secondary text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-primary transition duration-200 ease-linear">
        
          Book Now
        </button>
     
      </div>
    </div>
  );
};

export default BikesCard;
