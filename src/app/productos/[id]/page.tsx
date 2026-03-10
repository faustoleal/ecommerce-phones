import ProductosByIdPage from "@/src/components/views/ProductosByIdPage";
import { connectDB } from "@/src/lib/db";
import { PhonesModel } from "@/src/models";
import { Metadata } from "next";

type Params = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  await connectDB();
  const { id } = await params;
  const producto = await PhonesModel.findById(id);
  return {
    title: `${producto.model} | Ecommerce Phones`,
    description: `Compra el ${producto.model}, con chip ${producto.processor_brand}, pantalla ${producto.screen_size}¨, ${producto.internal_memory}GB, cámara de ${producto.primary_camera_rear}MB y batería ${producto.battery_capacity}mAh`,
  };
};

export default async function ProductosByID({ params }: Params) {
  const { id } = await params;

  return <ProductosByIdPage id={id} />;
}
