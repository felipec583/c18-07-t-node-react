import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  username: "",
  mail: "",
  password: "",
  access: false,
  token: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    login: (state) => {
      state.access = true;
    },
    logout: (state) => {
      state.access = false;
    },
  },
});
export const getAccess = (state) => state.user.access;
export const getToken = (state) => state.user.token;
export const getMail = (state) => state.user.mail;
export const getPassword = (state) => state.user.password;
export const getUsername = (state) => state.user.username;
export const getUser = (state) => state.user.user;
export const {
  setUser,
  setUsername,
  setMail,
  setPassword,
  setToken,
  login,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
