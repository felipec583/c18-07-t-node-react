import React from "react";
import useLibros from "../hooks/useLibros";

export default function BookList() {
  const { fantasiaBooks, ficcionBooks, romanceBooks, misteryBooks } =
    useLibros();
  console.log(misteryBooks);
  return (
    <div className="w-full h-full flex-col justify-start items-start gap-5 inline-flex">
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-2xl mb-10 font-medium font-['Inter']">
            Fantasia:
          </div>
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap">
        {fantasiaBooks.map((book, index) => (
          <div
            key={book._id}
            className="w-[160px] flex-col justify-center items-center lg:mx-0 mx-2 lg:gap-3 lg:inline-flex"
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
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-2xl mb-10 font-medium font-['Inter']">
            Ficcion:
          </div>
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap">
        {ficcionBooks.map((book, index) => (
          <div
            key={book._id}
            className="w-[160px] flex-col justify-center items-center lg:mx-0 mx-2 lg:gap-3 lg:inline-flex"
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
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-2xl mb-10 font-medium font-['Inter']">
            Romance:
          </div>
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap">
        {romanceBooks.map((book, index) => (
          <div
            key={book._id}
            className="w-[160px] flex-col justify-center items-center lg:mx-0 mx-2 lg:gap-3 lg:inline-flex"
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
