import React from "react";

export default function BookList({ category, books }) {
  return (
    <div className="w-full h-[241px] flex-col justify-start items-start gap-5 inline-flex">
      <div className="self-stretch h-[19px] flex-col justify-start items-start gap-[21px] flex">
        <div className="self-stretch justify-start items-start gap-[928px] inline-flex">
          <div className="text-zinc-800 text-base font-medium font-['Inter']">
            {category}:
          </div>
        </div>
      </div>
      <div className="self-stretch justify-between items-start inline-flex">
        {books.map((book, index) => (
          <div
            key={index}
            className="w-[106px] flex-col justify-start items-center gap-3 inline-flex"
          >
            <div className="w-[106px] h-40 flex-col justify-center items-center flex">
              <img className="w-[106px] h-40" src={book.src} alt={book.title} />
            </div>
            <div className="self-stretch text-center text-neutral-700 text-xs font-medium font-['Inter']">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
