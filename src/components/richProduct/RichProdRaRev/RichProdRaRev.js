import React from "react";
import RichProdSPs from "../RichProdDescr/RichProdSPs";
import RichProductLayout from "../RichProductLayout";
import RichProdRaRevCont from "./RichProdRaRevCont";

const RichProdRaRev = (props) => {
  const rightBox = <RichProdRaRevCont rate={props.rating} />;

  const leftBox = <RichProdSPs to={13} from={15} />;

  return (
    <div id="product_Rr-wrap">
      <section>
        <RichProductLayout
          title={`Ratings & Reviews of ${props.title}`}
          rightContent={rightBox}
          leftContent={leftBox}
        />
      </section>
    </div>
  );
};

export default RichProdRaRev;
