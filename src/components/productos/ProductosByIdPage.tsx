"use client";

import { fetchProductosByID } from "@/src/services/phonesService";
import { Phone } from "@/src/types/phones";
import { useEffect, useState } from "react";

const ProductosByIdPage = ({ id }: { id: string }) => {
  const [producto, setProducto] = useState<Phone | undefined>(undefined);

  useEffect(() => {
    fetchProductosByID(id)
      .then(setProducto)
      .catch((error) => console.log(error));
  }, [id]);

  console.log(id, producto);

  return (
    <>
      <h1>{`Producto ${id}`}</h1>
    </>
  );
};

export default ProductosByIdPage;
