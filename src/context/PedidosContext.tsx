"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { NewPedido, Pedido } from "../types/pedidos";
import { obtenerPedidos, realizarPedidos } from "../services/pedidosService";

export type ToastVariant = "success" | "error";

interface PedidosContextType {
  pedidos: Pedido[];
  setPedidos: (pedidos: Pedido[] | []) => void;
  hacerPedido: (nuevoPedido: NewPedido) => void;
}

const PedidosContext = createContext<PedidosContextType | undefined>(undefined);

export const PedidosProvider = ({ children }: { children: ReactNode }) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    obtenerPedidos()
      .then((data) => {
        setPedidos(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const hacerPedido = async (nuevoPedido: NewPedido) => {
    try {
      const updatePedidos = await realizarPedidos(nuevoPedido);
      setPedidos(updatePedidos);
    } catch (error) {
      console.error("Error al realizar pedido:", error);
    }
  };

  return (
    <PedidosContext.Provider value={{ pedidos, setPedidos, hacerPedido }}>
      {children}
    </PedidosContext.Provider>
  );
};

export const usePedidos = () => {
  const ctx = useContext(PedidosContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de ToastProvider");
  return ctx;
};
