"use client";
import React, { useState } from "react";
import Link from "next/link";

const AddButton = ({ onClick }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(true);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded p-1 text-[10px] font-bold ${
        isAdded ? "bg-white text-green" : "bg-magenta text-white"
      }`}
      disabled={isAdded}
    >
      {isAdded ? "in the cart" : "add to cart +"}
    </button>
  );
};

export default AddButton;
