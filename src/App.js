import React, { useState, useEffect } from "react";
import "./fonts/BOOTLE.ttf";
import "./App.css";
import Header from "./components/layout/Header";
import SearchResults from "./components/results/SearchResults";
import ItemDetails from "./components/results/ItemDetails";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://the-beatles-api.herokuapp.com/api/v1/albums")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);

  console.log(apiData);

  return (
    <div className="container">
      <Header></Header>
      <SearchResults />
      <ItemDetails />
    </div>
  );
}

export default App;
