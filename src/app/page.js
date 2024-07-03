"use client";
import Header from "../components/header";
import Card from "../components/card";
import { useState } from "react";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const products = useProducts();
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray">
      <Header count={clickCount} />
      <div className="grid md:grid-cols-[repeat(4,1fr)] grid-rows-[repeat(x,1fr)] lg:px-40 py-10 justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
