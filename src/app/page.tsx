import Carousel from "../../components/Carousel";
import ProductGrid from "../../components/ProductGrid";
import CollectionsGrid from "components/CollectionsGrid";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <ProductGrid showTitle={true} />
      <CollectionsGrid />
    </>
  );
}
