import React from "react";
import classes from "./ItemPreview.module.css";
import img from "../../assets/abbey-road.jpg";

const ItemPreview = (props) => {
  return (
    <li className={classes.preview}>
      <a className={classes["preview__link"]} href="1">
        <figure className={classes["preview__fig"]}>
          <img src={img} alt="abbey"></img>
        </figure>
        <div className={classes["preview__data"]}>
          <h4 className={classes["preview__title"]}>{props.name}</h4>
          <p className={classes["preview__year"]}>
            {new Date(props.date).getFullYear()}
          </p>
        </div>
      </a>
    </li>
  );
};

export default ItemPreview;
