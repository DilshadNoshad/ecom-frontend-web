import React from "react";
import { Fragment } from "react";
import RichProdRRCom from "./RichProdRRCom/RichProdRRCom";
import RichProdRRRat from "./RichProdRRRat/RichProdRRRat";

const RichProdRaRevCont = (props) => {
  return (
    <Fragment>
      <RichProdRRRat rate={props.rate} />

      <RichProdRRCom />
    </Fragment>
  );
};

export default RichProdRaRevCont;
