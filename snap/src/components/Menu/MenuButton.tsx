import { FC, ReactNode } from "react";
import { Button } from "../Button/Button";

export interface MenuButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const MenuButton: FC<MenuButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
