import React from "react";
import classes from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={classes["search_wrap"]}>
      <form className={classes["search_box"]}>
        <input
          type="text"
          className={classes["search_input"]}
          placeholder="Search in muradi"
          //   onChange={(e) => onChangeHandler(e.target.value)}
          //   value={text}
          //   onBlur={() => {
          //     setTimeout(() => {
          //       setSuggestion([]);
          //     }, 300);
          //   }}
        />
        <button className={classes["search-box_button"]}>
          <ion-icon data-muradi-ico="search_ico" name="search-outline" />
        </button>
      </form>
      {/* <div className="autocomplete">
        {suggestion &&
          suggestion.map((suggestions, i) => (
            <div
              className="autocomplete-item"
              key={i}
              onClick={() => onSuggestHandler(suggestions.title)}
            >
              {suggestions.title}
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default SearchBar;
