import React from "react";
import { Rate } from "antd";

export default function BookDetail({ book }) {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-10">
      <img
        className="w-[245px] self-stretch"
        src={book.image}
        alt={book.title}
      />
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          <div>
            <div className="text-neutral-800 text-xl font-semibold">
              {book.title}
            </div>
            <div className="text-neutral-800 text-base font-normal">
              {book.author.name}
            </div>
          </div>
        </div>
        <Rate defaultValue={4} />
        <div className="flex flex-col gap-2">
          <div className="text-neutral-800 text-base font-medium">
            Sinopsis:
          </div>
          <div className="text-neutral-800 text-sm font-normal">
            {book.description}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-neutral-800 text-sm font-normal">
            Recomendado a partir de 11 años.
          </div>
          <div className="text-neutral-800 text-sm font-normal">
            Páginas totales: 496
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-[31px] px-3 py-2 bg-green-700 rounded shadow flex justify-center items-center">
            <div className="text-white text-xs font-semibold">
              Añadido a “Libros leidos”
            </div>
          </div>
          <div className="h-[31px] px-3 py-2 bg-green-400 rounded shadow flex justify-center items-center">
            <div className="text-white text-xs font-semibold">
              Añadir a “Por leer”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
