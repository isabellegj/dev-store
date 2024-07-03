"use client";
import React from "react";
import { useGlobalState } from "../context/GlobalStateContext";

const AddButton = ({ product }) => {
  const { isAdded, handleAddToCart } = useGlobalState();
  const added = !!isAdded[product.id];

  const handleClick = () => {
    handleAddToCart(product);
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded p-1 text-[10px] font-bold ${
        added
          ? "bg-white text-green"
          : "bg-magenta hover:bg-lighter-magenta text-white"
      }`}
      disabled={added}
    >
      {added ? "in the cart" : "add to cart +"}
    </button>
  );
};

export default AddButton;
