import React, { useState } from "react";
import classes from "./ItemPreview.module.css";
// import IMAGES from "../../data/images.js";

const ItemPreview = (props) => {
  const [clickedItem, setClickedItem] = useState({});
  const itemSelectHandler = (e) => {
    e.preventDefault();
    setClickedItem({
      id: props.itemId,
      name: props.name,
      releaseDate: new Date(props.date).getFullYear(),
      genre: props.genre,
    });
  };

  console.log(clickedItem);

  props.onSelectItem(clickedItem);

  return (
    <li onClick={itemSelectHandler} className={classes.preview}>
      <a className={classes["preview__link"]} href="#">
        <figure className={classes["preview__fig"]}>
          <img
            src={require(`../../assets/img${props.imageSource}.jpg`)}
            alt="The Beatles Album"
          ></img>
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
