"use client";
import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";
import { useState } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="h-full bg-gray">
      <Header count={clickCount} />
      <div className="grid sm:grid-cols-[repeat(4,1fr)] grid-rows-[repeat(x,1fr)] lg:px-40 py-10 justify-center">
        <Card
          onClick={handleClick}
          title={"oufaif"}
          description={
            "Esse é um notebook ficticio e ta aqui só pra eu ver como fica"
          }
          price={"4000.00"}
          initialPrice={"5000.00"}
        />
        <Card onClick={handleClick} />
        <Card onClick={handleClick} />
        <Card onClick={handleClick} />
        <Card onClick={handleClick} />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
