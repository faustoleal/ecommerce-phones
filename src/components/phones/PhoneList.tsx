"use client";

import { fetchProductos } from "@/src/services/phonesService";
import { Phones } from "@/src/types/phones";
import { useEffect, useState } from "react";

const PhoneList = () => {
  const [phones, setPhones] = useState<Phones[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchProductos(page)
      .then((data) => {
        setPhones(data.products);
      })
      .catch((error) => console.log(error));
  }, [page]);

  console.log(phones);

  return (
    <div className="lg:col-span-3 space-y-6">
      {phones.length > 0 ? (
        <div className=""></div>
      ) : (
        <div>No se encontraron productos</div>
      )}
    </div>
  );
};

export default PhoneList;
