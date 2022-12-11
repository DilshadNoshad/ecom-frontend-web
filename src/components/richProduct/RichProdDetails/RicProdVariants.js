import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import classes from "./RicProdVariants.module.css";
const RicProdVariants = (props) => {
  const dispatch = useDispatch();
  const selectedImgRef = useRef([]);
  selectedImgRef.current = [];

  const selctedImgHandler = (index) => {
    dispatch(uiActions.SelectedImg(index));
    selectedImgRef.current[index].classList.add(classes["active"]);
    for (var i = 0; i < props.productThumbnail.length; i++) {
      if (index !== i) {
        selectedImgRef.current[i].classList.remove(classes["active"]);
      }
    }
  };

  useEffect(() => {
    return () => {
      dispatch(uiActions.ResetSelectedImg());
    };
  }, [dispatch]);

  const refSelectedImgHandler = (el) => {
    if (el && !selectedImgRef.current.includes(el)) {
      selectedImgRef.current.push(el);
    }
    // console.log(selectedImgRef.current);
  };
  return (
    <div className="Product_Variants">
      <div className="product_selector">
        <div className="product_select">
          <h6 className="section-title">Color</h6>
        </div>
        <div className="product_select_details">
          <div className="product_select_header">
            <span>black</span>
          </div>
          <div className="product_select_body">
            {props.productThumbnail.map((prodImgs, i) => (
              <span key={i} onClick={() => selctedImgHandler(i)}>
                <div
                  className={
                    i === 0
                      ? `${classes["product_img-select"]} ${classes["active"]}`
                      : classes["product_img-select"]
                  }
                  ref={refSelectedImgHandler}
                >
                  <img src={prodImgs} alt="" />
                </div>
              </span>
            ))}

            <span>
              <div className="product_img-select">
                <img
                  src=""
                  alt=""
                  // onClick={}
                />
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="product_selector">
        <div className="product_select">
          <h6 className="section-title">promotions</h6>
        </div>
        <div className="product_select_details" />
      </div>
    </div>
  );
};

export default RicProdVariants;
