const Table = ({ className, ...props }: React.ComponentProps<"table">) => {
  return (
    <div className="relative w-full overflow-x-auto">
      <table className={`w-full text-sm ${className}`} {...props} />
    </div>
  );
};

const TableHeader = ({
  className,
  ...props
}: React.ComponentProps<"thead">) => {
  return <thead className={`[&_tr]:border-b ${className}`} {...props} />;
};

const TableBody = ({ className, ...props }: React.ComponentProps<"tbody">) => {
  return (
    <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
  );
};

const TableFooter = ({
  className,
  ...props
}: React.ComponentProps<"tfoot">) => {
  return (
    <tfoot
      className={`bg-muted/50 border-t font-medium [&>tr]:last:border-b-0 ${className}`}
      {...props}
    />
  );
};

const TableRow = ({ className, ...props }: React.ComponentProps<"tr">) => {
  return (
    <tr
      className={`hover:bg-muted/50 border-b transition-colors ${className}`}
      {...props}
    />
  );
};

const TableHead = ({ className, ...props }: React.ComponentProps<"th">) => {
  return (
    <th
      className={`text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap  ${className}`}
      {...props}
    />
  );
};

const TableCell = ({ className, ...props }: React.ComponentProps<"td">) => {
  return (
    <td
      className={`p-2 align-middle whitespace-nowrap ${className}`}
      {...props}
    />
  );
};

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
};
