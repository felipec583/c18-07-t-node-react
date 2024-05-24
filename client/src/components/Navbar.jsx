import React from "react";
import { useRutes } from "../hooks/useRutes";

export default function Navbar() {
  const { goToLogin, goToRegister } = useRutes();
  return (
    <div className="w-full h-[80px] lg:px-[121px] py-[15px] bg-white shadow justify-between items-center inline-flex">
      <div className="justify-start items-start gap-2.5 flex">
        <img src="./Frame 47.png" alt="" />
      </div>
      <div className="justify-start items-start lg:gap-[47px] flex">
        <button
          onClick={goToRegister}
          className="text-green-400 text-xl font-semibold font-['Inter']"
        >
          Crear una cuenta
        </button>
        <button
          onClick={goToLogin}
          className="text-zinc-500 text-xl font-medium font-['Inter']"
        >
          Inicia sesion
        </button>
      </div>
    </div>
  );
}
