"use client";

import { fecthDestacados } from "@/src/services/phonesService";
import { Phones } from "@/src/types/phones";
import { useEffect, useState } from "react";

const DestacadosList = () => {
  const [phones, setPhones] = useState<Phones[]>([]);

  useEffect(() => {
    fecthDestacados()
      .then(setPhones)
      .catch((err) => console.log(err));
  }, []);

  console.log(phones);

  return <h1>Productos Destacados</h1>;
};

export default DestacadosList;
