import React from "react";
import { Link } from "react-router-dom";

const Shop_BrandingImg = (props) => {
  return (
    <div className="PYVDkQ" style={{ height: "auto", margin: "24px 0 " }}>
      <div className="_3PNf4u">
        <Link to="#">
          <div className="nHUlre _2qFzDI">
            <img
              className="_1VkjPD _1KQ1MG"
              style={{ objectFit: "contain", width: "100%" }}
              src={props.image}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Shop_BrandingImg;
