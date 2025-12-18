import { getPhonesById } from "@/src/controllers/phones";
import { connectDB } from "@/src/lib/db";

type Params = {
  id: string;
};

export async function GET(
  request: Request,
  context: { params: Promise<Params> }
) {
  const { id } = await context.params;

  console.log(id);

  connectDB();
  return getPhonesById(id);
}
