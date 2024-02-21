import { FC, ReactNode } from "react";
import "./styles/DropdownButton.css";
export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export const DropdownButton: FC<ButtonProps> = (props) => {
  return <button {...props}>{props.children}</button>;
};
