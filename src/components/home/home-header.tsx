"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { HomeMenu } from "./home-menu";

export const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex justify-between border-b-2 border-gray-900 p-6">
      <div className="lg:hidden">
        <Logo size={24} />
      </div>
      <div className="hidden text-2xl lg:block">Página inicial</div>

      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setShowMenu(true)}
      >
        <FontAwesomeIcon icon={faBars} className="size-6" />
      </div>

      {showMenu && <HomeMenu closeAction={() => setShowMenu(false)} />}
    </header>
  );
};
