import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import classes from "./Search.module.css";
import { BsSearch } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Search = () => {
  const [enteredInput, setEnteredInput] = useState("");

  const inputChangeHandler = (e) => {
    setEnteredInput(e.target.value);
  };

  console.log(enteredInput);

  return (
    <div className={classes["search-container"]}>
      <form className={classes.search}>
        <input
          className={classes["search-field"]}
          type="text"
          placeholder="Search for an album or song"
          onChange={inputChangeHandler}
          value={enteredInput}
        ></input>
        <Button>
          <BsSearch className={classes["search-icons"]} /> Search
        </Button>
      </form>
      <Button className={classes["btn-random"]}>
        <GiPerspectiveDiceSixFacesRandom className={classes["search-icons"]} />{" "}
        Random
      </Button>
    </div>
  );
};

export default Search;
