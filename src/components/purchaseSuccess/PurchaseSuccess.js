import React, { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../Store/auth-context";
import PurchaseSummary from "./PurchaseSummary";
import SuccessMsg from "./SuccessMsg";

const PurchaseSuccess = () => {
  const checkoutItems = useSelector((state) => state.checkout.checkoutItems);
  const authCtx = useContext(AuthContext);

  // const userDataParse = JSON.parse(authCtx.username);
  // const loggedInEmail = userDataParse.email;
  const loggedInEmail = authCtx.userData.email;

  const checkoutItemsTotal = useSelector(
    (state) => state.checkout.checkoutTotalAmount
  );
  return (
    <div id="buy_successfully">
      <section>
        <SuccessMsg orderedTotal={checkoutItemsTotal} />
        <PurchaseSummary
          orderedItems={checkoutItems}
          orderedTotal={checkoutItemsTotal}
          orderedUserEmail={loggedInEmail}
        />
      </section>
    </div>
  );
};

export default PurchaseSuccess;
