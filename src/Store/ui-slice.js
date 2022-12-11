const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
  name: "ui",
  initialState: { authPopUpIsVisible: false, selectedImg: 0 },
  reducers: {
    OpenAuthPop(state) {
      state.authPopUpIsVisible = true;
    },
    CloseAuthPop(state) {
      state.authPopUpIsVisible = false;
    },
    SelectedImg(state, action) {
      state.selectedImg = action.payload;
    },
    ResetSelectedImg(state) {
      state.selectedImg = 0;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
