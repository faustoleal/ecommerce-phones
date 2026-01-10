import ProductosByIdPage from "@/src/components/productos/ProductosByIdPage";

const ProductosByID = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);

  return <ProductosByIdPage id={id} />;
};

export default ProductosByID;
