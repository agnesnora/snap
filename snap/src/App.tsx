import "./styles/App.css";
import { Person } from "./components/Person/Person";
import { Button, ButtonProps } from "./components/Button/Button";
import { FC, createContext } from "react";
import { Menu, MenuProps } from "./components/Menu/Menu";
import { MenuButton } from "./components/Menu/MenuButton";

interface AppContextInterface {
  name: string;
  age: number;
  cat: string;
}
export const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const name: string = "cili";
  const ContextValue: AppContextInterface = {
    name: "Cilike",
    age: 11,
    cat: "Milike",
  };
  return (
    <>
      <AppContext.Provider value={ContextValue}>
        <div>
          <Menu>
            <MenuButton onClick={() => console.log("menumenu")}>
              I am the Menu Button please click
            </MenuButton>
          </Menu>
          <h1>{name}</h1>
          <Person name="Mili" hasCat={true} age={11} />
          <Button onClick={() => console.log("Miluska")}>"Miluska"</Button>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
