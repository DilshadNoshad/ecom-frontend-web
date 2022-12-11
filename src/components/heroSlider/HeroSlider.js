import React from "react";
import CatDropList from "../categoriesList/CatDropList";
import Slides from "../slides/Slides";
import classes from "./HeroSlider.module.css";
const HeroSlider = (props) => {
  return (
    <div className={classes["hero_slider"]}>
      <Slides slides={props.slides} />
      <CatDropList />
    </div>
  );
};

export default HeroSlider;
