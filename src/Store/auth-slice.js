import { createSlice } from "@reduxjs/toolkit";

const initialUserSessionId = localStorage.getItem("userSessionId");
const initialUsername = JSON.parse(localStorage.getItem("user")).username;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userSessionId: initialUserSessionId,
    isloggedIn: false,
    userName: initialUsername,
  },
  reducers: {
    login(state, action) {
      const userSessionId = action.payload.userSessionId;
      const username = action.payload.username;

      state.userSessionId = userSessionId;
      state.userName = username;

      state.isloggedIn = !!state.userSessionId;

      localStorage.setItem("userSessionId", state.userSessionId);
      localStorage.setItem("user", state.userName);
    },
    useIsLoggedIn(state, action) {
      const userSessionId = action.payload;
      state.isloggedIn = !!userSessionId;
    },
    logout(state) {
      state.userSessionId = null;
      state.isloggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("userSessionId");
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
