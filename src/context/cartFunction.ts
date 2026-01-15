import { User } from "@/src/types/user";

export const addItemToCart = (
  currentUser: User | null,
  setCurrentUser: (user: User) => void,
  productoId: string,
  cantidad: number = 1
) => {
  if (!currentUser) return;

  const existingItem = currentUser.carrito.find(
    (item) => item.productoId === productoId
  );

  let updatedCart;
  if (existingItem) {
    updatedCart = currentUser.carrito.map((item) =>
      item.productoId === productoId
        ? { ...item, quantity: item.cantidad + cantidad }
        : item
    );
  } else {
    updatedCart = [...currentUser.carrito, { productoId, cantidad }];
  }

  setCurrentUser({ ...currentUser, carrito: updatedCart });
};

export const removeItemFromCart = (
  currentUser: User | null,
  setCurrentUser: (user: User) => void,
  productoId: string
) => {
  if (!currentUser) return;

  const updatedCart = currentUser.carrito.filter(
    (item) => item.productoId !== productoId
  );

  setCurrentUser({ ...currentUser, carrito: updatedCart });
};

export const clearCartItems = (
  currentUser: User | null,
  setCurrentUser: (user: User) => void
) => {
  if (!currentUser) return;
  setCurrentUser({ ...currentUser, carrito: [] });
};
