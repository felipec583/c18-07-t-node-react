import axios from "axios";
import { useRutes } from "./useRutes";
import { useDispatch } from "react-redux";
import {
  login,
  logout,
  setMail,
  setPassword,
  setToken,
  setUser,
  setUsername,
} from "../redux/userSlice";

const useUser = () => {
  const dispatch = useDispatch();
  const { goToHome, goToLogin } = useRutes();

  const handleGoogleLogin = async (values) => {
    try {
      const { success, token, user } = values
      dispatch(setUser(user));
      dispatch(login());
      localStorage.setItem("token", token);
      goToHome();
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogin = async (values) => {
    try {
      const response = await axios.post(
        "https://c18-07-t-node-react-rcb1.onrender.com/api/auth/login",
        values
      );
      if (response) {
        const { username, email, password, token, ...rest } = response.data;
        dispatch(setUser(rest));
        dispatch(setUsername(username));
        dispatch(setPassword(password));
        dispatch(setMail(email));
        dispatch(setToken(token));
        dispatch(login());
        localStorage.setItem("token", token);
        goToHome();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (values) => {
    try {
      const response = await axios.post(
        "https://c18-07-t-node-react-rcb1.onrender.com/api/auth/register",
        values
      );
      if (response) {
        console.log(response.data);
        goToLogin();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    dispatch(setUsername(""));
    dispatch(setPassword(""));
    dispatch(setMail(""));
    dispatch(logout());
    dispatch(setUser({}))
    localStorage.removeItem("token");
  };

  return { handleLogin, handleRegister, handleLogout, handleGoogleLogin };
};

export default useUser;
