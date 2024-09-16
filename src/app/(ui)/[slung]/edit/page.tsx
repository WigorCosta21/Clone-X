import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { user } from "@/data/user";
import { faCamera, faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
  const isMe = true;

  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="text-lg font-bold">Editar perfil</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="flex h-28 items-center justify-center gap-4 bg-gray-500 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(" + user.cover + ")" }}
        >
          <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-black/80">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-black/80">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>

        <div className="-mt-12 px-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="-mt-24 flex size-24 items-center justify-center">
            <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-black/80">
              <FontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 p-6">
        <label>
          <p className="mb-2 text-lg text-gray-500">Nome</p>
          <Input placeholder="Digite seu nome" value={user.name} />
        </label>
        <label>
          <p className="mb-2 text-lg text-gray-500">Bio</p>
        </label>
        <label>
          <p className="mb-2 text-lg text-gray-500">link</p>
          <Input placeholder="Digite um link" value={user.link} />
        </label>
        <Button label="Salvar alterações" size={1} />
      </section>
    </div>
  );
}
