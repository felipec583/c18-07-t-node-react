import React from "react";
import useLibros from "../hooks/useLibros";

export default function BookList() {
  const {
    fantasiaBooks,
    ficcionBooks,
    romanceBooks,
    misterioBooks,
    allBooks,
    handleBookById,
  } = useLibros();

  return (
    <div className="w-full h-full flex-col justify-start items-start gap-5 inline-flex">
      <div className="w-full justify-between items-center inline-flex">
        <div className="grow shrink basis-0 text-green-700 text-2xl font-medium font-['Inter']">
          Todos: ({allBooks.length})
        </div>
      </div>
      {/* Fantasia */}
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-2xl mb-10 font-medium font-['Inter']">
            Fantasia: ({fantasiaBooks.length})
          </div>
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap">
        {fantasiaBooks.map((book) => (
          <div
            key={book._id}
            onClick={() => handleBookById(book)}
            className="w-[160px] flex-col justify-center items-center lg:mx-0 mx-2 lg:gap-3 lg:inline-flex hover:cursor-pointer hover:scale-105"
          >
            <div className="w-full h-[276.21px] relative">
              <img
                className="w-full h-[276.21px] left-0 top-0 absolute"
                src={book.image}
                alt={book.title}
              />
            </div>
            <div className="w-[160px] text-center text-black text-xl font-medium font-['Inter']">
              {book.title}
            </div>
          </div>
        ))}
      </div>
      {/* Ficcion */}
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-2xl mb-10 font-medium font-['Inter']">
            Ficcion: ({ficcionBooks.length})
          </div>
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap">
        {ficcionBooks.map((book) => (
          <div
            key={book._id}
            onClick={() => handleBookById(book)}
            className="w-[160px] flex-col justify-center items-center lg:mx-0 mx-2 lg:gap-3 lg:inline-flex hover:cursor-pointer hover:scale-105"
          >
            <div className="w-full h-[276.21px] relative">
              <img
                className="w-full h-[276.21px] left-0 top-0 absolute"
                src={book.image}
                alt={book.title}
              />
            </div>
            <div className="w-[160px] text-center text-black text-xl font-medium font-['Inter']">
              {book.title}
            </div>
          </div>
        ))}
      </div>
      {/* Romance */}
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-2xl mb-10 font-medium font-['Inter']">
            Romance: ({romanceBooks.length})
          </div>
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap">
        {romanceBooks.map((book) => (
          <div
            key={book._id}
            onClick={() => handleBookById(book)}
            className="w-[160px] flex-col justify-center items-center lg:mx-0 mx-2 lg:gap-3 lg:inline-flex hover:cursor-pointer hover:scale-105"
          >
            <div className="w-full h-[276.21px] relative">
              <img
                className="w-full h-[276.21px] left-0 top-0 absolute"
                src={book.image}
                alt={book.title}
              />
            </div>
            <div className="w-[160px] text-center text-black text-xl font-medium font-['Inter']">
              {book.title}
            </div>
          </div>
        ))}
      </div>
      {/* Misterio */}
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-2xl mb-10 font-medium font-['Inter']">
            Misterio: ({misterioBooks.length})
          </div>
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap">
        {misterioBooks.map((book) => (
          <div
            key={book._id}
            onClick={() => handleBookById(book)}
            className="w-[160px] flex-col justify-center items-center lg:mx-0 mx-2 lg:gap-3 lg:inline-flex hover:cursor-pointer hover:scale-105"
          >
            <div className="w-full h-[276.21px] relative">
              <img
                className="w-full h-[276.21px] left-0 top-0 absolute"
                src={book.image}
                alt={book.title}
              />
            </div>
            <div className="w-[160px] text-center text-black text-xl font-medium font-['Inter']">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
