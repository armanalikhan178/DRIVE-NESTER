import  { useState } from "react";
// import { GiSteeringWheel } from "react-icons/gi";
import { FaCarCrash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ProjectTimer from "./ProjectTImer";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className=" fixed w-full z-10 bg-secondary text-white py-4">
      {/* desktop navigation section  */}
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <FaCarCrash size={35} className=" text-primary" />
          <Link to="/" className=" font-bold text-2xl">
            Drive Nester
          </Link>
        </div>
<ProjectTimer />

        <div className=" hidden md:flex items-center gap-6 font-medium text-xl">
          <Link
            to="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
          About 
          </Link>
          <Link
            to="/cars"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
          Cars
          </Link>

          

          <Link
            to="/services"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Services
          </Link>

          <Link
            to="/Bikes"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Bikes
          </Link>


          <Link
            to="/Booking"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
           Booking
          </Link>

            <Link
            to="/AIchat"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
          AIchat
          </Link>
          

          


 
        </div>


  
        
      </nav>

      {/* responsive section  */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link
          to="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
         About
        </Link>
        <Link
          to="/cars"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Cars
        </Link>
         
        
        <Link
          to="/services"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Services
        </Link>

        <Link
          to="/Bikes"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Bikes
        </Link>

        <Link
          to="/Booking"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
         Booking
        </Link>

        <Link
          to="/AIchat"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
         AIchat
        </Link>
        


        <div>
          

        </div>
      </div>
    </header>
  );
};

export default Navbar;
