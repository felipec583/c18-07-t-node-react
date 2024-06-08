import React from "react";
import Navbar from "../components/Navbar";
import { Rate } from "antd";
import useLibros from "../hooks/useLibros";
import Reviews from "../components/Reviews";
import BookDetail from "../components/BookDetail";
import BooksShow from "../components/BooksShow";
import { ReviewInput } from "../components/ReviewInput";

export default function DetailBook() {
  const { filteredBooks, allBooks } = useLibros();
  const reviews = [
    {
      initials: "NC",
      author: "Nicolas",
      rating: 4,
      content:
        "Me encantó! No podía dejar de leerlo. La forma en que Rick Riordan mezcla la mitología griega y romana es simplemente genial. Jason, Piper y Leo son personajes súper interesantes, y cada uno aporta algo único a la historia. Definitivamente, voy a seguir con la serie.",
      likes: 7,
    },
    {
      initials: "MA",
      author: "Maria",
      rating: 5,
      content:
        "Me encantó! No podía dejar de leerlo. La forma en que Rick Riordan mezcla la mitología griega y romana es simplemente genial. Jason, Piper y Leo son personajes súper interesantes, y cada uno aporta algo único a la historia. Definitivamente, voy a seguir con la serie.",
      likes: 2,
    },
    {
      initials: "PO",
      author: "Pablo",
      rating: 5,
      content:
        "Me encantó! No podía dejar de leerlo. La forma en que Rick Riordan mezcla la mitología griega y romana es simplemente genial. Jason, Piper y Leo son personajes súper interesantes, y cada uno aporta algo único a la historia. Definitivamente, voy a seguir con la serie.",
      likes: 1,
    },
    {
      initials: "ST",
      author: "Stefania",
      rating: 5,
      content:
        "Me encantó! No podía dejar de leerlo. La forma en que Rick Riordan mezcla la mitología griega y romana es simplemente genial. Jason, Piper y Leo son personajes súper interesantes, y cada uno aporta algo único a la historia. Definitivamente, voy a seguir con la serie.",
      likes: 8,
    },
    {
      initials: "IG",
      author: "Ignacio",
      rating: 5,
      content:
        "Me encantó! No podía dejar de leerlo. La forma en que Rick Riordan mezcla la mitología griega y romana es simplemente genial. Jason, Piper y Leo son personajes súper interesantes, y cada uno aporta algo único a la historia. Definitivamente, voy a seguir con la serie.",
      likes: 2,
    },
  ];
  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col items-center">
      <Navbar />
      <div className="flex w-full mt-4 pl-24">
        <div className="w-f h-auto bg-neutral-50 p-4">
          <BookDetail book={filteredBooks} />
        </div>
      </div>
      <div className="flex w-full mt-8">
        <div className="w-1/5">
          <h1 className="text-2xl p-4">Mas libros:</h1>
          <div className="w-full h-auto p-4">
            <BooksShow books={allBooks} />
          </div>
        </div>
        <div className="w-[1px] h-[1250px] mt-10 mr-10 origin-top-left rotate-0 border border-zinc-400"></div>
        <div className="flex-grow p-4">
          <h1 className="text-2xl mb-7">Reseñas:</h1>
          <ReviewInput />
          {reviews.map((review, index) => (
            <Reviews key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
