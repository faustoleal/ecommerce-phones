import { getPhonesById } from "@/src/controllers/phones";
import { connectDB } from "@/src/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  console.log(id);

  connectDB();
  return getPhonesById(id);
}
