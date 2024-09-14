import { NavItem } from "@/components/nav/nav-item";
import { NavLogout } from "@/components/nav/nav-logout";
import { NavMyProfile } from "@/components/nav/nav-myprofile";
import { Logo } from "@/components/ui/logo";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl justify-center">
      <section className="sticky top-0 hidden h-screen w-72 flex-col border-r-2 border-gray-900 px-3 lg:flex">
        <div className="mt-6 flex-1">
          <Logo size={24} />
          <nav className="mt-8">
            <NavItem href="/home" icon={faHouse} label="Página incial" />
          </nav>
          <nav className="mt-8">
            <NavItem href="/profile" icon={faUser} label="Meu perfil" />
          </nav>
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <NavLogout />
          <NavMyProfile />
        </div>
      </section>
      <section className="max-w-lg flex-1">{children}</section>
      <aside className="sticky top-0 hidden h-fit w-96 flex-col gap-6 border-l-2 border-gray-900 px-8 py-6 lg:flex">
        Direita
      </aside>
    </main>
  );
}
