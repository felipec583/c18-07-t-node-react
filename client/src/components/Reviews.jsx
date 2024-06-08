import React, { useState } from "react";
import { Rate } from "antd";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function Reviews({ review }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-full  h-auto p-4 my-2 bg-white rounded border border-zinc-400">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className="w-[39px] h-[39px] bg-stone-300 rounded-full flex justify-center items-center">
            <div className="text-black text-base font-normal">
              {review.initials}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-neutral-700 text-base font-medium">
              {review.author}
            </div>
            <Rate defaultValue={review.rating} />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-neutral-700 text-base font-medium">Reseña:</div>
        <div className="text-zinc-500 text-sm">{review.content}</div>
      </div>
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-1" onClick={toggleLike}>
          {liked ? <FaHeart className="text-red-700" /> : <FiHeart />}
          {liked ? (
            <div className="text-neutral-700 text-sm">Te gusta esta reseña</div>
          ) : (
            <div className="text-neutral-700 text-sm">Me gusta</div>
          )}
        </button>
        <div className="text-neutral-800 text-xs">
          A {review.likes} personas les gusta esta reseña
        </div>
      </div>
    </div>
  );
}
