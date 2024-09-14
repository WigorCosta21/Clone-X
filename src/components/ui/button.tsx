type Props = {
  label: string;
  onClink?: () => void;
  size: 1 | 2 | 3;
};

export const Button = ({ label, onClink, size }: Props) => {
  return (
    <div
      onClick={onClink}
      className={`flex cursor-pointer items-center justify-center rounded-3xl bg-white font-bold text-black ${size === 1 && "h-14 text-lg"} ${size === 2 && "text-md h-10"} ${size === 3 && "h-7 text-xs"}`}
    >
      {label}
    </div>
  );
};
