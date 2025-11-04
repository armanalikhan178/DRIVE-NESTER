//import React from "react";
import BikesCard from "./BikesCard";

const MyBikes = () => {
  const bikesData = [
    {
      id: 0,
      img: "/src/assets/img/bike1.jpg",
      name: "Yamaha YZF-R15M",
      price: "4,30,000",
    },
    {
      id: 1,
      img: "/src/assets/img/bike2.jpg",
      name: "KTM 390 Duke",
      price: "2,78,279",
    },
    {
      id: 2,
      img: "/src/assets/img/bike3.jpg",
      name: "KTM RC 390",
      price: "3,44,875",
    },
    {
      id: 3,
      img: "/src/assets/img/bike4.jpg",
      name: "Bajaj pulsar P150",
      price: "1,16,755",
    },
    {
      id: 4,
      img: "/src/assets/img/bike5.jpeg",
      name: "TVS Raider 125",
      price: "91,600",
    },
    {
      id: 5,
      img: "/src/assets/img/bike6.jpeg",
      name: "Apache RTR ",
      price: "1,34,320",
    },
   
    {
      id: 6,
      img: "/src/assets/img/activa1.jpeg",
      name: "Honda activa 6G",
      price: "84,939",
    },

{
      id: 7,
      img: "/src/assets/img/activa 2.jpeg",
      name: "Honda activa 125 ",
      price: "79,806",
    },


{
      id: 8,
      img: "/src/assets/img/BURGMAN 3.jpeg",
      name: "Suzugi Burgman street 125",
      price: "1,12,300",
    },

{
      id: 9,
      img: "/src/assets/img/bullet3.jpeg",
      name: "GT 650",
      price: "3,77,650",
    },


{
      id: 10,
      img: "/src/assets/img/bullet 1.jpeg",
      name: "Royal Enfied classic ",
      price: "1,20,000",
    },

{
      id: 11,
      img: "/src/assets/img/bullet2.jpeg",
      name: "Royal Enfied hunter 350",
      price: "1,49,900",
    },

    {
      id: 12,
      img: "/src/assets/img/ninja2.jpeg",
      name: "Hero Super Splender",
      price: "68,000",
    },
     {
      id: 13,
      img: "/src/assets/img/kawasakininja.jpeg",
      name: "kawasaki Ninja ZX 10RR",
      price: "16 lakh",
    },
    //  {
    //   id: 14,
    //   img: "/src/assets/img/motorcycles-ktm-wallpaper-thumb.jpg",
    //   name: "Mercedes-Benz",
    //   price: "89,67,220",
    // },
   

  ];

  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          ALL<span className=" text-primary"> BIKES</span>
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">



  {bikesData.map((item) => (
          <BikesCard
           key={item.id}
           img={item. img}
           name={item.name}
           price={item. price} />
        ))}
           </div>
                </div>
        );
        };
        
export default MyBikes;

        {/* {bikesData.map((item) => {
          return (
            <div>
              <BikesCard
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}; */}

