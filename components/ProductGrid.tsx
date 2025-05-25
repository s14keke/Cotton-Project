import ProductCard from "./ProductCard";

interface ProductGridProps {
  showTitle?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ showTitle = false }) => {
  const products = [
    {
      id: 1,
      name: "Default 1",
      price: 20000,
      image: "/products_pictures/paraiso de verao negra.png",
      lastUnits: false,
    },
    {
      id: 2,
      name: "Default 2",
      price: 20000,
      image: "/products_pictures/verao quente negra.png",
      lastUnits: true,
    },
    {
      id: 3,
      name: "Default 3",
      price: 20000,
      image: "/products_pictures/paraiso de verao gris.png",
      lastUnits: false,
    },
    {
      id: 4,
      name: "Default 4",
      price: 20000,
      image: "/products_pictures/verao quente negra.png",
      lastUnits: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {showTitle && <h2 className="text-2xl font-bold mb-6">Productos destacados</h2>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
