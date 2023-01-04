import React from "react";
import ReactImageMagnify from "react-image-magnify";
import classes from "./RicProdImgView.module.css";
const RicProdImgView = (props) => {
  let content;
  if (props.productImgType === "image") {
    content = (
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "",
            isFluidWidth: true,
            src: props.productImg,
          },
          largeImage: {
            src: props.productImg,
            width: 1000,
            height: 1000,
          },
          enlargedImageContainerDimensions: {
            width: "279%",
            height: "150%",
          },
          // isHintEnabled: true,
          shouldUsePositiveSpaceLens: true,
        }}
      />
    );
  }
  if (props.productImgType === "video") {
    content = (
      <video controls={true}>
        <source src={props.productImg} type="video/mp4" />
      </video>
    );
  }
  return (
    <div className={classes["product_gallery"]}>
      <div className="product_panel">
        <div className={classes["product_preview"]}>
          {/* <img src={props.productImg} alt="" /> */}

          {content}
        </div>
      </div>
    </div>
  );
};

export default RicProdImgView;
