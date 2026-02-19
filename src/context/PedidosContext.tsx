"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { NewPedido, Pedido } from "../types/pedidos";
import {
  editarPedidos,
  obtenerPedidos,
  realizarPedidos,
} from "../services/pedidosService";

interface PedidosContextType {
  pedidos: Pedido[];
  setPedidos: (pedidos: Pedido[] | []) => void;
  hacerPedido: (nuevoPedido: NewPedido) => void;
  editarStatus: (pedidoId: string, status: string) => void;
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
      setPedidos([...pedidos, updatePedidos]);
    } catch (error) {
      console.error("Error al realizar pedido:", error);
    }
  };

  const editarStatus = async (pedidoId: string, status: string) => {
    try {
      const editedPedido = await editarPedidos(pedidoId, status);
      setPedidos((prevPedidos) =>
        prevPedidos.map((p) => (p._id === pedidoId ? editedPedido : p)),
      );
    } catch (error) {
      console.error("Error al editar pedido:", error);
    }
  };

  return (
    <PedidosContext.Provider
      value={{ pedidos, setPedidos, hacerPedido, editarStatus }}
    >
      {children}
    </PedidosContext.Provider>
  );
};

export const usePedidos = () => {
  const ctx = useContext(PedidosContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de ToastProvider");
  return ctx;
};
