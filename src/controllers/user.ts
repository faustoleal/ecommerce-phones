import { NextResponse } from "next/server";
import { UserModel } from "../models/user";
import { CartItem, NewUser } from "../types/user";
import bcrypt from "bcrypt";

export async function getUsuarios() {
  try {
    const users = await UserModel.find();
    console.log(users);
    if (users.length === 0) {
      return NextResponse.json(
        { message: "No hay datos en la base" },
        { status: 400 },
      );
    }
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error al obtener usuarios" },
      { status: 500 },
    );
  }
}

export async function getUserById(id: string) {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return NextResponse.json(
        { mesagge: `No se encontro el usuario con id: ${id}` },
        { status: 404 },
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { mesagge: "Error al obtener los user" },
      { status: 500 },
    );
  }
}

export async function crearUsuario(nuevoUsuario: NewUser) {
  const { name, username, email, password, role } = nuevoUsuario;
  try {
    const existingUser = await UserModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "El email o nombre de usuario ya está en uso." },
        { status: 400 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      name,
      username,
      email,
      password: hashedPassword,
      role: role || "user",
      carrito: [],
    });

    return NextResponse.json(
      {
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error interno del servidor", error },
      { status: 500 },
    );
  }
}

export async function acutalizarCarrito(cart: CartItem, id: string) {
  try {
    const { productoId, cantidad } = cart;

    if (!productoId || !cantidad || cantidad < 1) {
      return NextResponse.json({ message: "Datos inválidos" }, { status: 400 });
    }

    const user = await UserModel.findById(id);

    if (!user) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 },
      );
    }

    const existingItem = user.carrito.find(
      (item: CartItem) => item.productoId.toString() === productoId,
    );

    if (existingItem) {
      existingItem.cantidad += cantidad;
    } else {
      user.carrito.push({ productoId, cantidad });
    }

    await user.save();

    const populateUser = await UserModel.findById(id).populate({
      path: "carrito.productoId",
      select: "brand_name price model internal_memory ram_capacity",
    });

    return NextResponse.json(populateUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al actualizar el carrito" },
      { status: 500 },
    );
  }
}
