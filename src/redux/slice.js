import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: false,
  isOpenInfoOverlay: false,
  noOfItemInCart: 0,
  usersData: {
    name: "Abhishek",
    mobileNo: "",
  },
  isShowUserInfo: false,
  searchedData: "",
  fetchSearch: [],
};
const userSlices = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUsersData(state, action) {
      state.usersData = action.payload;
    },
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setIsOpenInfoOverlay(state, action) {
      state.isOpenInfoOverlay = action.payload;
    },
    setNoOfItemInCart(state, action) {
      state.isOpenInfoOverlay = action.payload;
    },
    setIsShowUserInfo(state, action) {
      state.isShowUserInfo = action.payload;
    },
    setSearchedData(state, action) {
      state.searchedData = action.payload;
    },
    setFetchSearch(state, action) {
      state.fetchSearch = action.payload;
    },
  },
});

export default userSlices.reducer;
export const {
  setUsersData,
  setIsLogin,
  setIsOpenInfoOverlay,
  setNoOfItemInCart,
  setIsShowUserInfo,
  setSearchedData,
  setFetchSearch,
} = userSlices.actions;
// export default createSlice.reducer;
