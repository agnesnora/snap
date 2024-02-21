import { FC, ReactNode } from "react";

export interface MenuItemProps {
  children: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({ children }) => {
  return <div className="menuItem">{children}</div>;
};
