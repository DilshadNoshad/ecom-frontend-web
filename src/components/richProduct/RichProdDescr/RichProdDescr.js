import React from "react";
import RichProductLayout from "../RichProductLayout";
import RichProdDescrCont from "./RichProdDescrCont";
import RichProdSPs from "./RichProdSPs";
const RichProdDescr = (props) => {
  const rightBox = (
    <RichProdDescrCont title={props.title} description={props.description} />
  );
  const leftBox = <RichProdSPs to={25} from={28} />;

  return (
    <div id="product_desc-wrap">
      <section>
        <RichProductLayout
          title={`Product details of ${props.title}`}
          rightContent={rightBox}
          leftContent={leftBox}
        />
      </section>
    </div>
  );
};

export default RichProdDescr;
