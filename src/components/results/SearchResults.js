import React from "react";
import ItemPreview from "./ItemPreview";
import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
  // const [searchResultsData, setSearchResultsData] = useState([])

  // const resultListHandler = (result) => {
  //   setResultList((prevResults) => [...prevResults, result]);
  // };

  const resultList = props.filteredData;
  console.log(`In SearchResults ${resultList}`);

  return (
    <div className={classes["search-results"]}>
      <ul className={classes.results}>
        <ItemPreview />
      </ul>
    </div>
  );
};

export default SearchResults;
