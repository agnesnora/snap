import { FC, ReactNode } from "react";

export interface MenuProps {
  children: ReactNode;
}

export const Menu: FC<MenuProps> = ({ children }) => {
  return <div>{children}</div>;
};
