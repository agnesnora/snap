import { Menu } from "../Menu/Menu";
import { MenuButton } from "../Menu/MenuButton";
import { MenuDropdown } from "../Menu/MenuDropdown";
import { MenuItem } from "../Menu/MenuItem";
import { FC, useState } from "react";
import { companyArray, featuresArray } from "../../data";

export interface NavbarProps {
  handleClick: () => void;
  isFeatureOn: boolean;
  menuArray: string[];
}

export const Navbar: FC = () => {
  const [isFeatureOn, setIsFeatureOn] = useState<boolean>(false);
  const [isCompanyOn, setIsCompanyOn] = useState<boolean>(false);
  const handleFeatureClick = () => {
    setIsFeatureOn((prevOn) => !prevOn);
    // setIsCompanyOn(false);
  };

  const handleCompanyClick = () => {
    setIsCompanyOn((prevOn) => !prevOn);
    // setIsFeatureOn(false);
  };
  return (
    <div>
      <Menu>
        <MenuButton onClick={handleFeatureClick}>Features</MenuButton>
        <MenuDropdown isFeatureOn={isFeatureOn}>
          <ul>
            {featuresArray.map((feature) => (
              <MenuItem key={feature.text}>
                <li>
                  {feature.icon}
                  <a href="#">{feature.text}</a>
                </li>
              </MenuItem>
            ))}
          </ul>
        </MenuDropdown>
      </Menu>
      <Menu>
        <MenuButton onClick={handleCompanyClick}>Company</MenuButton>
        <MenuDropdown isCompanyOn={isCompanyOn}>
          <ul>
            {companyArray.map((item) => (
              <MenuItem key={item.text}>
                <li>
                  <a href="#">{item.text}</a>
                </li>
              </MenuItem>
            ))}
          </ul>
        </MenuDropdown>
      </Menu>
    </div>
  );
};
