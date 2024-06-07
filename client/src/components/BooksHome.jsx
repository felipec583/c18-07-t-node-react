import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import {
  getAllBooks,
  getFantasiaBooks,
  getFiccionBooks,
} from "../redux/booksSlice";
export default function BooksHome() {
  const ficcionBooks = useSelector(getFiccionBooks);
  // console.log(ficcionBooks);
  const fantasiaBooks = useSelector(getFantasiaBooks);
  return (
    <div className="w-full flex-col flex justify-start items-center self-center mt-10 lg:mt-36 gap-[52px]">
      <div className="w-full lg:w-[80%] justify-between items-center inline-flex px-4">
        <p className="grow basis-0 text-green-700 text-2xl lg:text-[32px] font-medium font-['Inter']">
          Descubri nuevas historias
        </p>
        <button className="h-[45px] items-center justify-center px-8 py-1 bg-white rounded-[40px] shadow border-2 border-neutral-300 gap-2.5 flex">
          <IoIosSearch />
        </button>
      </div>
      <div className="w-full lg:w-[80%]  flex-col justify-start items-center lg:gap-20 flex">
        <div className="flex-col justify-start items-start lg:gap-[53px] flex">
          <div className="flex-col justify-start items-start lg:gap-5 flex w-full">
            <div className="w-full flex-col justify-start items-start lg:gap-[21px] flex px-3 lg:px-0">
              <div className="w-full justify-between items-center inline-flex">
                <div className="text-zinc-800 text-[28px] font-medium font-['Inter']">
                  Ficcion:
                </div>
                <button className="text-green-400 text-xl font-semibold font-['Inter']">
                  Ver mas
                </button>
              </div>
            </div>
            <div className="w-full lg:gap-5 justify-center items-start inline-flex flex-wrap">
              {ficcionBooks.slice(0, 6).map((book) => (
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
          <div className="flex-col justify-start items-start gap-5 flex w-full">
            <div className="w-full justify-between items-center inline-flex px-3 lg:px-0">
              <div className="text-zinc-800 text-[28px] font-medium font-['Inter']">
                Fantasia:
              </div>
              <button className="text-green-400 text-xl font-semibold font-['Inter']">
                Ver mas
              </button>
            </div>
            <div className="w-full lg:gap-5 justify-center items-start inline-flex flex-wrap">
              {fantasiaBooks.slice(0, 6).map((book) => (
                <div
                  key={book._id}
                  className="w-auto flex-col justify-center items-center mx-2 lg:mx-0 lg:gap-3 lg:flex"
                >
                  <div className="w-[160px] h-[276.21px] relative">
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
        </div>
        <button className="mt-8 lg:mt-4 px-6 py-3 bg-green-400 rounded-lg shadow justify-center items-center gap-2.5 inline-flex text-white text-2xl font-semibold font-['Inter']">
          Ver mas
        </button>
      </div>
    </div>
  );
}
