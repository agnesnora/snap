import { FC, ReactNode } from "react";

export interface MenuDropdownProps {
  children: ReactNode;
  isFeatureOn?: boolean;
  isCompanyOn?: boolean;
}
export const MenuDropdown: FC<MenuDropdownProps> = ({
  children,
  isFeatureOn,
  isCompanyOn,
}) => {
  return (
    <div className="menu--dropdown">
      {isFeatureOn || isCompanyOn ? children : null}
    </div>
  );
};
