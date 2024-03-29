import "./styles/App.css";
// import { Person } from "./components/Person/Person";
// import { Button, ButtonProps } from "./components/Button/Button";
import { Navbar } from "./components/Navbar/Navbar";
import { FC, createContext } from "react";
// import { Menu, MenuProps } from "./components/Menu/Menu";
// import { MenuButton } from "./components/Menu/MenuButton";
// import { MenuDropdown } from "./components/Menu/MenuDropdown";
// import { MenuItem } from "./components/Menu/MenuItem";
// import { useState } from "react";
interface AppContextInterface {
  name: string;
  age: number;
  cat: string;
}
export const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  // const name: string = "cili";
  const ContextValue: AppContextInterface = {
    name: "Cilike",
    age: 11,
    cat: "Milike",
  };

  return (
    <>
      <AppContext.Provider value={ContextValue}>
        <div>
          <Navbar />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
