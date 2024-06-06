import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Descubrir from "./views/Descubrir";
import MyPerfil from "./views/MyPerfil";
import TuBiblioteca from "./components/TuBiblioteca";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/descubrir" element={<Descubrir />} />
      <Route path="/miPerfil" element={<MyPerfil />} />
      <Route path="/miBiblioteca" element={<TuBiblioteca />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
