import { FC, ReactNode } from "react";
// import { Button } from "../Button/Button";
import { DropdownButton } from "../DropdownButton/DropdownButton";

export interface MenuButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export const MenuButton: FC<MenuButtonProps> = ({ children, ...props }) => {
  return <DropdownButton {...props}>{children}</DropdownButton>;
};
