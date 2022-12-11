import React from "react";
import ReactImageMagnify from "react-image-magnify";
import classes from "./RicProdImgView.module.css";
const RicProdImgView = (props) => {
  return (
    <div className={classes["product_gallery"]}>
      <div className="product_panel">
        <div className={classes["product_preview"]}>
          {/* <img src={props.productImg} alt="" /> */}
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
        </div>
      </div>
    </div>
  );
};

export default RicProdImgView;
