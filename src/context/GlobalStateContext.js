"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState({});

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    const storedIsAdded = localStorage.getItem("isAdded");

    if (storedCount) setCount(Number(storedCount));
    if (storedIsAdded) setIsAdded(JSON.parse(storedIsAdded));
  }, []);

  const handleAddToCart = (product) => {
    setIsAdded((prevIsAdded) => ({
      ...prevIsAdded,
      [product.id]: product,
    }));
    setCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedIsAdded = { ...isAdded };
    delete updatedIsAdded[productId];
    setIsAdded(updatedIsAdded);
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.setItem("isAdded", JSON.stringify(isAdded));
  }, [count, isAdded]);

  return (
    <GlobalStateContext.Provider
      value={{
        count,
        setCount,
        isAdded,
        setIsAdded,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);