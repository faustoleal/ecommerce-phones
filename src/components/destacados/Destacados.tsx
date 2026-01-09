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
        img="/iphone-15-pro-max-titanium.png"
      />

      <DestacadosSection
        titulo="Samsung"
        subtitulo="Potencia y diseños unidos"
        productos={samsungPhones}
        img="/samsung-galaxy-s24-ultra-black.jpg"
      />

      <DestacadosSection
        titulo="Xiaomi"
        subtitulo="Mejor precio, mejor calidad"
        productos={xiaomiPhones}
        img="/xiaomi-redmi-note-13-pro-blue.jpg"
      />
    </>
  );
};

export default Destacados;
