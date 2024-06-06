import React from "react";
import Navbar from "../components/Navbar";
import Biblioteca from "../components/Biblioteca";
import { Rate } from "antd";

export default function MyPerfil() {
  return (
    <div className="w-full min-h-screen h-full bg-gradient-to-b from-gray-400 to-green-200 flex-col justify-start items-center gap-[54px] inline-flex">
      <Navbar />
      <div className="w-[90%] h-full p-12 bg-white rounded-[40px] flex-col justify-center items-center gap-[54px] inline-flex">
        <div className="flex w-full h-[90px]">
          <img
            className="w-[90px] h-[90px] mr-4 rounded-[200px]"
            src="./image 7.png"
          />
          <div className="flex flex-col">
            <div className="w-full justify-start items-center gap-5 inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-center gap-5 inline-flex">
                  <div className="text-black text-xl font-semibold font-['Inter']">
                    Delfina Nules
                  </div>
                  <div className="text-zinc-500 text-xs font-normal font-['Inter'] underline">
                    editar
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="h-[15px] flex-col justify-start items-start gap-1 flex">
                    <div className="text-neutral-700 text-xs font-normal font-['Inter']">
                      Descripción:
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <div className="text-neutral-700 text-base font-normal font-['Inter']">
                      Adicta a los libros y cazadora de aventuras literarias.
                      Siempre en busca del próximo viaje.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Biblioteca />
        <div className="w-full h-full justify-center items-start gap-14 inline-flex">
          <div className="flex-col justify-start items-center gap-5 inline-flex">
            <div className="self-stretch text-center text-neutral-700 text-base font-medium font-['Inter']">
              Tus listas:
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[162px] flex-col justify-start items-center gap-1 flex">
                <div className="w-[90px] h-[135px] flex-col justify-center items-center flex">
                  <img
                    className="w-[90px] h-[135px]"
                    src="https://via.placeholder.com/90x135"
                  />
                </div>
                <div className="self-stretch text-center">
                  <span className="text-neutral-700 text-xs font-medium font-['Inter']">
                    Por leer{" "}
                  </span>
                  <span className="text-green-400 text-xs font-semibold font-['Inter']">
                    (5)
                  </span>
                </div>
              </div>
              <div className="h-[162px] flex-col justify-start items-center gap-1 flex">
                <div className="w-[90px] h-[135px] flex-col justify-center items-center flex">
                  <img
                    className="w-[90px] h-[135px]"
                    src="https://via.placeholder.com/90x135"
                  />
                </div>
                <div className="self-stretch text-center">
                  <span className="text-neutral-700 text-xs font-medium font-['Inter']">
                    Leidos{" "}
                  </span>
                  <span className="text-green-400 text-xs font-semibold font-['Inter']">
                    (6)
                  </span>
                </div>
              </div>
              <div className="self-stretch h-[166px] rounded-lg  flex-col justify-start items-center gap-4 flex cursor-pointer">
                <div className="w-[90px] h-[135px] text-4xl relative rounded border-2 border-dashed border-zinc-500 flex items-center justify-center">
                  +
                </div>
                <button className="text-center text-neutral-700 text-xs font-medium font-['Inter']">
                  Agregar lista
                </button>
              </div>
            </div>
          </div>
          <div className="w-[1px] h-[500px] mt-10 origin-top-left rotate-0 border border-zinc-400"></div>
          <div className="w-[809px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start flex">
              <div className="self-stretch text-neutral-700 text-base font-medium font-['Inter']">
                Tus reseñas:
              </div>
            </div>
            <div className="self-stretch h-[488px] flex-col justify-start items-start gap-7 flex">
              <div className="self-stretch p-3 bg-white rounded border border-zinc-400 justify-start items-start gap-5 inline-flex">
                <div className="w-[82px] h-[120px] rounded flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[82px] h-[120px] rounded"
                    src="https://via.placeholder.com/82x120"
                  />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="w-[673px] justify-between items-center inline-flex">
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                      <div className="text-black text-base font-medium font-['Inter']">
                        Juego de tronos
                      </div>
                    </div>
                    <div className="justify-start items-start gap-1 flex">
                      <Rate allowHalf defaultValue={4.5} />
                    </div>
                  </div>
                  <div className="self-stretch h-[57px] flex-col justify-start items-start gap-3 flex">
                    <div className="w-[46px] text-neutral-700 text-xs font-medium font-['Inter']">
                      Reseña:
                    </div>
                    <div className="self-stretch text-zinc-500 text-xs font-normal font-['Inter']">
                      "Jane Eyre" es una montaña rusa emocional con una
                      protagonista que rompe moldes. Romance, misterio y una
                      dosis de rebeldía que te mantendrán enganchada de
                      principio a fin.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-3 bg-white rounded border border-zinc-400 justify-start items-start gap-5 inline-flex">
                <div className="w-[82px] h-[120px] rounded flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[82px] h-[120px] rounded"
                    src="https://via.placeholder.com/82x120"
                  />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="w-[673px] justify-between items-center inline-flex">
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                      <div className="text-black text-base font-medium font-['Inter']">
                        Jane Eyre
                      </div>
                    </div>
                    <div className="justify-start items-start gap-1 flex">
                      <Rate allowHalf defaultValue={3.5} />
                    </div>
                  </div>
                  <div className="self-stretch h-[57px] flex-col justify-start items-start gap-3 flex">
                    <div className="w-[46px] text-neutral-700 text-xs font-medium font-['Inter']">
                      Reseña:
                    </div>
                    <div className="self-stretch text-zinc-500 text-xs font-normal font-['Inter']">
                      "Jane Eyre" es una montaña rusa emocional con una
                      protagonista que rompe moldes. Romance, misterio y una
                      dosis de rebeldía que te mantendrán enganchada de
                      principio a fin.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-3 bg-white rounded border border-zinc-400 justify-start items-start gap-5 inline-flex">
                <div className="w-[82px] h-[120px] rounded justify-start items-center gap-2.5 flex">
                  <img
                    className="grow shrink basis-0 self-stretch rounded"
                    src="https://via.placeholder.com/82x120"
                  />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="w-[673px] justify-between items-center inline-flex">
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                      <div className="text-black text-base font-medium font-['Inter']">
                        Casa de flama y sombras
                      </div>
                    </div>
                    <div className="justify-start items-start gap-1 flex">
                      <Rate allowHalf defaultValue={2.5} />
                    </div>
                  </div>
                  <div className="self-stretch h-[57px] flex-col justify-start items-start gap-3 flex">
                    <div className="w-[46px] text-neutral-700 text-xs font-medium font-['Inter']">
                      Reseña:
                    </div>
                    <div className="self-stretch text-zinc-500 text-xs font-normal font-['Inter']">
                      "Jane Eyre" es una montaña rusa emocional con una
                      protagonista que rompe moldes. Romance, misterio y una
                      dosis de rebeldía que te mantendrán enganchada de
                      principio a fin.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
