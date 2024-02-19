import "./styles/App.css";
import { Person } from "./components/Person";
function App() {
  const name: string = "cili";
  return (
    <>
      <div>
        <h1>{name}</h1>
        <Person name="Mili" hasCat={true} age={11} />
      </div>
    </>
  );
}

export default App;
