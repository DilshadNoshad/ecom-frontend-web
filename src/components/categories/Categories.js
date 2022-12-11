import React from "react";
import Layout from "../UI/layout/Layout";
import CategoriesList from "./CategoriesList";

const Categories = (props) => {
  return (
    <Layout sectionId="categories_tabs" title="Categories">
      <CategoriesList categoriesItems={props.categories} />
    </Layout>
  );
};

export default Categories;
