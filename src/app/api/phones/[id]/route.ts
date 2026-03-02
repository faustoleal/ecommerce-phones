import { getPhonesById } from "@/src/controllers/phones";
import { connectDB } from "@/src/lib/db";
import { NextRequest } from "next/server";

type Params = {
  id: string;
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<Params> },
) {
  const { id } = await context.params;

  console.log(id);

  connectDB();
  return getPhonesById(id);
}
