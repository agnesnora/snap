import { ChangeEvent, FC, useContext, useState } from "react";
import { AppContext } from "../../App";

export interface PersonProps {
  name?: string;
  age?: number;
  hasCat?: boolean;
}

export const Person: FC<PersonProps> = ({ name, hasCat, age }) => {
  const [city, setCity] = useState<string | null>("Miskolc");
  const contextMyValue = useContext(AppContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <h1>{hasCat ? "van macskája" : "nincs macskája"}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <div style={{ display: "flex" }}>
        <p>{contextMyValue?.name}</p> <p>{contextMyValue?.age}</p>
      </div>

      <input placeholder="cili's town" onChange={handleChange} />
      <h1>{city}</h1>
    </div>
  );
};
