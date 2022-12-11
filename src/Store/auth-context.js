import React, { useState } from "react";
import { User } from "../entities/user";

const AuthContext = React.createContext({
  userSessionId: "",
  //username: "",
  isLoggedIn: false,
  userData: {},
  login: (
    userSessionId,
    //email, mobile, username,
    userData
  ) => {},
  anonlogin: (userSessionId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialUserSessionId = localStorage.getItem("userSessionId");

  let initialUserdata;

  if (localStorage.getItem("user")) {
    initialUserdata = JSON.parse(localStorage.getItem("user"));
  } else {
    initialUserdata = false;
  }

  const [userSessionId, setUserSessionId] = useState(initialUserSessionId);
  const [userData, setUserData] = useState(initialUserdata);
  // const [user, setUser] = useState(initialUserdata);

  const userIsLoggedIn = !!userSessionId;

  const logoutHandler = () => {
    setUserSessionId(null);
    setUserData({});
    localStorage.removeItem("userSessionId");
    localStorage.removeItem("user");
  };

  const loginHandler = (
    userSessionId,
    //email, mobile, username,
    userData
  ) => {
    setUserSessionId(userData.userSessionId);
    //const userlsData = JSON.stringify({ user: username, email: email });
    // setUser(userData);
    console.log("-------------login handler--------------");
    console.log(
      `token: ${userData.userSessionId}, userName: ${userData.username}, email: ${userData.email} `
    );
    localStorage.setItem("userSessionId", userData.userSessionId);
    localStorage.setItem("user", JSON.stringify(userData));
    setUserData(userData);
  };

  const loginAnonHandler = (userSessionId) => {
    setUserSessionId(userSessionId);
    const username = `guest${Math.floor(100000 + Math.random() * 9000)}`;
    const userlsData = JSON.stringify({ user: username });
    // setUser(userlsData);
    localStorage.setItem("userSessionId", userSessionId);
    localStorage.setItem("user", userlsData);
  };

  const contextValue = {
    userSessionId: userSessionId,
    //username: user,
    isLoggedIn: userIsLoggedIn,
    userData: userData,
    login: loginHandler,
    logout: logoutHandler,
    anonlogin: loginAnonHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
