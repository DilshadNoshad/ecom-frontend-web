import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getProductDetail } from "../../Services/productDetail";
import BreadCrumbs from "../UI/breadcrumbs/BreadCrumbs";
import LoadingSpinner from "../UI/loadingSpinner/LoadingSpinner";
import RichProdDescr from "./RichProdDescr/RichProdDescr";
import RicProdDetails from "./RichProdDetails/RicProdDetails";
import RicProdImgView from "./RichProdLeftPanel/RicProdImgView";
import RicProdDlvrDetsWrap from "./RichProdRightPanel/RicProdDlvrDetsWrap";
import classes from "./RichProduct.module.css";

import JSONData from "../../JSON/productDesc.json";
import RichProdRaRev from "./RichProdRaRev/RichProdRaRev";
const RichProductDetails = () => {
  const params = useParams();
  const { productId } = params;
  const previewImg = useSelector((state) => state.ui.selectedImg);
  const {
    sendRequest,
    status,
    data: productDetailData,
  } = useHttp(getProductDetail, true);

  useEffect(() => {
    sendRequest(productId);
  }, [sendRequest, productId]);

  let content;

  if (status === "completed" && productDetailData) {
    content = (
      <Fragment>
        <BreadCrumbs
          productCat={productDetailData.category}
          productTitle={productDetailData.title}
        />
        <div id={classes.product}>
          <section>
            <div className={classes["product_wrapper"]}>
              <RicProdImgView
                productImg={productDetailData.images[previewImg]}
              />
              <RicProdDetails productData={productDetailData} />
              <RicProdDlvrDetsWrap />
            </div>
          </section>

          <RichProdDescr
            title={productDetailData.title}
            description={JSONData.description_html2}
          />
          <RichProdRaRev
            title={productDetailData.title}
            rating={productDetailData.rating}
          />
        </div>
      </Fragment>
    );
  }
  if (status === "completed" && !productDetailData) {
    content = <p className="centered">Found no products.</p>;
  }
  // if (error) {
  //   content = <div className="centered focused">{error}</div>;
  // }
  if (status === "pending") {
    content = (
      <div className={classes.loading}>
        <LoadingSpinner />
      </div>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default RichProductDetails;
