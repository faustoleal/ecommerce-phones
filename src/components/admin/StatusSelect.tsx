"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";
import { usePedidos } from "@/src/context/PedidosContext";
import { useToast } from "@/src/context/ToastContext";

interface StatusCellProps {
  status: string;
  id: string;
  onStatusChange?: (newStatus: string) => void;
}

const StatusSelect: React.FC<StatusCellProps> = ({
  status,
  id,
  onStatusChange,
}) => {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();
  const { editarStatus } = usePedidos();

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setOpen(!open);
  }

  async function handleEditStatus(
    e: React.MouseEvent<HTMLSpanElement>,
    status: string,
  ) {
    e.stopPropagation();
    try {
      await editarStatus(id, status);
      onStatusChange?.(status);
      toast({
        variant: "success",
        title: "Éxito:",
        description: "Tu pedido se ha editado correctamente.",
      });
    } catch (err: unknown) {
      let errMsg = "No se pudo editar el pedido";

      if (err instanceof Error) {
        errMsg = err.message;
      }

      toast({
        variant: "error",
        title: "Error:",
        description: errMsg,
      });
    } finally {
      setOpen(false);
    }
  }

  const statusName = ["Pendiente", "Procesando", "Completado", "Cancelado"];

  return (
    <Select>
      <SelectTrigger className="w-[140px]" onClick={(e) => handleOnClick(e)}>
        <SelectValue>{status}</SelectValue>
      </SelectTrigger>
      <SelectContent className={open ? "w-[140px]" : "hidden"}>
        {statusName.map((name) => (
          <SelectItem key={name} isSelect={name === status ? true : false}>
            <span onClick={(e) => handleEditStatus(e, name)}>{name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default StatusSelect;
