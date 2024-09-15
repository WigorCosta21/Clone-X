import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

export const TrendingArea = () => {
  return (
    <div className="rounded-3xl bg-gray-700">
      <h2 className="p-6 text-xl">O que está acontencendo?</h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#Teste" count={1293} />
        <TrendingItem label="#Teste" count={1293} />
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  );
};
