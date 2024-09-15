"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";

type Props = {
  user: User;
};

export const RecommendationItem = ({ user }: Props) => {
  const handleFollowButton = () => {};

  return (
    <div className="flex items-center">
      <div className="mr-2 size-10 overflow-hidden rounded-full">
        <Link href={`/${user.slug}`}>
          <img src={user.avatar} alt={user.name} className="size-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="block truncate">
          {user.name}
        </Link>
        <div className="truncate text-sm text-gray-400">@{user.slug}</div>
      </div>
      <div className="w-20 pl-2">
        <Button label="seguir" onClink={handleFollowButton} size={3} />
      </div>
    </div>
  );
};
