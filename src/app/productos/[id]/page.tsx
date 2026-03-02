import ProductosByIdPage from "@/src/components/views/ProductosByIdPage";

export default async function ProductosByID({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return <ProductosByIdPage id={id} />;
}
