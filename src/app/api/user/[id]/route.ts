import { getUserById } from "@/src/controllers/user";
import { connectDB } from "@/src/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  console.log(id);

  connectDB();
  return getUserById(id);
}
