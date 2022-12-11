import React from "react";

import RicProdActions from "./RicProdActions";
import classes from "./RicProdDetails.module.css";
import RicProdHead from "./RicProdHead";
import RicProdPricing from "./RicProdPricing";
import RicProdVariants from "./RicProdVariants";
const RicProdDetails = (props) => {
  const {
    id: richProdId,
    title: richProdTitle,
    rating: richProdRating,
    thumbnail: richProdThumbnail,
    price: richProdPrice,
    discountPercentage: richProdDcPer,
    price: richProdDelPrice,
    brand: richProdBrand,
    images: richProdImages,
  } = props.productData;

  return (
    <div className={classes["product_details"]}>
      <RicProdHead
        productTitle={richProdTitle}
        productRating={richProdRating}
        productBrand={richProdBrand}
      />
      <RicProdPricing
        productPrice={richProdPrice}
        productDiscount={richProdDcPer}
        productDelPrice={richProdDelPrice}
      />
      <div className="product_info-section">
        <RicProdVariants productThumbnail={richProdImages} />

        <RicProdActions
          productId={richProdId}
          productTitle={richProdTitle}
          productPrice={richProdPrice}
          productThumbnail={richProdThumbnail}
        />
      </div>
    </div>
  );
};

export default RicProdDetails;
