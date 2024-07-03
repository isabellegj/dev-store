"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? Number(storedCount) : 0;
  });

  const [isAdded, setIsAdded] = useState(() => {
    const storedIsAdded = localStorage.getItem("isAdded");
    return storedIsAdded ? JSON.parse(storedIsAdded) : {};
  });

  const handleAddToCart = (product) => {
    return new Promise((resolve, reject) => {
      try {
        setIsAdded((prevIsAdded) => {
          const updatedIsAdded = { ...prevIsAdded };
          const quantity = updatedIsAdded[product.id]
            ? updatedIsAdded[product.id].quantity + 1
            : 1;
          updatedIsAdded[product.id] = { ...product, quantity };
          return updatedIsAdded;
        });
        setCount((prevCount) => prevCount + 1);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    const updatedIsAdded = { ...isAdded };
    const currentQuantity = updatedIsAdded[productId].quantity;
    if (currentQuantity === 1) {
      delete updatedIsAdded[productId];
    } else {
      updatedIsAdded[productId].quantity = currentQuantity - 1;
    }
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
