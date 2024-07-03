"use client";
import Header from "./components/header";
import Card from "./components/card";
import { useState } from "react";

export default function Home({ products }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="h-full bg-gray">
      <Header count={clickCount} />
      <div className="grid sm:grid-cols-[repeat(4,1fr)] grid-rows-[repeat(x,1fr)] lg:px-40 py-10 justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            onClick={handleClick}
            title={product.title}
            description={product.description}
            price={product.price}
            initialPrice={product.initialPrice}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fazendo a requisição para buscar os produtos da API
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
