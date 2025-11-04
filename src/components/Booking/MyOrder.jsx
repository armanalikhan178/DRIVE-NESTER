import { useLocation } from "react-router-dom";
import { useState } from "react";

const MyOrder = () => {
  const location = useLocation();
  const { img, name, desp, price } = location.state || {};
  
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentmethod, setpaymentmethod] = useState("");
 const [map, setmap] = useState("");

  // 🔍 Search state
  const [search, setSearch] = useState("");

  const handleConfirm = () => {
    if (!customerName || !phone ) {
      alert("Please enter your name and phone number , Payment and location!");
      return;
    }
    alert(`✅ Booking confirmed for ${name}\nName: ${customerName}\nPhone: ${phone}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">Order Summary</h1>

      {/* 🔍 Unique Shape + Color Search bar */}
      <div className="relative mb-6">
        <input
          type="search"
          placeholder="SEARCH YOUR VEHICLE..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-fi p-100 pl-10 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-100 to-pink-100 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500">🔍</span>
      </div>

      {name ? (
        <div className="mt-4 border p-4 rounded-lg bg-white shadow-md max-w-md">
          <img src={img} alt={name} className="w-64 mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="italic text-gray-600">{desp}</p>
          <p className="mt-2 font-bold text-lg">₹{price}</p>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded p-2 mb-2"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full border rounded p-2 mb-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="enter your address"
              placeholder="Enter your address correct location"
              className="w-full border rounded p-2 mb-2"
              value={map}
              onChange={(e) => setmap(e.target.value)}
            />
            <select>
            <input
              type="paymentmethod"
              placeholder="Enter your paymentmethod "
              className="w-full border rounded p-2 mb-2"
              value={paymentmethod}
              onChange={(e) => setpaymentmethod(e.target.value)}
            
            />

              <option value =""> Choose payment method  </option>
              <option value ="Credit Card">Credit Card</option>
              <option value="Cash in hand">Cash in hand </option>
              </select>

            <button
              onClick={handleConfirm}
              className="mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      ) : (
        <p>No car selected!</p>
      )}
    </div>
  );
};

export default MyOrder;
