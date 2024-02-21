import { Menu } from "../Menu/Menu";
import { MenuButton } from "../Menu/MenuButton";
import { MenuDropdown } from "../Menu/MenuDropdown";
import { MenuItem } from "../Menu/MenuItem";
import { FC, useState } from "react";

export interface NavbarProps {
  handleClick: () => void;
  isOn: boolean;
  menuArray: string[];
}

export const Navbar: FC = () => {
  const menuArray: string[] = [
    "Cilike",
    "Milike",
    "Cecília",
    "Miller",
    "Milcsi",
    "Cilcsi",
  ];
  const [isOn, setIsOn] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsOn((prevOn) => !prevOn);
  };
  return (
    <Menu>
      <MenuButton onClick={handleMenuClick}>
        I am the Menu Button please click
      </MenuButton>
      <MenuDropdown isOn={isOn}>
        {menuArray.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
};
