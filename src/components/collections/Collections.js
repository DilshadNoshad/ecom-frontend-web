import React from "react";
import Layout from "../UI/layout/Layout";
import CollectionsList from "./CollectionsList";

const Collections = (props) => {
  return (
    <Layout
      sectionId="collections"
      title="Collections"
      advanceLayout="Show More"
    >
      <CollectionsList categoriesItems={props.collections} />
    </Layout>
  );
};

export default Collections;
