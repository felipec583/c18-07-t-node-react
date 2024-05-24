import React from "react";
import Navbar from "../components/Navbar";
import FormRegister from "../components/FormRegister";
import { FcGoogle } from "react-icons/fc";
import { useRutes } from "../hooks/useRutes";

export default function () {
  const { goToLogin } = useRutes();
  return (
    <div>
      <Navbar />
      <div className="flex lg:h-[calc(100vh-80px)] bg-neutral-50">
        <div className="w-[536px]">
          <img className="w-full h-full" src="./Fotoregister.png" />
        </div>
        <div className="w-[calc(100vw-536px)] flex flex-col items-center justify-center">
          <div className="w-[335px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full">
              <h2 className="text-black text-[28px] font-semibold font-['Inter']">
                Bienvenido a Bookpal!
              </h2>
              <p className="text-zinc-500 text-xl font-normal font-['Inter']">
                Crea una cuenta para poder comenzar
              </p>
            </div>
            <FormRegister />
            <div className="w-full h-[0px] border-2 border-zinc-400"></div>
            <div className="w-full h-[40px] my-5 px-7 py-4 bg-white rounded-lg border border-zinc-500 justify-start items-center gap-6 inline-flex">
              <button className="flex items-center justify-center text-zinc-600 text-xl font-normal font-['Inter']">
                <FcGoogle className="mx-4 w-5 h-5" /> Continuar con Google
              </button>
            </div>
            <div className="flex">
              <div className="text-neutral-700 text-base font-normal font-['Inter']">
                ¿Ya tienes una cuenta en Bookpal?
              </div>
              <button
                onClick={goToLogin}
                className="text-green-700 text-base font-normal font-['Inter'] underline ml-2"
              >
                Inicia aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
