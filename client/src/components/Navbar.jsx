import React from "react";
import { useRutes } from "../hooks/useRutes";
import { useSelector } from "react-redux";
import { getAccess } from "../redux/userSlice";
import MenuDesplegable from "./MenuDesplegable";
export default function Navbar() {
  const access = useSelector(getAccess);
  const { goToLogin, goToRegister, goToDescubrir, goToHome, goToMiBiblioteca } =
    useRutes();
  return (
    <div className="w-full h-[80px] lg:px-[20px] py-[15px] bg-white shadow justify-between items-center inline-flex">
      <div
        onClick={goToHome}
        className="justify-start items-start gap-2.5 flex pl-[60px] cursor-pointer"
      >
        <img src="./Frame 47.png" alt="" />
      </div>
      {access === false ? (
        <div className="justify-end w-full items-end pr-10 lg:gap-[47px] flex">
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
      ) : (
        <div className="flex justify-between">
          <button
            onClick={goToDescubrir}
            className="text-zinc-500 text-xl font-medium font-['Inter'] mx-3"
          >
            Descubrir
          </button>
          <button
            onClick={goToMiBiblioteca}
            className="text-zinc-500 text-xl font-medium font-['Inter'] mx-3"
          >
            Tu biblioteca
          </button>
          <button className="text-green-400 text-xl font-semibold font-['Inter'] mx-3">
            Subir libro
          </button>
          <MenuDesplegable />
        </div>
      )}
    </div>
  );
}
