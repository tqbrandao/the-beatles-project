import React, { useState, useEffect } from "react";
import "./fonts/BOOTLE.ttf";
import "./App.css";
import Header from "./components/layout/Header";
import SearchResults from "./components/results/SearchResults";
import ItemDetails from "./components/results/ItemDetails";

function App() {
  const [apiData, setApiData] = useState([]);
  const [queryData, setQueryData] = useState("");

  useEffect(() => {
    fetch("https://the-beatles-api.herokuapp.com/api/v1/albums")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);

  const searchDataHandler = (searchInput) => {
    setQueryData(searchInput);
    // console.log(searchInput);
  };

  apiData.splice(38, 4);

  const filteredData = apiData.filter((el) =>
    el.albumName.toLowerCase().includes(queryData.toLowerCase())
  );

  let currentItem = {};

  const itemSelectionHandler = (item) => {
    currentItem = item;
  };

  console.log(currentItem);

  return (
    <div className="container">
      <Header onSearchData={searchDataHandler}></Header>
      <SearchResults
        filteredData={filteredData}
        onItemSelection={itemSelectionHandler}
      />
      <ItemDetails currentItem={currentItem} />
    </div>
  );
}

export default App;
