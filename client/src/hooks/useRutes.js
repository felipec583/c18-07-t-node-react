import { useNavigate } from "react-router-dom";

export const useRutes = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const goToRegister = () => navigate("/register");
  const goToLogin = () => navigate("/login");
  const goToDescubrir = () => navigate("/descubrir");
  const goToPerfil = () => navigate("/miPerfil");
  const goToMiBiblioteca = () => navigate("/miBiblioteca");
  const handleGoBack = () => {
    window.history.back();
  };
  return {
    goToHome,
    goToRegister,
    goToLogin,
    goToDescubrir,
    goToPerfil,
    goToMiBiblioteca,
    handleGoBack,
  };
};
