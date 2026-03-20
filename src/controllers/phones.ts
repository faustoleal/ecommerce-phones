import { NextResponse } from "next/server";
import { PhonesModel } from "../models";
import { NewProduct } from "../types/phones";

type Range = {
  min: number;
  max: number;
};

export async function getPhones(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    console.log(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);

    const limit = 12;
    const skip = (page - 1) * limit;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queryMap: Record<string, (val: string) => any> = {
      brand: (val) => {
        const brands = val.split(",").map((b) => b.trim());
        return { brand: { $in: brands } };
      },
      maxPrice: (val) => ({ price: { $lte: Number(val) } }),
      fastCharging: (val) => ({ fast_charging_available: val === "true" }),
      ramCapacity: (val) => ({ ram_capacity: val }),
      primaryCameraRear: (val) => {
        const [min, max] = val.split(",").map(Number);
        const range: Range = { min, max };
        return { primary_camera_rear: { $gte: range.min, $lte: range.max } };
      },
      primaryCameraFront: (val) => {
        const [min, max] = val.split(",").map(Number);
        const range: Range = { min, max };
        return { primary_camera_front: { $gte: range.min, $lte: range.max } };
      },
      extendedMemory: (val) => ({ extended_memory_available: val === "true" }),
      internalMemory: (val) => ({ internal_memory: val }),
      has5g: (val) => ({ has_5g: val === "true" }),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filters: Record<string, (val: string) => any> = {};

    searchParams.forEach((value, key) => {
      if (!value || value === "false") return;
      if (queryMap[key]) {
        const newFilter = queryMap[key](value);

        Object.keys(newFilter).forEach((field) => {
          if (filters[field]) {
            filters[field] = { ...filters[field], ...newFilter[field] };
          } else {
            filters[field] = newFilter[field];
          }
        });
      }
    });

    const products = await PhonesModel.find(filters).skip(skip).limit(limit);

    const total = await PhonesModel.countDocuments();
    const totalPages = Math.ceil(total / limit);

    if (products.length === 0) {
      return NextResponse.json(
        { message: "No hay datos en la base" },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { page, totalPages, totalPhones: total, products },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error al obtener productos" },
      { status: 500 },
    );
  }
}

export async function getPhonesById(id: string) {
  try {
    const phone = await PhonesModel.findById(id);
    if (!phone) {
      return NextResponse.json(
        { mesagge: `No se encotro producto con id: ${id}` },
        { status: 404 },
      );
    }
    return NextResponse.json(phone, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { mesagge: "Error al obtener los productos" },
      { status: 500 },
    );
  }
}

export async function getDestacadosPhones() {
  try {
    const [apple, samsung, xiaomi] = await Promise.all([
      PhonesModel.find({ brand_name: "apple" }).limit(3),
      PhonesModel.find({
        brand_name: "samsung",
      }).limit(3),
      PhonesModel.find({ brand_name: "xiaomi" }).limit(3),
    ]);

    return NextResponse.json({ apple, samsung, xiaomi }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error al obtener productos destacados" },
      { status: 500 },
    );
  }
}

export async function getRelacionadosPhones(marca: string) {
  try {
    const relacionados = await PhonesModel.find({
      brand_name: `${marca}`,
    }).limit(3);
    return NextResponse.json(relacionados, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error al obtener productos relacionados" },
      { status: 500 },
    );
  }
}

export async function postPhone(phone: NewProduct) {
  try {
    const newPhone = await PhonesModel.create(phone);

    return NextResponse.json(newPhone, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error interno del servidor", error },
      { status: 500 },
    );
  }
}
