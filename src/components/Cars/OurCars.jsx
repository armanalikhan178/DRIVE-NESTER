import CarsCard from "./CarsCard";

const OurCars = () => {
  const carsData = [
    
{
      id: 1,
      img: "/src/assets/img/Furtuner.jpeg",
      name: "Furtuner",
      desp:"Company:Toyota(Japan/India),Fuel Type: Diesel / Petrol,Mileage: ~11 km/l,Top Speed: 190 km/h,Launch Year: 2021",
      price: "52.3 Lakh",
    },

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
      desp:"Company: Ford (USA),Fuel Type: Petrol,Mileage: ~8 km/l,Top Speed: 250 km/h",
      price: "12,22,890",

    },
    {
      id: 5,
      img: "/src/assets/img/supra2.png",
      name: "Supra",
      desp:"Company:Toyota, Fuel Type:Petrol, Mileage:~12 km/l, Top Speed:250 km/h,Launch Year: 2019",
      price: "₹85.1 Lakh",
    },
    {
      id: 6,
      img: "/src/assets/img/scorpio2.jpeg",
      name: "scorpio",
      desp:"Company: scorpio, Fuel Type:Petrol/ Diesel, Mileage:~12 km/l, Top Speed:180 km/h",
      price: "12,22,890",
    },
    {
      id: 7,
      img: "/src/assets/img/lemborgini.jpg",
      name: "Lamborghini Aventador",
      desp:"Company:Lamborghini(Italy),Fuel Type:Petrol, Mileage: ~6 km/l,Top Speed:350km/h",
      price: "6.25 Cr",
    },
    {
      id: 8,
      img: "/src/assets/img/royal.jpeg",
      name: "Rolls Royce Phantom",
      desp:"Company:Rolls-Royce ,Fuel Type:Petrol, Mileage:~9 km/l , Top Speed:250km/h, Launch Year:2023",
      price: "8.99 Cr",
    },

{
      id: 9,
      img: "/src/assets/img/car1.png",
      name: "Cadillac Escalade",
      desp:"Company: Cadillac (General Motors, USA), Fuel Type: Petrol / Hybrid (Diesel option in US) ,Mileage: ~8 10 km/l,Top Speed: 210 km/h",
      price: "12,22,890",
    },
    {
      id: 10,
      img: "/src/assets/img/car2.png",
      name: "BMW 3 Series",
       desp:"Company: BMW (Germany),Fuel Type: Petrol / Diesel / Hybrid,Mileage: ~16 km/l (Petrol), ~20 km/l (Diesel),Top Speed: 235 km/h",
      price: "13,45,745",
    },

    {
      id: 21,
      img: "/src/assets/img/Porsche-911.jpg",
      name: "Porsche-911",
      desp:"Company: Chevrolet (USA),Fuel Type:Petrol, Mileage:~9 km/l, Top Speed:296 km/h",
      price: "1.5 Cr",
    },

    {
      id: 11,
      img: "/src/assets/img/car3.png",
      name: "Mercedes",
      desp:"Company: Mercedes-Benz (Germany),Fuel Type: Petrol / Diesel,Mileage: ~12 km/l,Top Speed: 250 km/h",
      price: "45,56,000",
    },
    {
      id: 12,
      img: "/src/assets/img/car4.png",
      name: "BMW 7 Series",
      desp:"Company: BMW (Germany),Fuel Type: Petrol / Diesel / EV (i7),Mileage: Petrol ~12 km/l, EV ~590 km range,Top Speed: 250 km/h",
      price: "67,98,342",
    },
    {
      id: 13,
      img: "/src/assets/img/car5.png",
      name: "Mercedes-Benz",
      desp:"Company: Mercedes-Benz (Germany),Fuel Type: Petrol/ Diesel,Mileage: ~12 km/l,Top Speed: 250 km/h",
      price: "89,67,220",
    },
    {
      id: 14,
      img: "/src/assets/img/car6.png",
      name: "Range Rover",
      desp:"Company:Land Rover(UK, Tata Motors group), Fuel Type: Petrol/Diesel, Mileage:~9 km/l, Top Speed: 250 km/h,Launch Year: 2022",
      price: "2.39 Cr",
    },

    {
      id: 15,
      img: "/src/assets/img/Ertiga.jpeg",
      name: "Maruti Suzuki Ertiga",
      desp:"Company:Maruti Suzuki(India),Fuel Type: Petrol /CNG, Mileage:~20 km/l(Petrol),~26 km/kg (CNG),Top Speed: 170 km/h,Launch Year: 2022",
      price: "13.9 Lakh",
    },

    {
      id: 16,
      img: "/src/assets/img/teslaev.webp",
      name: "Tesla Model S Plaid",
      desp:"Company: Tesla Inc.,Fuel Type: EV (Electric), Range: ~600 km per charge ,Top Speed: 322 km/h, Launch Year: 2021",
      price: "1.9 Cr",
    },
    {
      id: 17,
      img: "/src/assets/img/bantly.jpeg",
      name: "Bentley Continental GT",
      desp:"Company:Bentley Motors,Fuel Type: Petrol,Mileage: ~8 km/l,Top Speed: 333 km/h",
      price: "5.2 Cr",
    },

     {
      id: 3,
      img: "/src/assets/img/Thar.jpeg",
      name: "Thar",
      desp:"Company: Mahindra & Mahindra,Fuel Type:Petrol /Diesel,Mileage:~12 km/l, Top Speed:155 km/h,Launch Year: 2020",
      price: "16.1 Lakh",
    },
    
    {
      id: 18,
      img: "/src/assets/img/Ferrari _.jpeg",
      name: "Ferrari F8 Tributo",
      desp:"Company:Ferrari (Italy),fuel Type: Petrol,Mileage: ~7 km/l,Top Speed: 340 km/h",
      price: "4.02 Cr",
    },
    {
      id: 19,
      img: "/src/assets/img/Bugatti Divo.jpeg",
      name: "Bugatti Chiron",
      desp:"Company: Bugatti,Fuel Type:Petrol, Mileage:~5 km/l, Top Speed:420 km/h,Launch Year: 2016",
      price: "19.21 Cr",
    },
    {
      id: 20,
      img: "/src/assets/img/Blue Corvette.jpeg",
      name: "Chevrolet Corvette Stingray",
      desp:"Company: Chevrolet (USA),Fuel Type:Petrol, Mileage:~9 km/l, Top Speed:296 km/h",
      price: "1.5 Cr",
    },
    
    
    
    

  ];



  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          ALL <span className=" text-primary">Cars</span>
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

        {carsData.map((item) => (
          <CarsCard
           key={item.id}
           img={item. img}
           desp={item.desp}
           name={item.name}
           price={item. price} />
        ))}
           </div>
                </div>
        );
        };
      

export default OurCars;
