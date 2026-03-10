import { Metadata } from "next";
import HomePage from "../components/views/HomePage";

export const metadata: Metadata = {
  title: "Ecommerce Phones",
  description:
    "Descubre la mejor selección de celulares Apple, Samsung, Xiaomi y más en Ecommerce Phones. Envíos rápidos y garantía oficial.",
};

export default function Home() {
  return <HomePage />;
}
