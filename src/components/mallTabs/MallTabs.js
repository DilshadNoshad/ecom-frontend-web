import React from "react";
import Layout from "../UI/layout/Layout";
import MallTabsList from "./MallTabsList";

const MallTabs = (props) => {
  return (
    <Layout sectionId="mall_Tabs" title="">
      <MallTabsList mallTabsItems={props.mallTabs} />
    </Layout>
  );
};

export default MallTabs;
