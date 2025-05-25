"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  lastUnits?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, lastUnits }) => {
  const handleAddToCart = () => {
    console.log(`Producto ${id} añadido al carrito`);
  };

  return (
    <div className="group relative transition-transform transform hover:scale-105">
      <Card className="flex flex-col justify-between overflow-hidden bg-gray-50 hover:shadow-lg transition-shadow">
        <Link href={`/products/${id}`}>
          <div className="relative aspect-square w-full bg-white">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain p-4"
            />
            {lastUnits && (
              <div className="absolute top-2 left-2 bg-red-500 text-black text-xs font-bold px-2 py-1 rounded">
                Ultimas unidades
              </div>
            )}
          </div>
        </Link>
        <CardContent className="p-4 text-left space-y-2">
          <div>
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-md font-bold">${price.toLocaleString("es-AR")}</p>
            <p className="text-xs text-gray-500">3 cuotas sin interés</p>
          </div>
          <Button
            variant="default"
            size="sm"
            className="mt-2 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:translate-y-2 transition-all duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
