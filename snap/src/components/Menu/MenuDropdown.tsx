import { FC, ReactNode } from "react";

export interface MenuDropdownProps {
  children: ReactNode;
  isOn: boolean;
}
export const MenuDropdown: FC<MenuDropdownProps> = ({ children, isOn }) => {
  return <div className="menu--dropdown">{isOn ? children : null}</div>;
};
