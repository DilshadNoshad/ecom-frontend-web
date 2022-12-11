import React from "react";
import renderHTML from "react-render-html";
import classes from "./RichProdDescrCont.module.css";
const RichProdDescrCont = (props) => {
  return (
    <div className={classes["pd-mod-content_desc"]}>
      <div className={classes["content_desc-maxheight"]}>
        {renderHTML(props.description)}
      </div>
    </div>
  );
};

export default RichProdDescrCont;
