//import React from "react";

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 ">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
      🚀 Fast & Easy Booking No long waits, no hassle — with Drive Nester you can explore vehicles, compare options, and book your ride in just a few clicks.

😊 Satisfied Customers We focus on trust and transparency. Our growing base of happy customers proves that we deliver what we promise.

💳 Flexible Financing Options Drive your dream car or bike without worrying about the budget. With our easy EMI and financing support, owning a vehicle has never been simpler.

🛠️ Wide Selection of Vehicles From stylish bikes to luxury cars and heavy-duty trucks, Drive Nester brings you a complete collection to match your needs and lifestyle.
      </p>
    </div>
  );
};

export default WhyUsCard;
