const Input = ({ ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      className="border border-[#E3E6EA] rounded-md h-9 w-full min-w-0 bg-transparent py-1 px-3 text-base shadow-xs outline-none"
      {...props}
    />
  );
};

export default Input;
