"use client";

import { fecthDestacados } from "@/src/services/phonesService";
import { Phones } from "@/src/types/phones";
import { useEffect, useState } from "react";
import DestacadosSection from "./DestacadosSection";

const Destacados = () => {
  const [applePhones, setApplePhones] = useState<Phones[]>([]);
  const [samsungPhones, setSamsungPhones] = useState<Phones[]>([]);
  const [xiaomiPhones, setXiaomiPhones] = useState<Phones[]>([]);

  useEffect(() => {
    fecthDestacados()
      .then((data) => {
        setApplePhones(data.apple);
        setSamsungPhones(data.samsung);
        setXiaomiPhones(data.xiaomi);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <DestacadosSection
        titulo="Apple"
        subtitulo="La innovación en su máxima expresión"
        productos={applePhones}
        img="/iphone14.jfif"
      />

      <DestacadosSection
        titulo="Samsung"
        subtitulo="Potencia y diseños unidos"
        productos={samsungPhones}
        img="/samsungS23.jpeg"
      />

      <DestacadosSection
        titulo="Xiaomi"
        subtitulo="Mejor precio, mejor calidad"
        productos={xiaomiPhones}
        img="/xiaomiredminote12proplus.jfif"
      />
    </>
  );
};

export default Destacados;
