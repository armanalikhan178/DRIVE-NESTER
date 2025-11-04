
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureCard from "./FeatureCard";

const Featured = () => {
  const carsData = [
    
 
     {
      id: 2,
      img: "/src/assets/img/Mahindra Scorpio.jpeg",
      name: "Mahindra Scorpio",
      desp:"Company: Mahindra & Mahindra, Fuel Type: Petrol / Diesel, Mileage: ~12 km/l, Top Speed: 155 km/h, Launch Year: 2020",
      price: "18.5 Lakh",
    },


   
    {
      id: 4,
      img: "/src/assets/img/Ford-Mustang.avif",
      name: "Ford-mustang",
      price: "12,22,890",

    },
    {
      id: 5,
      img: "/src/assets/img/supra2.png",
      name: "Supra",
      price: "₹85.1 Lakh",
    },
    
    {
      id: 18,
      img: "/src/assets/img/Ferrari _.jpeg",
      name: "Ferrari F8 Tributo",
      price: "4.02 Cr",
    },
    {
      id: 19,
      img: "/src/assets/img/Bugatti Divo.jpeg",
      name: "Bugatti Chiron",
      price: "19.21 Cr",
    },
    {
      id: 20,
      img: "/src/assets/img/Blue Corvette.jpeg",
      name: "Chevrolet Corvette Stingray",
      price: "₹1.5 Cr",
    },
    
    
    
    
    {
      id: 0,
      img: "/src/assets/img/car1.png",
      name: "Cadillac Escalade",
      price: "12,22,890",
    },


     {
      id: 21,
      img: "/src/assets/img/Porsche-911.jpg",
      name: "Porsche-911",
      desp:"Company: Chevrolet (USA),Fuel Type:Petrol, Mileage:~9 km/l, Top Speed:296 km/h",
      price: "1.5 Cr",
    },
    {
      id: 1,
      img: "/src/assets/img/car2.png",
      name: "BMW 3 Series",
      price: "13,45,745",
    },
    {
      id: 2,
      img: "/src/assets/img/car3.png",
      name: "Mercedes",
      price: "45,56,000",
    },
    {
      id: 3,
      img: "/src/assets/img/car4.png",
      name: "BMW 7 Series",
      price: "67,98,342",
    },
    {
      id: 4,
      img: "/src/assets/img/car5.png",
      name: "Mercedes-Benz",
      price: "89,67,220",
    },
    {
      id: 5,
      img: "/src/assets/img/car6.png",
      name: "Range Rover",
      price: "34,56,879",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className=" container mt-14">
      <h1 className=" font-bold text-4xl text-center">
        Featured <span className=" text-primary">Cars</span>
      </h1>

      <p className=" text-center">
        Explore our handpicked selection of cars loved by riders worldwide.

      </p>

      <div className=" mt-8">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
