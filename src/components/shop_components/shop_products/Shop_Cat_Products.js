import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { getCategoryProducts } from "../../../Services/categories";
import LoadingSpinner from "../../UI/loadingSpinner/LoadingSpinner";
import Shop_Product from "./Shop_Product";

const Shop_Cat_Products = () => {
  const params = useParams();
  const { categoryName } = params;

  const {
    sendRequest,
    status,
    data: catproduct,
  } = useHttp(getCategoryProducts, true);

  useEffect(() => {
    sendRequest(categoryName);
  }, [sendRequest, categoryName]);

  let content;

  if (status === "completed" && catproduct && catproduct.length > 0) {
    content = <Shop_Product productItems={catproduct} />;
  }
  if (status === "completed" && (!catproduct || catproduct.length === 0)) {
    content = <p className="centered">Found no products.</p>;
  }
  // if (error) {
  //   content = <div className="centered focused">{error}</div>;
  // }
  if (status === "pending") {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Shop_Cat_Products;
