import React from "react";
import { useNavigate } from "react-router-dom";
import OutlineButton from "../UI/buttons/OutlineButton";
import PurchaseSuccessItems from "./PurchaseSuccessItems";
import classes from "./PurchaseSuccessList.module.css";
const PurchaseSuccessList = (props) => {
  const navigate = useNavigate();
  const goToOrderBtnHandler = () => {
    navigate("#");
  };
  return (
    <article className={classes["delivery_dates-table"]}>
      {props.orderedItems.map((item) => (
        <PurchaseSuccessItems
          key={item.id}
          item={{
            id: item.id,
            title: item.name,
            thumbnail: item.thumbnail,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
          }}
        />
      ))}
      <div className={classes["goto_order-wrapper"]}>
        <p className={classes["goto_order-para"]}>
          For more details, track your delivery status under&nbsp;
          <strong>MY Account &gt; My Order</strong>
        </p>
        {/* <Link to={"#"} className="goto_order outline-btn">
          View Order
        </Link> */}
        <OutlineButton
          onClick={goToOrderBtnHandler}
          className={classes["gotoOrder"]}
        >
          View Order
        </OutlineButton>
      </div>
    </article>
  );
};

export default PurchaseSuccessList;
