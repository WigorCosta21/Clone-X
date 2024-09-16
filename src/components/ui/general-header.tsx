import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  backHref: string;
};

export const GeneralHeader = ({ children, backHref }: Props) => {
  return (
    <header className="flex items-center gap-4 p-6">
      <Link
        href={backHref}
        className="flex size-12 items-center justify-center rounded-full border-2 border-gray-500"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="size-6" />
      </Link>
      <div className="flex-1">{children}</div>
    </header>
  );
};
