import { Phone } from "@/src/types/phones";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type PhoneListProps = {
  productos: Phone[];
};

const PhoneList: React.FC<PhoneListProps> = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {productos.map((el) => (
        <Link key={el._id} href={`/productos/${el._id}`}>
          <div className="group flex flex-col gap-6 rounded-xl  py-6 shadow-sm overflow-hidden border border-border hover:border-[#6366F1] transition-colors h-full">
            <div className="p-0">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <Image
                  fill
                  sizes="(max-width:481px) (max-height: 481px)"
                  src="/iphone-15-pro-max-titanium.png"
                  alt={el.model}
                  loading="eager"
                  className="object-cover"
                ></Image>
              </div>
              <div className="p-5">
                <span className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs mb-2 font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden">
                  {el.brand_name}
                </span>
                <h3 className="font-medium mb-1 text-balance">{el.model}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {el.internal_memory}GB • {el.ram_capacity} RAM
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-medium text-[#6366F1]">
                    ${el.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Stock: 5 unidades
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhoneList;
