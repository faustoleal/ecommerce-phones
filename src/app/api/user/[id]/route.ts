import { getUserById } from "@/src/controllers/user";
import { connectDB } from "@/src/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  connectDB();
  return getUserById(id);
}
