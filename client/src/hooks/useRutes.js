import { useNavigate } from "react-router-dom";

export const useRutes = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const goToRegister = () => navigate("/register");
  const goToLogin = () => navigate("/login");
  const goToDescubrir = () => navigate("/descubrir");
  return { goToHome, goToRegister, goToLogin, goToDescubrir };
};
