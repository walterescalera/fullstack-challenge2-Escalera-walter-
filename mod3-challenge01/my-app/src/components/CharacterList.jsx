import React, { useEffect } from "react";
import { useState } from "react";
import { getCharacters } from "../service";
import Character from "./Character";

const CharacterList = () => {
  const [charList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [characterSelected, setCharacterSelected] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => {
        setCharList(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {
        <div className="page">
          <img src={characterSelected} alt="No hay imagen" />
        </div>
      }
      {isLoading && <h1 className="loading-text">Loading...</h1>}
      <div className="center">
        {charList.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            setCharacterSelected={setCharacterSelected}
          />
        ))}
      </div>
    </>
  );
};

export default CharacterList;
