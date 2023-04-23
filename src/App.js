import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";

import axios from "axios";
import Cards from "./components/Cards";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((data) => setMeals(data.data.meals));
  }, [search]);
  return (
    <div className="font-['Mukta',sans-serif]">
      <Navigation />
      <div className="container mx-auto">
        <form action="" className="flex justify-center mt-8">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {/* <h1 className="text-center mt-12 text-5xl">No available 🚫</h1> */}
        <div className="container mx-auto flex flex-wrap justify-center mt-12 ">
          {search === null ? (
            <h1 className="text-center mt-12 text-5xl">No available 🚫</h1>
          ) : (
            meals.map((meal, index) => <Cards meal={meal} key={index} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
