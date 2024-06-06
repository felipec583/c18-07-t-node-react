import React from "react";
import { useSelector } from "react-redux";
import { getAccess } from "../redux/userSlice";
import { Rate } from "antd";

export default function Biblioteca() {
  const access = useSelector(getAccess);
  const Card = ({ imageSrc, title1, title2, author, subtitle }) => (
    <div className="p-3 bg-white rounded-xl shadow flex flex-row justify-start items-center gap-4 w-full lg:w-auto">
      <div className="w-[99px] h-[140px] rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageSrc}
          alt={title1}
        />
      </div>
      <div className="h-[140px]  flex flex-col items-start justify-between">
        <div className="">
          <div className="flex flex-col items-start justify-start">
            <div className="text-neutral-800 text-base font-semibold font-['Inter']">
              {title1}
            </div>
            {title2 && (
              <div className="text-neutral-800 text-base font-semibold font-['Inter']">
                {title2}
              </div>
            )}
          </div>
          <div className="text-neutral-500 mt-1 text-xs font-medium font-['Inter']">
            {author}
          </div>
          <Rate className="mt-2" disabled defaultValue={2} />
        </div>
        {subtitle && (
          <div className="text-zinc-500 text-[10px] font-medium font-['Inter']">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
  const books = [
    {
      imageSrc: "./image 6.png",
      title1: "Ciudad medialuna:",
      title2: "Casa de flama y sombras",
      author: "Sarah J. Maas",
      subtitle: "De la autora de múltiples best-sellers",
    },
    {
      imageSrc: "./image 7.png",
      title1: "Tres meses",
      author: "Joana Marcus",
      subtitle: "De la autora de “A partir de diciembre”",
    },
    {
      imageSrc: "./image 9.png",
      title1: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
    },
  ];
  return (
    <>
      {access === true ? (
        <div className="w-full h-full lg:h-[220px] flex flex-col justify-start items-center gap-8">
          <div className="w-full flex justify-between items-center">
            <div className="text-zinc-800 text-xl font-medium font-['Inter']">
              Tu biblioteca:
            </div>
            <div className="text-green-400 text-base font-semibold font-['Inter']">
              Ver más
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-5">
            {books.map((book, index) => (
              <Card key={index} {...book} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-[90%] h-auto lg:px-[136px] py-[13px] flex-col justify-start items-start gap-[60px] inline-flex">
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="w-auto justify-start items-start gap-[928px] inline-flex">
              <div className="text-zinc-800 text-2xl font-medium font-['Inter']">
                Tu biblioteca:
              </div>
            </div>
            <div className="justify-start items-center gap-[91px] inline-flex flex-col lg:flex-row">
              <img className="w-[362px] h-[245px]" src="./image 11.png" />
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="self-stretch h-auto flex-col justify-start items-start gap-[15px] flex">
                  <div className="text-neutral-800 text-2xl font-medium font-['Inter']">
                    Tu biblioteca esta vacia.
                  </div>
                  <div className="self-stretch text-stone-500 text-xl font-medium font-['Inter']">
                    Parece que nos has agregado ningun libro a tu biblioteca.
                    Descubrí nuevas historias y comenza a organizar tus
                    lecturas!
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-6 inline-flex flex-col lg:flex-row">
                  <div className="w-full lg:w-auto px-3 py-2 bg-green-400 rounded justify-center items-center gap-2.5 flex">
                    <button className="text-white text-2xl font-semibold font-['Inter'] flex items-center justify-center">
                      Descubrir nuevos libros
                    </button>
                  </div>
                  <div className="w-full lg:w-auto px-4 py-2 rounded-lg border justify-center items-center gap-2.5 flex">
                    <button className="text-green-400 text-2xl font-bold font-['Inter']">
                      Subir libro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
