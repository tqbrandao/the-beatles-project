import React from "react";
import Button from "../UI/Button";
import classes from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <form className={classes.search}>
      <input
        className={classes["search-field"]}
        type="text"
        placeholder="Search for an album or song"
      ></input>
      <BsSearch></BsSearch>
      <Button>Testes</Button>
    </form>
  );
};

export default Search;
