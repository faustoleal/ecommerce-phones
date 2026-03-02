import { getRelacionadosPhones } from "@/src/controllers/phones";
import { connectDB } from "@/src/lib/db";
import { NextRequest } from "next/server";

type Params = {
  brand: string;
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<Params> },
) {
  connectDB();
  const { brand } = await context.params;
  console.log(brand);
  return getRelacionadosPhones(brand);
}
