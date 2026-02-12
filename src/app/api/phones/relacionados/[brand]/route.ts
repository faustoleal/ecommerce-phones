import { getRelacionadosPhones } from "@/src/controllers/phones";
import { connectDB } from "@/src/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { brand: string } },
) {
  connectDB();
  const { brand } = await params;
  console.log(brand);
  return getRelacionadosPhones(brand);
}
