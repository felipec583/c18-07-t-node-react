import React from "react";

export default function PortadaHome() {
  return (
    <div className="w-full h-[530px] relative bg-gradient-to-r from-gray-400 to-green-200 self-center">
      <div className="lg:left-[50px] top-[178px] absolute flex-col justify-start items-start gap-9 inline-flex">
        <div className="flex-col lg:justify-start lg:items-start gap-4 flex px-3 lg:px-0">
          <div className="text-white text-2xl lg:text-4xl font-bold font-['Inter']">
            ¿Cuál va a ser tu próxima lectura?
          </div>
          <div className="self-stretch text-white text-[28px] font-medium font-['Inter']">
            Encuentra tu próxima obsesión literaria en Bookpal
          </div>
        </div>
        <div className="justify-start items-start gap-6 inline-flex px-3 lg:px-0">
          <div className="px-4 py-2 bg-orange-400 rounded-lg justify-center items-center gap-2.5 flex">
            <button className="text-white text-2xl font-semibold font-['Inter']">
              Explorar libros
            </button>
          </div>
          <div className="px-4 py-2 rounded-lg border justify-center items-center gap-2.5 flex">
            <button className="text-white text-2xl font-bold font-['Inter']">
              Subir libro
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-[656px] h-[526px] hidden lg:flex right-0 top-[68px] absolute"
        src="./Foto portadahome.png"
      />
    </div>
  );
}
