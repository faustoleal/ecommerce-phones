import { NextResponse } from "next/server";
import { PhonesModel } from "../models/phones";

export async function listarProductos() {
  try {
    const products = await PhonesModel.find();
    if (products.length === 0) {
      return NextResponse.json(
        { message: "No hay datos en la base" },
        { status: 400 }
      );
    }
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error al obtener productos" },
      { status: 500 }
    );
  }
}
