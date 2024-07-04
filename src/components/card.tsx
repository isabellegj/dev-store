import React from "react";
import Image from "next/image";
import AddButton from "./addButton";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-4 max-w-xs lg:h-[450px]">
      <div className="m-6">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={300}
          height={200}
        />
      </div>
      <div className="h-[0.5px] bg-medium-gray" />
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl mb-2 text-center text-magenta">
          {product.title}
        </h2>
        <p className="text-[12px] text-start">{product.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 px-4 py-2 justify-between">
        <div className="flex">
          <p className="text-start font-bold ">{`$${product.price}`}</p>
          {product.initialPrice === undefined ? (
            <div className="mr-10" />
          ) : (
            <p className="text-[10px] mt-0.5 line-through">
              {`$${product.initialPrice}`}
            </p>
          )}
        </div>
        <AddButton product={product} />
      </div>
    </div>
  );
};

export default Card;
