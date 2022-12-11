import React, { useContext, useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { AnonSignInUser } from "../../../Services/auth";
import AuthContext from "../../../Store/auth-context";
import Button from "../../UI/buttons/Button";
import classes from "./AnonLoginBtn.module.css";

const AnonLoginBtn = () => {
  const authCtx = useContext(AuthContext);

  const {
    sendRequest,
    status,
    data: userAuth,
    error,
  } = useHttp(AnonSignInUser);

  useEffect(() => {
    if (status === "completed" && !error) {
      // console.log(userAuth);
      authCtx.anonlogin(userAuth.idToken);
    }
    if (status === "completed" && error) {
      alert(error);
    }
  }, [status, error, userAuth]);

  const anonSignInHandler = (event) => {
    event.preventDefault();

    sendRequest({
      returnSecureToken: true,
    });
  };
  return (
    <Button
      className={classes["md-Anon-signin-button"]}
      onClick={anonSignInHandler}
    >
      LOGIN AS A GUEST
    </Button>
  );
};

export default AnonLoginBtn;
