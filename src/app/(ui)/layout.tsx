import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl justify-center">
      <section className="sticky top-0 hidden h-screen w-72 flex-col border-r-2 border-gray-900 px-3 lg:flex">
        Esquerda
      </section>
      <section className="max-w-lg flex-1">{children}</section>
      <aside className="sticky top-0 hidden h-fit w-96 flex-col gap-6 border-l-2 border-gray-900 px-8 py-6 lg:flex">
        Direita
      </aside>
    </main>
  );
}
