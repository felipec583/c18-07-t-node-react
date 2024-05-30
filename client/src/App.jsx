import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Descubrir from "./views/Descubrir";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/descubrir" element={<Descubrir />} />
    </Routes>
  );
}

export default App;
