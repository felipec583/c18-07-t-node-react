import React from "react";
import Navbar from "../components/Navbar";
import PortadaHome from "../components/PortadaHome";
import BooksHome from "../components/BooksHome";
import AddLibroHome from "../components/AddLibroHome";

export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center w-full text-black min-h-screen">
      <Navbar />
      <PortadaHome />
      <BooksHome />
      <div className="w-[80%] mt-24 border-2 border-zinc-400 self-center"></div>
      <AddLibroHome />
    </div>
  );
}