import React from "react";
import Navbar from "./Navbar";
import AddLibroHome from "./AddLibroHome";

import BackButton from "./BackButton";
export default function TuBiblioteca() {
  return (
    <div className="w-full h-full flex-col justify-center items-center gap-[52px] inline-flex">
      <Navbar />
      <div className="w-full h-[797px] self-center flex-col justify-center items-center gap-10 inline-flex">
        <div className="justify-start ml-32 items-center self-start gap-3 inline-flex">
          <BackButton />
          <div className="text-green-700 text-xl font-medium font-['Inter']">
            Tu biblioteca (11):
          </div>
        </div>
        <div className="h-[725px] w-4/5 flex-col justify-start items-center gap-[52px] flex">
          <div className="h-[281px] w-full px-8 py-5 bg-white rounded-2xl border-2 border-neutral-300 flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch h-[241px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
                <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
                  <div>
                    <span className="text-zinc-800 text-base font-normal font-['Inter']">
                      Leidos{" "}
                    </span>
                    <span className="text-green-400 text-base font-medium font-['Inter']">
                      (6)
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-around items-start inline-flex">
                <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                  <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                    <img
                      className="w-[106px] h-40"
                      src="https://via.placeholder.com/106x160"
                    />
                  </div>
                  <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                    Don Quijote de la Mancha
                  </div>
                </div>
                <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                  <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                    <img
                      className="w-[106px] h-40"
                      src="https://via.placeholder.com/106x160"
                    />
                  </div>
                  <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                    Tres meses
                  </div>
                </div>
                <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                  <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                    <img
                      className="w-[106px] h-40"
                      src="https://via.placeholder.com/106x160"
                    />
                  </div>
                  <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                    Rafaela
                  </div>
                </div>
                <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                  <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                    <img
                      className="w-[106px] h-40"
                      src="https://via.placeholder.com/106x160"
                    />
                  </div>
                  <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                    Jane Eyre
                  </div>
                </div>
                <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <img
                      className="grow shrink basis-0 h-40"
                      src="https://via.placeholder.com/106x160"
                    />
                  </div>
                  <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                    Iron flame
                  </div>
                </div>
                <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                  <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                    <img
                      className="w-[106px] h-40"
                      src="https://via.placeholder.com/106x160"
                    />
                  </div>
                  <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                    Sombras de identidad
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[281px] w-full px-8 py-5 bg-white rounded-2xl border-2 border-neutral-300 flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch h-[241px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
                <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
                  <div>
                    <span className="text-zinc-800 text-base font-normal font-['Inter']">
                      Por leer
                    </span>
                    <span className="text-zinc-800 text-base font-medium font-['Inter']">
                      {" "}
                    </span>
                    <span className="text-green-400 text-base font-medium font-['Inter']">
                      (5)
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[202px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-around items-start inline-flex">
                  <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                      <img
                        className="w-[106px] h-40"
                        src="https://via.placeholder.com/106x160"
                      />
                    </div>
                    <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                      La hipótesis del amor
                    </div>
                  </div>
                  <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                      <img
                        className="w-[106px] h-40"
                        src="https://via.placeholder.com/106x160"
                      />
                    </div>
                    <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                      Lolita
                    </div>
                  </div>
                  <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                      <img
                        className="w-[106px] h-40"
                        src="https://via.placeholder.com/106x160"
                      />
                    </div>
                    <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                      Alicia en el país de las maravillas
                    </div>
                  </div>
                  <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                      <img
                        className="w-[106px] h-40"
                        src="https://via.placeholder.com/106x160"
                      />
                    </div>
                    <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                      IT
                    </div>
                  </div>
                  <div className="w-[106px] flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-[106px] h-40 flex-col justify-center items-center flex">
                      <img
                        className="w-[106px] h-40"
                        src="https://via.placeholder.com/106x160"
                      />
                    </div>
                    <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
                      Twisted games
                    </div>
                  </div>
                  <div className="w-[106px] self-stretch rounded-lg flex-col justify-start items-center gap-4 inline-flex">
                    <div className="w-[106px] text-2xl h-40 relative rounded border border-zinc-500 border-dashed flex items-center justify-center cursor-pointer">
                      +
                    </div>
                    <div className="text-center text-neutral-700 text-xs font-medium font-['Inter']">
                      Agregar libro
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[59px] w-full px-8 py-5 bg-white rounded-2xl border-2 border-neutral-300 flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch h-[19px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
                <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
                  <div className="text-zinc-800 text-base font-medium font-['Inter']">
                    Crear nueva lista
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddLibroHome />
    </div>
  );
}
