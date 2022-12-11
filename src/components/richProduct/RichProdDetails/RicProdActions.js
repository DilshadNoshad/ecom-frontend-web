import React, { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import QuantityController from "../../UI/quantityController/QuantityController";
import RicProdQuantity from "./RicProdQuantity";
import { cartAction } from "../../../Store/cart-slice";
import Button from "../../UI/buttons/Button";
import classes from "./RicProdActions.module.css";
import { checkoutAction } from "../../../Store/checkout-slice";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Store/auth-context";
import { uiActions } from "../../../Store/ui-slice";
import { sendCartData } from "../../../Store/cart-actions";
const RicProdActions = (props) => {
  const [quantityValue, setQuantityValue] = useState(1);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const amountInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddQuantityHandler = () => {
    setQuantityValue((preQuantity) => preQuantity + 1);
  };
  const RemoveQuantityHandler = () => {
    if (quantityValue > 1) {
      setQuantityValue((preQuantity) => preQuantity - 1);
    }
  };
  const addItemToCheckoutHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    dispatch(
      checkoutAction.addItemToCheckout({
        id: props.productId,
        name: props.productTitle,
        price: props.productPrice,
        totalPrice: props.productPrice * +enteredAmount,
        thumbnail: props.productThumbnail,
        quantity: +enteredAmount,
      })
    );
    dispatch(uiActions.OpenAuthPop());

    if (isLoggedIn) {
      navigate("/checkout");
    }
  };

  const addItemToCartHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    dispatch(
      cartAction.addItemToCart({
        productId: props.productId,
        productName: props.productTitle,
        productFinalPriceWithTax: props.productPrice,
        totalPrice: props.productPrice * +enteredAmount,
        productImgUrl: props.productThumbnail,
        productQty: +enteredAmount,
      })
    );

    console.log(props.productPrice * +enteredAmount);
    // dispatch(
    //   sendCartData({
    //     productId: props.productId,
    //     productName: props.productTitle,
    //     productDesc: "test",
    //     shippingCost: 5,
    //     shippingTax: 0,
    //     shippingTtl: 10,
    //     productPrice: 90,
    //     productCost: 70,
    //     productTax: 5,
    //     productFinalPriceWithTax: props.productPrice,
    //     productFinalPriceWithoutTax: 100,
    //     productOtherTax: 0,
    //     productQty: +enteredAmount,
    //     vendorId: null,
    //     vendorName: null,
    //     cartDetailStatus: 1,
    //     cartId: 4,
    //     productImgUrl: props.productThumbnail,
    //   })
    // );
  };

  return (
    <form>
      <RicProdQuantity>
        <QuantityController
          ref={amountInputRef}
          onAdd={AddQuantityHandler}
          onRemove={RemoveQuantityHandler}
          input={{
            id: "amount" + props.productId,
            type: "text",
            step: 1,
            min: 1,
            max: 5,
            readOnly: true,
            value: quantityValue,
          }}
        />
      </RicProdQuantity>
      <div className={classes.ProductBtnActions}>
        <Button
          // onClick={}
          onClick={addItemToCheckoutHandler}
          type="submit"
          className={classes["md-buy-button"]}
        >
          BUY NOW
        </Button>
        <Button
          onClick={addItemToCartHandler}
          type="submit"
          className={classes["md-cart-button"]}
        >
          ADD TO CART
        </Button>
      </div>
    </form>
  );
};

export default RicProdActions;
