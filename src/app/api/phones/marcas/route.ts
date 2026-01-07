import { getDestacadosPhones } from "@/src/controllers/phones";
import { connectDB } from "@/src/lib/db";

export async function GET() {
  connectDB();
  return getDestacadosPhones();
}
