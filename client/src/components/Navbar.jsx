import React from "react";
import { useRutes } from "../hooks/useRutes";
import { useSelector } from "react-redux";
import { getAccess } from "../redux/userSlice";
import useUser from "../hooks/useUser";
import { Avatar } from "antd";
import { FaUserCircle } from "react-icons/fa";
export default function Navbar() {
  const access = useSelector(getAccess);
  const { goToLogin, goToRegister, goToDescubrir } = useRutes();
  const { handleLogout } = useUser();
  return (
    <div className="w-full h-[80px] lg:px-[20px] py-[15px] bg-white shadow justify-between items-center inline-flex">
      <div className="justify-start items-start gap-2.5 flex pl-[60px]">
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
            onClick={handleLogout}
            className="text-zinc-500 text-xl font-medium font-['Inter'] mx-3"
          >
            Tu biblioteca
          </button>
          <button
            onClick={handleLogout}
            className="text-zinc-500 text-xl font-medium font-['Inter'] mx-3"
          >
            Subir libro
          </button>
          <button
            onClick={handleLogout}
            className="text-zinc-500 text-xl font-medium font-['Inter'] mx-3"
          >
            Cerrar Sesion
          </button>
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<FaUserCircle />}
          />
        </div>
      )}
    </div>
  );
}
