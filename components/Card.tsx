import React from 'react';
import Image from 'next/image';

interface CardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, name, price, image }) => {
  return (
    <div
      key={id}
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <div className="relative h-48 md:h-64 w-full">
        {image && (
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm md:text-base font-semibold text-gray-800">{name}</h3>
        <p className="text-black font-bold mt-2">${price?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
