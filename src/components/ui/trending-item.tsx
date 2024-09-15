import Link from "next/link";

type Props = {
  label: string;
  count: number;
};

export const TrendingItem = ({ label, count }: Props) => {
  return (
    <Link href={`/search?=${encodeURIComponent(label)}`} className="group/item">
      <div className="font-bold group-hover/item:underline">{label}</div>
      <div className="text-sm text-gray-400">{count} posts</div>
    </Link>
  );
};
