import React from "react";
import Navbar from "../components/Navbar";
import FormLogin from "../components/FormLogin";
import { FcGoogle } from "react-icons/fc";
import { useRutes } from "../hooks/useRutes";
export default function Login() {
  const { goToRegister } = useRutes();
  return (
    <div>
      <Navbar />
      <div className="flex lg:h-[calc(100vh-80px)] bg-neutral-50">
        <div className="w-[536px] hidden lg:flex">
          <img className="w-full h-full" src="./loginImage.png" />
        </div>
        <div className="w-full lg:w-[calc(100vw-536px)] mt-10 lg:mt-0 flex flex-col items-center justify-center">
          <div className="w-[335px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full">
              <h2 className="text-black text-[28px] font-semibold font-['Inter']">
                Hola de nuevo!
              </h2>
              <p className="text-zinc-500 text-xl font-normal font-['Inter']">
                Inicia sesion para comenzar
              </p>
            </div>
            <FormLogin />
            <div className="w-full h-[0px] border-2 border-zinc-400"></div>
            <div className="w-full h-[40px] my-5 px-7 py-4 bg-white rounded-lg border border-zinc-500 justify-start items-center gap-6 inline-flex">
              <button className="flex items-center justify-center text-zinc-600 text-xl font-normal font-['Inter']">
                <FcGoogle className="mx-4 w-5 h-5" /> Continuar con Google
              </button>
            </div>
            <div className="flex">
              <div className="text-neutral-700 text-base font-normal font-['Inter']">
                ¿No tenes una cuenta en Bookpal?
              </div>
              <button
                onClick={goToRegister}
                className="text-green-700 text-base font-normal font-['Inter'] underline ml-2"
              >
                Registrate aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
