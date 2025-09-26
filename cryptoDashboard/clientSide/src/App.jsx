import React, { useEffect, useState } from "react";
import Coinlist from "./components/Coinlist.jsx";

function App(){
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/coins");
        const data = await res.json();
        setCoins(data);
      } catch (err){
        console.log(err);
      }
    };
    fetchCoins();
}, []);

const filteredCoins = coins.filter((coin) => 
  coin.name.toLowerCase().includes(search.toLowerCase())
);

return (
  <div className="p-6">
    <h1 className="text-3xl font0-bold mb-4">Crypto Dashboard</h1>
    <input 
      type="text"
      placeholder="Search Coin"
      className="border p-2 mb-4 w-full"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
);
}

export default App;