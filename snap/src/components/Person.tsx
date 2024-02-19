import { ChangeEvent, FC, useState } from "react";

export interface PersonProps {
  name?: string;
  age?: number;
  hasCat?: boolean;
}

export const Person: FC<PersonProps> = ({ name, hasCat, age }) => {
  const [city, setCity] = useState<string | null>("Miskolc");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <h1>{hasCat ? "van macskája" : "nincs macskája"}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <input placeholder="cili's town" onChange={handleChange} />
      <h1>{city}</h1>
    </div>
  );
};
