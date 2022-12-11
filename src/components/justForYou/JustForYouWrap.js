import React, { Fragment } from "react";
import useLoadMore from "../../hooks/use-loadmore";
import OutlineButton from "../UI/buttons/OutlineButton";
import Product from "../UI/product/Product";
import classes from "./JustForYouWrap.module.css";

const JustForYouWrap = (props) => {
  const {
    isVisible,
    dataLoaded,
    loadMore: loadMoreHandlers,
  } = useLoadMore(24, props.productItems);

  // useEffect(() => {
  //   loadMore();
  // }, [loadMore]);

  // const [isVisible, setIsVisible] = useState(24);
  // const [dataLoaded, setDataLoaded] = useState(false);

  // const loadMore = () => {
  //   setIsVisible((previousState) => previousState + 24);
  //   if (isVisible >= productCxt.productItems.length) {
  //     setDataLoaded(true);
  //   }
  // };

  return (
    <Fragment>
      <div className={classes["row_cointainer"]}>
        {props.productItems.slice(0, isVisible).map((product) => {
          return (
            <Product
              key={product.id}
              prodId={product.id}
              prodThumbnail={product.thumbnail}
              prodTitle={product.title}
              prodPrice={product.price}
              prodDiscountPct={product.discountPercentage}
              prodRating={product.rating}
            />
          );
        })}
      </div>
      {!dataLoaded && (
        <div className={classes.card_loadMoreButton}>
          <OutlineButton
            className={classes.loadMoreButton}
            type="button"
            onClick={loadMoreHandlers}
          >
            load More
          </OutlineButton>
        </div>
      )}
    </Fragment>
  );
};

export default JustForYouWrap;
