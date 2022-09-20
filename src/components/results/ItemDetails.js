import React from "react";
import classes from "./ItemDetails.module.css";
import { BsCalendar2Fill } from "react-icons/bs";
import { BsMusicNoteBeamed } from "react-icons/bs";

const ItemDetails = (props) => {
  console.log(props.currentItem.name);
  return (
    <div className={classes["details-container"]}>
      <div className={classes.card}>
        <h1>{props.currentItem.name}</h1>
        <p>
          Abbey Road is the 11th studio album released by the English rock band
          the Beatles. It is the last album the group started recording,
          although Let It Be was the last album completed before the band's
          break-up.
        </p>
        <ul>
          <li>
            <BsCalendar2Fill /> Release date: 1969
          </li>
          <li>
            <BsMusicNoteBeamed /> Genre: Rock
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
