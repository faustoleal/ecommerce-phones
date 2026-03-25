import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import React, { SetStateAction } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  totalPhones: number;
  totalFilter: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  totalPhones,
  totalFilter,
  setPage,
}) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-border mt-4 w-full">
      <p className="text-sm text-muted-foreground">
        Mostrando {(page - 1) * 12 + 1}-{Math.min(page * 12, totalPhones)} de{" "}
        {totalPhones} productos
      </p>
      <div className="flex items-center gap-2">
        <Button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] border border-border hover:bg-muted hover:text-foreground bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Anterior
        </Button>
        {[page - 1, page, page + 1]
          .filter((p) => p >= 1 && p <= totalPages)
          .map((p) => (
            <Button
              key={p}
              onClick={() => setPage(p)}
              className={`h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem]
                      ${
                        p === page
                          ? "bg-[#6366F1] hover:bg-[#8B5CF6] text-white"
                          : "border border-border hover:bg-muted hover:text-foreground  bg-transparent"
                      }
                    `}
            >
              {p}
            </Button>
          ))}
        <Button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] border border-border hover:bg-muted hover:text-foreground bg-transparent"
        >
          Siguiente
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
