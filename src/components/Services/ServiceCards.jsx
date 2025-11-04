// import React from "react";

// eslint-disable-next-line react/prop-types
const ServiceCards = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
        Tires & Wheels=
High-quality tire replacement and balancing...

       Exhaust System=
Full exhaust system inspection and repair
Performance upgrades for better engine efficiency..

Car Maintenance=
Routine servicing including oil changes, filters, and fluids...

Brake Repairs=
Brake pad and rotor replacement...

Body Service=
Dent and scratch repairs...

Engine Services=
Engine diagnostics and troubleshooting

      </p>
    </div>
  );
};

export default ServiceCards;
