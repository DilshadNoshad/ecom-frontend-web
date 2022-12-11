import React, { Fragment } from "react";
import categoriesData from "../JSON/categories.json";
import collectionsData from "../JSON/collections.json";
import MallTabsData from "../JSON/malltabs.json";
import sliderData from "../JSON/sliderdata.json";
import Categories from "../components/categories/Categories";
import Collections from "../components/collections/Collections";
import MallTabs from "../components/mallTabs/MallTabs";
import JustForYou from "../components/justForYou/JustForYou";
import FlashSale from "../components/flashSale/FlashSale";
import HeroSlider from "../components/heroSlider/HeroSlider";
import MostPopular from "../components/mostPopular/MostPopular";

const LandingPage = () => {
  return (
    <Fragment>
      <HeroSlider slides={sliderData} />
      <MallTabs mallTabs={MallTabsData} />
      <FlashSale />
      <MostPopular />
      <Collections collections={collectionsData} />
      <Categories categories={categoriesData} />
      <JustForYou />
    </Fragment>
  );
};

export default LandingPage;
