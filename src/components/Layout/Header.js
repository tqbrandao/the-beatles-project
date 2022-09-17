import React from "react";
import classes from "./Header.module.css";
import Search from "./Search";

const Header = (props) => {
  const onSearchHandler = (inputData) => {
    const searchData = inputData;
    // console.log(`ON HEADER ${searchData}`);
    props.onSearchData(searchData);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>
          The Beatles <br></br> Archive
        </h1>
      </div>
      <Search onSearch={onSearchHandler}></Search>
    </div>
  );
};

export default Header;
