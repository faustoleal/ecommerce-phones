import { sendConsulta } from "@/src/controllers/contacto";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, body } = await req.json();
  const consulta = { name, email, phone, body };

  return sendConsulta(consulta);
}
