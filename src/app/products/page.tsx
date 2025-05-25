"use client";

import ProductGrid from "@/../components/ProductGrid";
import { Button } from "@/components/ui/button";
import { FiFilter } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ProductsPage: React.FC = () => {
  return (
    <div className="relative mt-35">
      <div className="absolute top-4 left-4 z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <FiFilter className="text-lg" />
              <span>Filtrar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-4/5 max-w-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filtros</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Drops</h4>
                  <ul className="space-y-2">
                    <li><input type="checkbox" /> By our own</li>
                    <li><input type="checkbox" /> Improvising out of orbit</li>
                    <li><input type="checkbox" /> Drop 3</li>
                    <li><input type="checkbox" /> Verão na Cotton</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Talles</h4>
                  <ul className="space-y-2">
                    <li><input type="checkbox" /> XS</li>
                    <li><input type="checkbox" /> S</li>
                    <li><input type="checkbox" /> M</li>
                    <li><input type="checkbox" /> L</li>
                    <li><input type="checkbox" /> XL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Precio</h4>
                  <ul className="space-y-2">
                    <li><input type="checkbox" /> $0 - $20.000</li>
                    <li><input type="checkbox" /> $20.000 - $100.000</li>
                    <li><input type="checkbox" /> $100.000+</li>
                  </ul>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-6">Productos</h2>
        <ProductGrid />
      </main>
    </div>
  );
};

export default ProductsPage;