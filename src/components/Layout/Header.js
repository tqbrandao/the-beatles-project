import React from "react";
import classes from "./Header.module.css";
import Search from "./Search";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>
          The Beatles <br></br> Archive
        </h1>
      </div>
      <Search></Search>
    </div>
  );
};

export default Header;
