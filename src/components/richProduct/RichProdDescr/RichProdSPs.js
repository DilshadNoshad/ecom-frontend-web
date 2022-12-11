import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import LoadingSpinner from "../../UI/loadingSpinner/LoadingSpinner";
import RichProdSP from "../RichProdDescrSP/RichProdSP";
import { getAllProducts } from "../../../Services/products";
const RichProdSPs = (props) => {
  const {
    sendRequest,
    status,
    error,
    data: productsData,
  } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (status === "completed" && productsData && productsData.length > 0) {
    content = (
      <RichProdSP productItems={productsData} to={props.to} from={props.from} />
    );
  }
  if (status === "completed" && (!productsData || productsData.length === 0)) {
    content = <p className="centered">Found no products.</p>;
  }
  if (error) {
    content = <div className="centered focused">{error}</div>;
  }
  if (status === "pending") {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default RichProdSPs;
