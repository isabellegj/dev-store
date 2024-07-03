"use client";
import React from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import { toast } from "react-toastify";

const AddButton = ({ product }) => {
  const { isAdded, handleAddToCart } = useGlobalState();
  const added = !!isAdded[product.id];

  const handleClick = async () => {
    try {
      await handleAddToCart(product);
      toast.success("Product has been added to cart");
    } catch (error) {
      toast.error("Error adding product to cart");
    }
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
