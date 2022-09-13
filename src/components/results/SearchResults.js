import React, { useState } from "react";
import ItemPreview from "./ItemPreview";
import classes from "./SearchResults.module.css";

const SearchResults = () => {
  // const [resultList, setResultList] = useState([]);

  const resultListHandler = (result) => {
    // setResultList((prevResults) => [...prevResults, result]);
  };

  return (
    <div className={classes["search-results"]}>
      <ul className={classes.results}>
        <ItemPreview />
      </ul>
    </div>
  );
};

export default SearchResults;
