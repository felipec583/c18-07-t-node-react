import React from "react";
import Navbar from "../components/Navbar";
import FormRegister from "../components/FormRegister";
import { FcGoogle } from "react-icons/fc";
import { useRutes } from "../hooks/useRutes";
import GoogleLoginButton from "../components/GoogleLoginButton";

export default function () {
  const { goToLogin } = useRutes();
  return (
    <div>
      <Navbar />
      <div className="flex lg:h-[calc(100vh-80px)] bg-neutral-50">
        <div className="w-[536px] hidden lg:flex">
          <img className="w-full h-full" src="./Fotoregister.png" />
        </div>
        <div className="w-full lg:w-[calc(100vw-536px)] mt-10 lg:mt-0 flex flex-col items-center justify-center">
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
            <GoogleLoginButton />
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
