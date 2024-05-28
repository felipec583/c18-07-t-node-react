import React from "react";
import AddLibroHome from "../components/AddLibroHome";
import BookList from "../components/BookList";

export default function Descubrir() {
  const books = {
    Fantasia: [
      { title: "Gild", src: "https://via.placeholder.com/106x160" },
      {
        title: "Una corte de espinas y rosas",
        src: "https://via.placeholder.com/106x160",
      },
      { title: "El héroe perdido", src: "https://via.placeholder.com/106x160" },
      { title: "Iron flame", src: "https://via.placeholder.com/106x160" },
      {
        title: "Sombras de identidad",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "Fabricante de lagrimas",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "El principe cruel",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "Deal with the elf king",
        src: "https://via.placeholder.com/106x160",
      },
    ],
    Romance: [
      {
        title: "La hipótesis del amor",
        src: "https://via.placeholder.com/106x160",
      },
      { title: "Rafaela", src: "https://via.placeholder.com/106x160" },
      {
        title: "Bridgerton: Felices para siempre",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "El dia que dejó de nevar en Alaska",
        src: "https://via.placeholder.com/106x160",
      },
      { title: "Tres meses", src: "https://via.placeholder.com/106x160" },
      { title: "Invisible", src: "https://via.placeholder.com/106x160" },
      { title: "Twisted games", src: "https://via.placeholder.com/106x160" },
      { title: "Tal vez tú", src: "https://via.placeholder.com/106x160" },
    ],
    Clasicos: [
      {
        title: "Doce cuentos peregrinos",
        src: "https://via.placeholder.com/106x160",
      },
      { title: "Jane Eyre", src: "https://via.placeholder.com/106x160" },
      {
        title: "Virginia Wolf: Cuentos completos",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "Las mil y una noches",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "Don Quijote de la Mancha",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "Alicia en el país de las maravillas",
        src: "https://via.placeholder.com/106x160",
      },
      { title: "La tregua", src: "https://via.placeholder.com/106x160" },
      { title: "Lolita", src: "https://via.placeholder.com/106x160" },
    ],
    Terror: [
      { title: "Drácula", src: "https://via.placeholder.com/106x160" },
      {
        title: "Un legado de sangre",
        src: "https://via.placeholder.com/106x160",
      },
      { title: "IT", src: "https://via.placeholder.com/106x160" },
      {
        title: "El hombre de tiza",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "El bazar de los malos sueños",
        src: "https://via.placeholder.com/106x160",
      },
      { title: "El resplandor", src: "https://via.placeholder.com/106x160" },
      {
        title: "El baile de los muertos",
        src: "https://via.placeholder.com/106x160",
      },
      {
        title: "La dama numero trece",
        src: "https://via.placeholder.com/106x160",
      },
    ],
  };

  return (
    <div className="w-full h-full relative bg-neutral-50 flex flex-col items-center justify-center">
      <div className="w-full h-[351px] pt-[85px] pb-[189px] bg-gradient-to-b from-gray-400 to-green-200 justify-center items-center inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-3 inline-flex">
          <div className="text-white text-2xl font-semibold font-['Inter']">
            Descubrí nuevas historias
          </div>
          <div className="self-stretch px-4 py-2 bg-white rounded-[200px] justify-start items-start gap-2.5 inline-flex">
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </div>
      <div className="w-[80%] -mt-28 h-[1258px] px-[67px] py-10 bg-white rounded-2xl border-2 border-neutral-300 flex-col justify-center items-center gap-10 inline-flex">
        <div className="w-full justify-between items-center inline-flex">
          <div className="grow shrink basis-0 text-green-700 text-xl font-medium font-['Inter']">
            Todos:
          </div>
        </div>
        {Object.keys(books).map((category) => (
          <BookList
            key={category}
            category={category}
            books={books[category]}
          />
        ))}
      </div>
      <div className="w-[80%] h-[0px] border-2 mt-24 border-neutral-200"></div>
      <AddLibroHome />
    </div>
  );
}
