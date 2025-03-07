import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
  const isMe = true;

  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="text-lg font-bold">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="h-28 bg-gray-500 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(" + user.cover + ")" }}
        ></div>

        <div className="-mt-12 flex items-end justify-between">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="w-32">
            {isMe && (
              <Link href={`/${user.slug}/edit`}>
                <Button label="Editar Perfil" size={2} />
              </Link>
            )}
            {!isMe && <Button label="Seguir" size={2} />}
          </div>
        </div>
        <div className="mt-4 px-6">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-gray-500">@{user.slug}</div>
          <div className="py-5 text-lg text-gray-500">{user.bio}</div>
          {user.link && (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLink} className="size-5" />
              <Link href={user.link} className="text-blue-300" target="_blank">
                {user.link}
              </Link>
            </div>
          )}
          <div className="my-5 flex gap-6">
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguindo
            </div>
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguidores
            </div>
          </div>
        </div>
      </section>
      <ProfileFeed />
    </div>
  );
}
