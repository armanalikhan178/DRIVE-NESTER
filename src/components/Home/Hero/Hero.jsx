//import React from "react";
import img from "../../../assets/img/truck1header.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-black text-white">
      <div className=" h-screen container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}
        <div className=" w-full md:w-2/4 space-y-5 mt-10">
          <h1 className=" text-4xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect Ride Today
          </h1>
          <p className=" text-lg lg:text-2xl font-medium">
            To many New Vehicle Available Here
          </p>
          <p className=" text-sm lg:text-base">
          Welcome to Drive Nester  your one-stop destination for discovering the best cars, bikes.
From stylish rides to powerful machines, our web app helps you explore, compare, and choose the perfect vehicle to match your lifestyle.
Start your journey with Drive Nester and drive the future of your way!
          </p>

          <div className="flex gap-8">
            <button onClick={() => navigate("/AIchat")}className=" bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">
              Exploring more options
            </button>
            
            <button onClick={() => navigate("/cars")} className="border-2 border-primary py-1 px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">

              All Vehicles</button>
          </div>
        </div>

        {/* img section  */}
        <div className=" w-full md:w-2/4 mt-4">
          <img src={img} alt="img" />
         
        </div>
   
      </div>
    </div>
    
  );
};

export default Hero;
