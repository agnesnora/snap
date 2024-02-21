import { FC, ReactNode } from "react";
import "./Button.css";
export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  return <button {...props}>{props.children}</button>;
};
