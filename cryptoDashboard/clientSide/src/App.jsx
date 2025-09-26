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











}