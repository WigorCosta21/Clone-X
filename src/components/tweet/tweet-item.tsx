import { Tweet } from "@/types/tweet";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  tweet: Tweet;
};

export const TweetItem = ({ tweet }: Props) => {
  return (
    <div className="flex gap-2 border-b-2 border-gray-900 p-6">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          {" "}
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-full"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="text-lg font-bold">
            <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
          </div>
          <div className="text-xs text-gray-500">@{tweet.user.slug}</div>
        </div>
        <div className="py-4 text-lg">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <img src={tweet.image} className="w-full rounded-2xl" />
          </div>
        )}
        <div className="mt-6 flex text-gray-500">
          <div className="flex-1">
            <Link href={`/tweet/${tweet.id}`}>
              <div className="inline-flex cursor-pointer items-center gap-2">
                <FontAwesomeIcon icon={faComment} className="size-6" />
                <div className="text-lg">{tweet.commentCount}</div>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div className="inline-flex cursor-pointer items-center gap-2">
              <FontAwesomeIcon icon={faRetweet} className="size-6" />
              <div className="text-lg">{tweet.retweetCount}</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex cursor-pointer items-center gap-2">
              <FontAwesomeIcon icon={faHeart} className="size-6" />
              <div className="text-lg">{tweet.likeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
