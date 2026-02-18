"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";
import { TableCell } from "../Table";

const StatusCell = (status: { status: string }) => {
  const [open, setOpen] = useState(false);

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setOpen(!open);
  }

  const statusName = ["Pendiente", "Procesando", "Completado", "Cancelado"];

  console.log(status);
  return (
    <TableCell>
      <Select>
        <SelectTrigger className="w-[140px]" onClick={(e) => handleOnClick(e)}>
          <SelectValue>{status.status}</SelectValue>
        </SelectTrigger>
        <SelectContent className={open ? "w-[140px]" : "hidden"}>
          {statusName.map((name, i) => (
            <SelectItem
              key={i}
              isSelect={name === status.status ? true : false}
            >
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </TableCell>
  );
};

export default StatusCell;
