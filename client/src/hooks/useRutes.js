import { useNavigate } from "react-router-dom";

export const useRutes = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const goToRegister = () => navigate("/register");
  const goToLogin = () => navigate("/login");
  return { goToHome, goToRegister, goToLogin };
};
