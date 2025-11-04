
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-14 bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">ᴅʀɪᴠᴇ ɴᴇꜱᴛᴇʀ</h1>
          <p className=" mb-2 text-sm">
           Drive Nester is your all-in-one platform for Booking vehicles, and maintaining vehicles.
            We connect car and bike enthusiasts with the best deals while offering reliable services to keep vehicles in top condition.
              Drive Nester makes your automotive experience smooth and trustworthy.
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            pages Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/about"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
             Cars
            </Link>
            <Link
              to="/services"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Services
            </Link>
            <Link
              to="/Bikes"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Bikes
            </Link>
            <Link
              to="/AIchat"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
             AIchat
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Used Cars for sale
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Learn More
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              User-friendly
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Search
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Geographic location Services
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-primary font-semibold mx-2">
            ARMAAN ALI KHAN
          </span>
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
