import React from "react";

const RicProdQuantity = (props) => {
  return (
    <div className="product_selector">
      <div className="product_select">
        <h6 className="section-title">Quatity</h6>
      </div>
      <div className="product_select_details">
        <div className="product_select_body">{props.children}</div>
      </div>
    </div>
  );
};

export default RicProdQuantity;
