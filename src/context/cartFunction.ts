import { DecodeUser } from "@/src/types/user";
import {
  agregarAlCarrito,
  editarCantidad,
  eliminarItemdelCarrito,
  limpiarCarrito,
} from "../services/carritoService";

export const addItemToCart = async (
  currentUser: DecodeUser | null,
  setCurrentUser: (user: DecodeUser) => void,
  productoId: string,
  cantidad: number,
) => {
  if (!currentUser) return;

  try {
    const updateCarrito = await agregarAlCarrito(
      { productoId, cantidad },
      currentUser._id,
    );
    setCurrentUser(updateCarrito);
  } catch (err) {
    console.error("Error al actualizar el carrito:", err);
  }
};

export const editQuantity = async (
  currentUser: DecodeUser | null,
  setCurrentUser: (user: DecodeUser) => void,
  productoId: string,
  cantidad: number,
) => {
  if (!currentUser) return;

  try {
    const updateCarrito = await editarCantidad(
      cantidad,
      currentUser._id,
      productoId,
    );
    setCurrentUser(updateCarrito);
  } catch (err) {
    console.error("Error al actualizar el carrito:", err);
  }
};

export const removeItemFromCart = async (
  currentUser: DecodeUser | null,
  setCurrentUser: (user: DecodeUser) => void,
  productoId: string,
) => {
  if (!currentUser) return;

  try {
    const updateCarrito = await eliminarItemdelCarrito(
      currentUser._id,
      productoId,
    );
    setCurrentUser(updateCarrito);
  } catch (err) {
    console.error("Error al actualizar el carrito:", err);
  }
};

export const clearCartItems = async (
  currentUser: DecodeUser | null,
  setCurrentUser: (user: DecodeUser) => void,
) => {
  if (!currentUser) return;
  try {
    const carriotVacio = await limpiarCarrito(currentUser._id);
    setCurrentUser(carriotVacio);
  } catch (err) {
    console.error("Error al actualizar el carrito:", err);
  }
};
