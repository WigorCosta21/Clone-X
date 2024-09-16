type Props = {
  placeholder: string;
  rows: number;
  value?: string;
};

export const Textarea = ({ placeholder, rows, value }: Props) => {
  return (
    <div className="flex items-center rounded-3xl border-2 border-gray-700 has-[:focus]:border-white">
      <textarea
        className="h-full flex-1 resize-none bg-transparent p-5 outline-none"
        placeholder={placeholder}
        value={value}
        rows={rows}
      ></textarea>
    </div>
  );
};
