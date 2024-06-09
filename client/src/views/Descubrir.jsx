import React from "react";
import AddLibroHome from "../components/AddLibroHome";
import BookList from "../components/BookList";
import { Input } from "antd";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
const { Search } = Input;
export default function Descubrir() {
  return (
    <div className="w-full h-full relative bg-neutral-50 flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full h-[351px] pt-[85px] pb-[189px] bg-gradient-to-b from-gray-400 to-green-200 justify-center items-center inline-flex">
        <div className="relative right-[400px] text-2xl bottom-[80px]">
          <BackButton />
        </div>
        <div className="self-stretch flex-col justify-start items-center gap-3 inline-flex">
          <div className="text-white text-2xl font-semibold font-['Inter']">
            Descubrí nuevas historias
          </div>
          <Search
            placeholder="Buscar..."
            allowClear
            // onSearch={onSearch}
            className="flex w-60 items-center justify-center mr-2"
          />
        </div>
      </div>
      <div className="w-[80%] -mt-28 h-full px-[67px] py-10 bg-white rounded-2xl border-2 border-neutral-300 flex-col justify-start items-start gap-10 inline-flex">
        <BookList />
      </div>
      <div className="w-[80%] h-[0px] border-2 mt-24 border-neutral-200"></div>
      <AddLibroHome />
    </div>
  );
}
