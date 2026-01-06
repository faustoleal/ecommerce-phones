import { NextResponse } from "next/server";
import { UserModel } from "../models/user";

export async function getUsuarios() {
  try {
    const users = await UserModel.find();
    if (users.length === 0) {
      return NextResponse.json(
        { message: "No hay datos en la base" },
        { status: 400 }
      );
    }
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error al obtener usuarios" },
      { status: 500 }
    );
  }
}
