import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./Slides.module.css";

const Slides = (props) => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      transitionTime={800}
      infiniteLoop={true}
      className={classes["main-slider"]}
    >
      {props.slides.HeroSlider.map((slide) => {
        return (
          <div style={{ background: slide.sliderBack }} key={slide.id}>
            <div
              className={`slide-${slide.id} ${classes["slider_img-container"]} `}
            >
              <img src={slide.sliderImg} alt={slide.sliderAlt} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slides;
