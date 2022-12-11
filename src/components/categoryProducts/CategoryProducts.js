import React, { Fragment, useEffect } from "react";
import classes from "./CategoryProducts.module.css";
import CatProdBrands from "./catProdBrands/CatProdBrands";
import catBrandsData from "../../JSON/categorybrands.json";
import CatProdFilters from "./catProdFilter/CatProdFilters";
import CatProdTopbar from "./catProdTopbar/CatProdTopbar";
import CategoryProduct from "./categoryProduct/CategoryProduct";
import useHttp from "../../hooks/use-http";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../../Services/categories";
import LoadingSpinner from "../UI/loadingSpinner/LoadingSpinner";

const CategoryProducts = () => {
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
    content = (
      <Fragment>
        <section>
          <CatProdBrands data={catBrandsData.CategoryBrands} />
        </section>
        <section>
          <div className={classes.row}>
            <div className={classes.col4}>
              <CatProdFilters catname={categoryName} />
            </div>
            <div className={classes.col8}>
              <CatProdTopbar catname={categoryName} catlength={catproduct.length} />
              <CategoryProduct productItems={catproduct} />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
  if (status === "completed" && (!catproduct || catproduct.length === 0)) {
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
  return <div>{content}</div>;
};

export default CategoryProducts;
