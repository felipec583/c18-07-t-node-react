import React from "react";
import { MdFileUpload } from "react-icons/md";
export default function AddLibroHome() {
  return (
    <div className="w-full flex flex-col lg:flex-row h-[600px] lg:h-[360px] mt-24 self-center justify-center items-center gap-20">
      <div className="flex-col justify-center items-center px-2 gap-8 inline-flex">
        <div className="flex-col justify-center items-start gap-[15px] flex px-3">
          <div className="text-neutral-800 text-[28px] font-medium font-['Inter']">
            ¿No encontras un libro? ¡Agregalo!
          </div>
          <div className="text-stone-500 text-2xl font-medium font-['Inter']">
            ¡Podes subir los libros que desees!
          </div>
        </div>
        <div className="py-3 bg-green-400 rounded-lg shadow justify-center items-center flex mx-3 w-full">
          <button className="text-white text-2xl font-semibold font-['Inter'] flex items-center justify-center">
            <MdFileUpload /> Subir libro
          </button>
        </div>
      </div>
      <div className="w-[600px] lg:w-[529px] h-full relative flex items-center justify-center">
        <div className="lg:w-[202px] w-auto h-[277px] left-[250px] lg:left-[304px] top-[38px] absolute shadow flex-col justify-center items-center flex">
          <img className="w-full h-full" src="./image 6.png" />
        </div>
        <div className="lg:w-[203px] w-auto h-[292px] left-[200px] lg:left-[177px] top-[23px] absolute shadow flex-col justify-center items-center flex">
          <img className="w-full h-full" src="./image 7.png" />
        </div>
        <div className="lg:w-[207px] w-auto h-[315px] left-[100px] lg:left-0 top-0 absolute shadow flex-col justify-center items-center flex">
          <img className="w-full h-full" src="./image 9.png" />
        </div>
      </div>
    </div>
  );
}
