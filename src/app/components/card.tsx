import React from "react";
import Link from "next/link";
import Image from "next/image";
import ComputerImage from "../../../public/images/computador.jpg";
import AddButton from "./addButton";

const Card = ({ title, description, price, initialPrice, onClick }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 max-w-xs lg:h-[450px]">
      <div className="m-6">
        <Image src={ComputerImage} alt="" />
      </div>
      <div className="h-[2px]  bg-gray" />
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-2 text-center text-magenta">
          {title}
        </h2>
        <p className="text-sm text-start">{description}</p>
      </div>
      <div className="flex px-4 py-2 justify-between">
        <div className="flex">
          <p className="text-start font-bold">{`$${price}`}</p>
          <p className="text-[10px] mt-0.5 line-through">{`$${initialPrice}`}</p>
        </div>
        <AddButton onClick={onClick} />
      </div>
    </div>
  );
};

export default Card;
