"use client";

import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
  placeholder: string;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
};

export const Input = ({
  placeholder,
  value,
  password,
  filled,
  icon,
  onChange,
  onEnter,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div
      className={`flex h-14 items-center rounded-3xl border-2 border-gray-700 has-[:focus]:border-white ${filled && "bg-gray-700"}`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="ml-4 size-6 text-gray-500" />
      )}
      <input
        type={password && !showPassword ? "password" : "text"}
        className="h-full flex-1 bg-transparent px-4 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {password && (
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? faEye : faEyeSlash}
          className="mr-4 size-6 cursor-pointer text-gray-500"
        />
      )}
    </div>
  );
};
