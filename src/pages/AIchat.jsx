import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AIchat = () => {
  const navigate = useNavigate();
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [userName, setUserName] = useState("");
  const [theme, setTheme] = useState("day");
  const [feedback, setFeedback] = useState("");

  // AI vehicles
  const vehicles = [
    { name: "Ferrari F8", speed: "fast", price: 300000 },
    { name: "Honda Civic", speed: "medium", price: 20000 },
    { name: "Yamaha R1", speed: "fast", price: 20000 },
    { name: "Royal Enfield", speed: "slow", price: 5000 },
    { name: "Toyota Corolla", speed: "medium", price: 18000 },
  ];

  const responses = [
    {
      keywords: ["hello", "hi", "hey", "yo"],
      replies: [
        () => `Hello ${userName || "there"}! Welcome to Drive Nester 🚗`,
        "Hi! Ready to explore cars and bikes? 😎",
      ],
    },
    {
      keywords: ["my name is", "call me"],
      replies: [
        (msg) => {
          const name = msg.split("is")[1]?.trim() || msg.split("me")[1]?.trim();
          if (name) {
            setUserName(name);
            return `Nice to meet you, ${name}! 🎉`;
          }
          return "Sorry, I didn't catch your name!";
        },
      ],
    },

 {
      keywords: ["hello", "hi", "hey", "yo"],
      replies: [
        () => `Hello ${userName || "there"}! Welcome to Drive Nester 🚗`,
        "Hi! Ready to explore cars and bikes? 😎",
      ],
    },
//------
    
    {
      keywords: ["my name is", "call me"],
      replies: [
        (msg) => {
          const name = msg.split("is")[1]?.trim() || msg.split("me")[1]?.trim();
          if (name) {
            setUserName(name);
            return `Nice to meet you, ${name}! 🎉`;
          }
          return "Sorry, I didn't catch your name!";
        },
      ],
    },
    {
      keywords: ["recommend", "suggest"],
      replies: [
        () => {
          const fastCars = vehicles.filter((v) => v.speed === "fast");
          const choice = fastCars[Math.floor(Math.random() * fastCars.length)];
          return `I recommend you check out ${choice.name}, it’s really ${choice.speed}! 🚀`;
        },
      ],
    },
    {
      keywords: ["favorite", "save"],
      replies: [
        (msg) => {
          const vehicleName = msg.replace(/save|favorite|add/gi, "").trim();
          if (vehicleName) {
            // eslint-disable-next-line no-undef
            setFavorites([...favorites, vehicleName]);
            return `${vehicleName} added to your favorites! ⭐`;
          }
          return "Specify which vehicle to save as favorite.";
        },
      ],
    },
    {
      keywords: ["show favorites", "my favorites"],
      replies: [
        // eslint-disable-next-line no-undef
        () => (favorites.length === 0 ? "No favorites yet!" : `Your favorites: ${favorites.join(", ")}`),
      ],
    },
    {
      keywords: ["quiz", "question"],
      replies: [
        () => "Quiz: Which vehicle is faster, Ferrari F8 or Royal Enfield? 🏎️🏍️",
      ],
    },
    {
      keywords: ["answer", "ferrari", "royal enfield"],
      replies: [
        (msg) => {
          if (msg.toLowerCase().includes("ferrari")) return "Correct! Ferrari F8 is faster! 🏎️";
          if (msg.toLowerCase().includes("royal")) return "Not quite! Royal Enfield is slower 🏍️";
          return "Hmm… Try guessing the vehicle!";
        },
      ],
    },
    {
      keywords: ["price", "cost"],
      replies: [
        (msg) => {
          const found = vehicles.find((v) => msg.toLowerCase().includes(v.name.toLowerCase()));
          if (found) return `${found.name} costs $${found.price.toLocaleString()}`;
          return "Specify a vehicle to know the price!";
        },
      ],
    },
    {
      keywords: ["stupid", "idiot", "dumb", "hate", "ugly", "fool"],
      replies: [
        "Let's keep it friendly 😉",
        "I might be offline, but we can talk about cars or bikes instead 😅",
      ],
    },
{
      keywords: ["hello", "hi", "hey", "yo", "hiya"],
      replies: [
        `Hello ${userName}! Welcome to Drive Nester 🚗`,
        "Hi there! Ready to find your dream car or bike?",
        "Hey! Buckle up, let's explore some vehicles! 😎",
      ],
    },

   // Cars
    {
      keywords: ["cars", "car", "sedan", "suv", "sports car", "supercar"],
      replies: [
        "We've got a variety of cars: sedans, SUVs, and even supercars! 🚘",
        "Looking for speed or comfort? Check our Cars section for both!",
        "Cars, cars everywhere! From regular to supercars, your ride awaits!",
      ],
    },
    // Bikes
    {
      keywords: ["bikes", "bike", "motorbike", "scooter"],
      replies: [
        "Two wheels, endless fun! 🏍️ Explore our Bikes section.",
        "Scooters or sports bikes? We have them all!",
        "Bikes available! Zoom through your city in style!",
      ],
    },
 // Prices
    {
      keywords: ["price", "cost", "how much", "expensive", "cheap"],
      replies: [
        "Prices vary by model. Check the product page for exact numbers 💰",
        "From budget-friendly to premium, we have it all!",
        "Want a deal? Watch out for our upcoming offers! 😉",
      ],
    },
    // Services
    {
      keywords: ["service", "repair", "maintenance", "pickup", "delivery"],
      replies: [
        "We provide servicing, pickup, and delivery for all vehicles! 🛠️",
        "Need maintenance? Our team has got you covered!",
        "Service with a smile! Check our Services page for more info.",
      ],
    },
    // Orders
    {
      keywords: ["orders", "my order", "order status", "booking"],
      replies: [
        "You don't have any orders yet. Try booking a car or bike!",
        "Offline mode: I can't access live orders, but you can check the Orders page.",
        "Booking is easy! Just pick your vehicle and go to the order page.",
      ],
    },


    {
      keywords: ["ha", "yes", "yeah", "y", "ok", "kk","okay","achha","theek hai","hmm","or bata","tell me","ai"],
      replies: [
        "we can continue sir..."
      ],
    },



    // Thanks / Polite
    {
      keywords: ["thanks", "thank you", "thx"],
      replies: [
        "You're welcome! 😊",
        "Anytime! Drive safe! 🚗",
        "No problem! I'm here 24/7.",
      ],
    },
    // Farewell
    {
      keywords: ["bye", "goodbye", "see you", "later"],
      replies: [
        "Goodbye! Have a safe drive 🚗",
        "See you soon! Come back for more cars and bikes.",
        "Later! Don't forget to buckle up 😎",
      ],
    },
    // Humor / small talk
    {
      keywords: ["joke", "funny", "humor"],
      replies: [
        "Why did the car apply for a job? Because it wanted to drive up its income! 😂",
        "I told my bike a joke… now it’s two-tired. 😆",
        "Why don’t cars ever get lost? Because they follow their GPS destiny!",
      ],
    },
    // Inappropriate / bad words
    {
      keywords: ["stupid", "idiot", "dumb", "hate", "ugly", "fool"],
      replies: [
        "Whoa! Let's keep it friendly 😉",
        "I might be AI, but I have feelings too! 😢",
        "Hmm… let's talk about cars or bikes instead 😅",
      ],
    },
  



     {
      keywords: ["furtuner", "suv", ],
      replies: [
          "Furtuner",
      "Company:Toyota(Japan/India),Fuel Type: Diesel / Petrol,Mileage: ~11 km/l,Top Speed: 190 km/h,Launch Year: 2021",
      "52.3 Lakh"
      ],
    },

     {
      keywords: ["boolero" ,"scorpio", "mahindra ", "MahindraScorpio"],
      replies: [
        "Company: Mahindra & Mahindra, Fuel Type: Petrol / Diesel, Mileage: ~12 km/l, Top Speed: 155 km/h, Launch Year: 2020",
      "price 18.5 Lakh",
      ],
    },

     {
      keywords: ["su", "supra", "saypra", "soopra"],
      replies: [
        "Supra","Company:Toyota, Fuel Type:Petrol, Mileage:~12 km/l, Top Speed:250 km/h,Launch Year: 2019",
      "price: ₹85.1 Lakh",
      ],
    },

     {
      keywords: ["lamborghini Aventador", "lamborghini ", "lambo", "Lemborghini "],
      replies: [
        "Lamborghini Aventador",
      "Company:Lamborghini(Italy),Fuel Type:Petrol, Mileage: ~6 km/l,Top Speed:350km/h",
       "6.25 Cr",
      ],
    },

     {
      keywords: ["Rolls Royce Phantom", "Rolls ","rolls ","Rolls Royce", "rolles"],
      replies: ["Rolls Royce Phantom",
      "Company:Rolls-Royce ,Fuel Type:Petrol, Mileage:~9 km/l , Top Speed:250km/h, Launch Year:2023",
      "price: 8.99 Cr",
        
      ],
    },

     {
      keywords: ["BMW 3 Series", "bmw", "www", "BMW 7 Series"],
      replies: [
       "BMW 3 Series",
      "Company: BMW (Germany),Fuel Type: Petrol / Diesel / Hybrid,Mileage: ~16 km/l (Petrol), ~20 km/l (Diesel),Top Speed: 235 km/h",
      "13,45,745",
        
        
      ],
    },

     {
      keywords: ["mercedes", "mc", "Mercedes benz", "marsedis"],
      replies: ["Mercedes",
     "Company: Mercedes-Benz (Germany),Fuel Type: Petrol / Diesel,Mileage: ~12 km/l,Top Speed: 250 km/h",
       "45,56,000",
        
      ],
    },

     {
      keywords: ["range Rover", "land", "rover", "RangeRover"],
      replies: [
       "Range Rover",
      "Company:Land Rover(UK, Tata Motors group), Fuel Type: Petrol/Diesel, Mileage:~9 km/l, Top Speed: 250 km/h,Launch Year: 2022",
       "2.39 Cr",
        
      ],
    },

     {
      keywords: ["tesla Model S Plaid", "tesla", "EV", "ev"],
      replies: [
         "Tesla Model S Plaid",
      "Company: Tesla Inc.,Fuel Type: EV (Electric), Range: ~600 km per charge ,Top Speed: 322 km/h, Launch Year: 2021",
      "1.9 Cr",
      ],
    },

     {
      keywords: ["ktm", "KTM", "Ktm", "duke"],
      replies: [ "/src/assets/img/bike2.jpg",
      "KTM 390 Duke",
       "2,78,279",
        
      ],
    },

     {
      keywords: ["Bajaj pulsar", "bajaj pulsar P150", "pulsar", "palsar"],
      replies: [ "Bajaj pulsar P150",
      "1,16,755",
        
      ],
    },

     {
      keywords: ["Tvs", "raider", "newbike", "tVS Raider 125"],
      replies: [
        "TVS Raider 125",
       "91,600",
      ],
    },

     {
      keywords: ["Honda activa 6G", "activa", "honda", "scooty","scooter"],
      replies: [
       "Honda activa 6G",
     "84,939",
      ],
    },

     {
      keywords: ["Royal Enfied classic", "royal Enfied hunter", "Bullet", "bullet"],
      replies: [
       "Royal Enfied classic ",
      "price :1,20,000",
        
      ],
    },

     {
      keywords: ["splender", "Hero Super Splender", " super Splender"],
      replies: [
        "Hero Super Splender",
      "68,000",
      ],
    },

     {
      keywords: ["kawasaki Ninja ZX 10RR", "kawasaki Ninja ", "kawasaki ", " ninja "],
      replies: [
        "kawasaki Ninja ZX 10RR",
     " price: 16 lakh"
      ],
    },

     {
      keywords: ["Apache RTR", "apache RTR", "motorbike"],
      replies: [
        "Apache RTR ",
       "1,34,320",
      ],
    },

     {
      keywords: ["suzuki Ertiga", "maruti ", "Maruti ", "maruti Suzuki Ertiga"],
      replies: [
        "Maruti Suzuki Ertiga",
      "Company:Maruti Suzuki(India),Fuel Type: Petrol /CNG, Mileage:~20 km/l(Petrol),~26 km/kg (CNG),Top Speed: 170 km/h,Launch Year: 2022",
    "13.9 Lakh",
      ],
    },

     {
      keywords: ["Ford-mustang","mustang", "mast", "tank"],
      replies: [
        "Ford-mustang",
      "Company: Ford (USA),Fuel Type: Petrol,Mileage: ~8 km/l,Top Speed: 250 km/h",
    "12,22,890",

      ],
    },

     {
      keywords: ["Porsche-911", "por", "porsche", "care"],
      replies: [
          "Porsche-911",
      "Company: Chevrolet (USA),Fuel Type:Petrol, Mileage:~9 km/l, Top Speed:296 km/h",
       "1.5 Cr",
      ],
    },

     {
      keywords: ["Bugatti Chiron", "bugatti",],
      replies: [ 
       "Bugatti Chiron",
      "Company: Bugatti,Fuel Type:Petrol, Mileage:~5 km/l, Top Speed:420 km/h,Launch Year: 2016",
       "19.21 Cr",
        
      ],
    },

     {
      keywords: ["Ferrari","ferrari", "farari", "farrary", "farary"],
      replies: ["Ferrari F8 Tributo",
      "Company:Ferrari (Italy),fuel Type: Petrol,Mileage: ~7 km/l,Top Speed: 340 km/h",
      "4.02 Cr",
        
      ],
    },

     {
      keywords: ["thar", "Thar", ],
      replies: [ "Thar",
    "Company: Mahindra & Mahindra,Fuel Type:Petrol /Diesel,Mileage:~12 km/l, Top Speed:155 km/h,Launch Year: 2020",
     "16.1 Lakh",
        
      ],
    },


//----------





    {
      keywords: ["recommend", "suggest"],
      replies: [
        () => {
          const fastCars = vehicles.filter((v) => v.speed === "fast");
          const choice = fastCars[Math.floor(Math.random() * fastCars.length)];
          return `I recommend checking out ${choice.name}, it’s really ${choice.speed}! 🚀`;
        },
      ],
    },
  ];

  const getReply = (msg) => {
    const message = msg.toLowerCase().trim();
    for (let item of responses) {
      if (item.keywords.some((kw) => message.includes(kw))) {
        const reply = item.replies[Math.floor(Math.random() * item.replies.length)];
        return typeof reply === "function" ? reply(msg) : reply;
      }
    }
    return "I don't understand that. Try Cars, Bikes, or ask for recommendations! 😎";
  };

  const handleChat = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    const aiReply = getReply(userMsg);
    setChatHistory([...chatHistory, { sender: "user", text: userMsg }, { sender: "ai", text: aiReply }]);
    setChatInput("");
  };

  const handleFeedbackSubmit = () => {
    alert("Thanks for your feedback! 🙏");
    setFeedback("");
  };

  return (
    <div className={`${theme === "day" ? "text-black" : "bg-purple-900 text-white"} min-h-screen p-4 sm:p-6 md:p-8`}>
      {/* Day/Night Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setTheme(theme === "day" ? "night" : "day")}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-red-700 text-sm sm:text-base"
        >
          {theme === "day" ? "Night Mode" : "Day Mode"}
        </button>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">🤖 Drive Nester AI Hub-AIAssistant </h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button onClick={() => navigate("/")} className="px-3 py-2 bg-purple-800 text-white rounded hover:bg-red-400 text-sm sm:text-base">Home</button>
        <button onClick={() => navigate("/cars")} className="px-3 py-2 bg-purple-700 text-white rounded hover:bg-red-500 text-sm sm:text-base">Cars</button>
        <button onClick={() => navigate("/bikes")} className="px-3 py-2 bg-purple-600 text-white rounded hover:bg-red-600 text-sm sm:text-base">Bikes</button>
        <button onClick={() => navigate("/services")} className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-red-700 text-sm sm:text-base">Services</button>
      </div>

      {/* Chat Window */}
      <div className="border rounded-lg h-64 sm:h-72 md:h-80 overflow-y-auto p-3 bg-gray-50 dark:bg-gray-800 flex flex-col-reverse mb-4">
        {chatHistory.slice().reverse().map((msg, i) => (
          <div
            key={i}
            className={`mb-2 p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-100 self-end text-blue-800" : "bg-gray-200 self-start text-gray-900 dark:bg-gray-700 dark:text-white"} text-sm sm:text-base`}
          >
            <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          className="flex-1 p-2 border rounded text-sm sm:text-base"
          placeholder="Type your message..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleChat()}
        />
        <button onClick={handleChat} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm sm:text-base">Send</button>
      </div>

      {/* Services */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">🛠️ Our Services</h2>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li>Vehicle Sales (Cars & Bikes)</li>
          <li>Servicing & Maintenance</li>
          <li>Pickup & Delivery</li>
          <li>Personalized Recommendations</li>
        </ul>
      </div>

      {/* Feedback Form */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">💬 Feedback</h2>
        <textarea
          className="w-full p-2 border rounded mb-2 text-sm sm:text-base"
          rows={3}
          placeholder="Your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button onClick={handleFeedbackSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm sm:text-base">Submit Feedback</button>
      </div>

      {/* Social Media */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-cyan-800 px-3 py-2 rounded text-white hover:bg-red-900 text-sm sm:text-base">GitHub</a>
      </div>
    </div>
  );
};

export default AIchat;
