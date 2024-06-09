import { Rate } from "antd";

export function ReviewInput() {
  return (
    <div className="w-full h-auto p-5 bg-white rounded border border-zinc-400 flex flex-col gap-4">
      <div className="flex justify-between items-start flex-col">
        <div className="flex flex-col w-full">
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded"
            placeholder="Escribí aquí tu propia reseña"
          ></textarea>
        </div>
        <div className="flex items-center my-4">
          <Rate />
        </div>
      </div>
      <div className="flex justify-start items-center gap-3">
        <button className="h-[31px] px-3 py-2 bg-green-400 rounded shadow flex justify-center items-center">
          <div className="text-white text-xs font-semibold">
            Publicar reseña
          </div>
        </button>
        <button className="px-3 py-2 rounded flex justify-center items-center">
          <div className="text-stone-500 text-xs font-semibold">Cancelar</div>
        </button>
      </div>
    </div>
  );
}
