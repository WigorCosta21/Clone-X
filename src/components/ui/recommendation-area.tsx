import { user } from "@/data/user";
import {
  RecommendationItem,
  RecommendationItemSkeleton,
} from "./recommendation-item";

export const RecommendationArea = () => {
  return (
    <div className="rounded-3xl bg-gray-700">
      <h2 className="p-6 text-xl">Quem seguir?</h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <RecommendationItem user={user} />
        <RecommendationItemSkeleton />
      </div>
    </div>
  );
};
