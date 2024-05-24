import React from "react";

export default function AddLibroHome() {
  return (
    <div className="w-full flex flex-col lg:flex-row mt-24 self-center h-[330px] justify-center items-center gap-20">
      <div className="flex-col justify-start items-start gap-8 inline-flex">
        <div className="flex-col justify-start items-start gap-[15px] flex px-3">
          <div className="text-neutral-800 text-[28px] font-medium font-['Inter']">
            ¿No encontras un libro? ¡Agregalo!
          </div>
          <div className="text-stone-500 text-2xl font-medium font-['Inter']">
            ¡Podes subir los libros que desees!
          </div>
        </div>
        <div className="self-stretch py-3 bg-green-400 rounded-lg shadow justify-center items-center gap-2.5 inline-flex mx-3">
          <div className="w-8 h-8 relative" />
          <div className="text-white text-2xl font-semibold font-['Inter']">
            Subir libro
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[529px] h-[330px] relative">
        <div className="lg:w-[202px] h-[277px] left-[304px] top-[38px] absolute shadow flex-col justify-center items-center inline-flex">
          <img className="w-[202px] h-[277px]" src="./image 6.png" />
        </div>
        <div className="lg:w-[203px] h-[292px] left-[177px] top-[23px] absolute shadow flex-col justify-center items-center inline-flex">
          <img className="w-[203px] h-[292px]" src="./image 7.png" />
        </div>
        <div className="lg:w-[207px] h-[315px] left-0 top-0 absolute shadow flex-col justify-center items-center inline-flex">
          <img className="w-[207px] h-[315px]" src="./image 9.png" />
        </div>
      </div>
    </div>
  );
}
