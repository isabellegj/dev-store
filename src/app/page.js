"use client";
import Header from "./components/header";
import Card from "./components/card";
import { useState } from "react";
import useProducts from "../useProducts";

export default function Home() {
  const products = useProducts();
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="h-full bg-gray">
      <Header count={clickCount} />
      <div className="grid sm:grid-cols-[repeat(4,1fr)] grid-rows-[repeat(x,1fr)] lg:px-40 py-10 justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
