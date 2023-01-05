import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Layout from "../UI/layout/Layout";
import FlashSaleBody from "./FlashSaleBody";
import classes from "./FlashSale.module.css";
import FlashSaleHeader from "./FlashSaleHeader";
import { getAllFlashProducts } from "../../Services/products";
import LoadingSpinner from "../UI/loadingSpinner/LoadingSpinner";

const FlashSale = () => {
  const {
    sendRequest,
    status,
    data: flashProductsData,
    error,
  } = useHttp(getAllFlashProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }
  if (
    status === "completed" &&
    (!flashProductsData || flashProductsData.length === 0)
  ) {
    return <p>Found no products.</p>;
  }

  console.log(flashProductsData, "-flashsale-");

  return (
    <Layout sectionId="flash-sale" title="Flash Sale">
      <div className={classes["flash-sale_cointainer"]}>
        <FlashSaleHeader />
        <FlashSaleBody fetchData={flashProductsData} />
      </div>
    </Layout>
  );
};

export default FlashSale;
