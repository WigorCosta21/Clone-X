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

export const TrendingItemSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col gap-1">
      <div className="h-4 w-3/4 bg-gray-600"></div>
      <div className="h-4 w-1/4 bg-gray-600"></div>
    </div>
  );
};
