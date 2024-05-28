import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PortadaHome from "../components/PortadaHome";
import BooksHome from "../components/BooksHome";
import AddLibroHome from "../components/AddLibroHome";
import Biblioteca from "../components/Biblioteca";

export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center w-full text-black min-h-screen">
      <Navbar />
      <PortadaHome />
      <BooksHome />
      <div className="w-[80%] my-24 border-2 border-zinc-400 self-center"></div>
      <Biblioteca />
      <div className="w-[80%] mt-24 border-2 border-zinc-400 self-center"></div>
      <AddLibroHome />
    </div>
  );
}
