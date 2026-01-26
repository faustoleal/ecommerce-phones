import { DecodeUser } from "@/src/types/user";
import { agregarAlCarrito } from "../services/userService";

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

export const removeItemFromCart = (
  currentUser: DecodeUser | null,
  setCurrentUser: (user: DecodeUser) => void,
  productoId: string,
) => {
  if (!currentUser) return;

  const updatedCart = currentUser.carrito.filter(
    (item) => item.productoId !== productoId,
  );

  setCurrentUser({ ...currentUser, carrito: updatedCart });
};

export const clearCartItems = (
  currentUser: DecodeUser | null,
  setCurrentUser: (user: DecodeUser) => void,
) => {
  if (!currentUser) return;
  setCurrentUser({ ...currentUser, carrito: [] });
};
