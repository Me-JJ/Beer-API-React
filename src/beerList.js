import React, { useEffect, useState } from "react";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchBeers();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        className="text-center d-block mx-auto w-75 p-2 bg-body-tertiary"
        type="text"
        placeholder="Search for beers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="d-flex justify-content-evenly flex-wrap ">
        {filteredBeers.map((beer) => (
          <div
            key={beer.id}
            className="p-3 m-2 border border-black text-center w-25 h-45"
          >
            <img src={beer.image_url} alt={beer.name} className="w-25" />
            <h3 className="border p-2 mt-2">{beer.name}</h3>
            <p className="text-danger">{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeerList;
