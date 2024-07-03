"use client";
import React, { useState } from "react";

const AddButton = ({ onClick }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(true);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded p-1 text-[10px] font-bold ${
        isAdded
          ? "bg-white text-green"
          : "bg-magenta hover:bg-lighter-magenta text-white"
      }`}
      disabled={isAdded}
    >
      {isAdded ? "in the cart" : "add to cart +"}
    </button>
  );
};

export default AddButton;
