import React from "react";

import RicProdActions from "./RicProdActions";
import classes from "./RicProdDetails.module.css";
import RicProdHead from "./RicProdHead";
import RicProdPricing from "./RicProdPricing";
import RicProdVariants from "./RicProdVariants";
const RicProdDetails = (props) => {
  const {
    productId: richProdId,
    title: richProdTitle,
    productRating: richProdRating,
    thumbnail: richProdThumbnail,
    price: richProdPrice,
    discAmntValPerc: richProdDcPer,
    old_price: richProdDelPrice,
    brand: richProdBrand,
    deliveryCost: richProdDeliCost,
    deliveryTax: richProdDeliTax,
    deliveryCharges: richProdDeliChar,
    mediaList: richProdImages,
  } = props.productData;

  return (
    <div className={classes["product_details"]}>
      <RicProdHead
        productTitle={richProdTitle}
        productRating={richProdRating}
        productBrand={richProdBrand}
        productDeliverycharges={richProdDeliChar}
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
          productDeliverycost={richProdDeliCost}
          productDeliverytax={richProdDeliTax}
          productDeliverycharges={richProdDeliChar}
          productThumbnail={richProdThumbnail}
        />
      </div>
    </div>
  );
};

export default RicProdDetails;
