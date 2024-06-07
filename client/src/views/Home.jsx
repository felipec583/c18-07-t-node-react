import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PortadaHome from "../components/PortadaHome";
import BooksHome from "../components/BooksHome";
import AddLibroHome from "../components/AddLibroHome";
import Biblioteca from "../components/Biblioteca";
import useLibros from "../hooks/useLibros";

export default function Home() {
  const { handleAllLibros, categorizeLibros, allBooks } = useLibros();

  useEffect(() => {
    handleAllLibros();
  }, [handleAllLibros]);

  useEffect(() => {
    categorizeLibros();
  }, [categorizeLibros, allBooks]);

  return (
    <div className="flex-col flex justify-center items-center w-full text-black min-h-screen">
      <Navbar />
      <PortadaHome />
      <BooksHome />
      <div className="w-[80%] my-24 border-2 border-zinc-400 self-center"></div>
      <div className="w-4/5">
        <Biblioteca />
      </div>
      <div className="w-[80%] mt-24 border-2 border-zinc-400 self-center"></div>
      <AddLibroHome />
    </div>
  );
}
