import { UserModel } from "@/src/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const usuarioLogin = async (email: string, password: string) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Email incorrecto" },
        { status: 404 },
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Contraseña incorrecta" },
        { status: 400 },
      );
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        carrito: user.carrito,
      },
      process.env.SECRET as string,
    );

    console.log(token);

    return NextResponse.json(
      {
        token,
        user: {
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.role,
          carrito: user.carrito,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error interno del servidor", err: error },
      { status: 500 },
    );
  }
};
