import React from "react";
import { Link } from "react-router-dom";
import { Currency } from "../../../../config";
import Button from "../../../UI/buttons/Button";
import classes from "./OrderItem.module.css";
const OrderItem = (props) => {
  const { id, title, quantity, price, thumbnail } = props.item;
  return (
    <div className={classes.ois_wrap}>
      <div className={classes.ois_seller_wrap}>
        <div className={classes.vandor_detail}>
          <div className={classes.vendor_icon}>
            <ion-icon name="storefront-outline"></ion-icon>
          </div>
          <div className={classes.vendor_name}>SolCoffeeRoastery</div>
          <div className={classes.vendor_chat_link}>
            <Button className={classes["vendor-button--primary"]}>
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              <span>chat</span>
            </Button>
          </div>
          <div className={classes.vendor_shop_link}>
            <Link to="#" className={classes["vendor-button--secondary"]}>
              <span>view shop</span>
            </Link>
          </div>
        </div>
        <div className={classes.shopinfo}>
          <ion-icon name="information-circle-outline"></ion-icon>
        </div>
      </div>
      <div className={classes.ois_bord_btm}></div>
      <div className={classes.ois_item_wrap}>
        <div className={classes.ois_item}>
          <Link to={`/product/${id}`}>
            <div className={classes.ois_item_cont}>
              <div className={classes.ois_item_image}>
                <div className={classes.ois_item_image_wrapper}>
                  <img
                    src={
                      thumbnail === null ||
                      thumbnail === undefined ||
                      thumbnail === ""
                        ? "https://southwesttrainingsolutions.co.uk/wp-content/uploads/2020/07/no-image.png"
                        : thumbnail
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className={classes.ois_item_cont_h}>
                <div>
                  <div className={classes.ois_item_title}>
                    <span>{title}</span>
                  </div>
                </div>
                <div>
                  <div className={classes.ois_item_var}>
                    Variation: Fine,500g
                  </div>
                  <div className={classes.ois_item_qty}>x{quantity}</div>
                </div>
              </div>
            </div>
            <div className={classes.ois_item_price}>
              <span className={classes.ois_item_disprice}>RM40.00</span>
              <span className={classes.ois_item_curprice}>
                {Currency}
                {price}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
