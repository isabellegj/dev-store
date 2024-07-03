"use client";
import Header from "../components/header";
import Card from "../components/card";
import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";

const CACHE_DURATION = 2 * 60 * 1000;

export default function Home() {
  const allProducts = useProducts();
  const [cachedProducts, setCachedProducts] = useState([]);
  const [lastFetchTime, setLastFetchTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (
      Date.now() - lastFetchTime < CACHE_DURATION &&
      cachedProducts.length > 0
    ) {
      return;
    }

    setCachedProducts(allProducts);
    setLastFetchTime(Date.now());
  }, [allProducts, lastFetchTime, cachedProducts]);

  return (
    <div className="min-h-screen bg-gray">
      <Header count={clickCount} />
      <div className="grid md:grid-cols-[repeat(4,1fr)] grid-rows-[repeat(x,1fr)] lg:px-40 py-5 justify-center">
        {cachedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
