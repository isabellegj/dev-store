import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="h-full bg-gray">
      <Header />
      <div className="grid sm:grid-cols-[repeat(4,1fr)] grid-rows-[repeat(x,1fr)] lg:px-40 py-10 justify-center">
        <Card
          title={"oufaif"}
          description={
            "Esse é um notebook ficticio e ta aqui só pra eu ver como fica"
          }
          price={"4000.00"}
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
