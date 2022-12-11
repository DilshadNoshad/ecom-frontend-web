// import { API } from "../../config";
import React from "react";
import LoadingSpinner from "../UI/loadingSpinner/LoadingSpinner";
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Layout from "../UI/layout/Layout";
import JustForYouWrap from "./JustForYouWrap";
import { getAllProducts } from "../../Services/products";

const JustForYou = () => {
  const {
    sendRequest,
    status,
    data: productsData,
    error,
  } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (status === "completed" && productsData && productsData.length > 0) {
    content = <JustForYouWrap productItems={productsData} />;
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

  return (
    <Layout sectionId="just-for_u" title="Just For You">
      {content}
    </Layout>
  );
};

export default JustForYou;
