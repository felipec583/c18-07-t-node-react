import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useRutes } from "../hooks/useRutes";
export default function BackButton() {
  const { handleGoBack } = useRutes();
  return (
    <button onClick={handleGoBack}>
      <IoReturnUpBackOutline />
    </button>
  );
}
