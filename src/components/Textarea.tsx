const Textaerea = ({ ...props }: React.ComponentProps<"textarea">) => {
  return (
    <textarea
      className="border border-[#E3E6EA] rounded-md field-sizing-content min-h-16 w-full bg-transparent py-2 px-3 text-base shadow-xs outline-none resize-none"
      {...props}
    />
  );
};

export default Textaerea;
