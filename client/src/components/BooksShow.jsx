import React from "react";

export default function BooksShow({ books }) {
  return (
    <div className="flex flex-col gap-5">
      {books.slice(0, 6).map((book) => (
        <div key={book._id} className="flex flex-col items-center gap-3">
          <div className="w-[106px] h-40 flex justify-center items-center">
            <img className="w-[106px] h-40" src={book.image} alt={book.title} />
          </div>
          <div className="text-center text-neutral-700 text-xs font-medium">
            {book.title}
          </div>
        </div>
      ))}
    </div>
  );
}
