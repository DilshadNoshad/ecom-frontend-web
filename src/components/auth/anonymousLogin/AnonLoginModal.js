import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import Modal from "../../UI/modal/Modal";
import Login from "../login/Login";
import AnonLoginBtn from "./AnonLoginBtn";
import classes from "./AnonLoginModal.module.css";

const AnonLoginModal = () => {
  const dispatch = useDispatch();

  const CloseAuthPopHandler = () => {
    dispatch(uiActions.CloseAuthPop());
  };
  return (
    <Modal onClose={CloseAuthPopHandler}>
      <div className={classes.actions}>
        <div className={classes["close-btn"]} onClick={CloseAuthPopHandler}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
      </div>
      <Login />
      <span>OR</span>
      <AnonLoginBtn />
    </Modal>
  );
};

export default AnonLoginModal;
