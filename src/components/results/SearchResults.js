import React from "react";
import ItemPreview from "./ItemPreview";
import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
  const resultList = props.filteredData;

  const onSelectHandler = (item) => {
    const selectedItem = item;
    props.onItemSelection(selectedItem);
  };

  // TODO: Corrigir paginacao quando a lista for grande
  return (
    <div className={classes["search-results"]}>
      {resultList.length < 30 && (
        <ul className={classes.results}>
          {resultList.map((item) => (
            <ItemPreview
              key={item.id}
              itemId={item.id}
              imageSource={item.id}
              name={item.albumName}
              genre={item.genre}
              date={item.releaseDate}
              onSelectItem={onSelectHandler}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
