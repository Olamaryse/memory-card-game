import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ points, setPoints }) => {
  const [characters, setCharacters] = useState([]);
  const [setselectedCharacter, setsetselectedCharacter] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto?limit=15offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.result.map((result) =>
          fetch(result.url).then((res) => res.json())
        );
        Promise.all(fetches.then((result) => setCharacters(result)));
      });
  }, []);

  return (
    <div className="card-container">
      {characters?.map((character, index) => (
        <card
          setCharacters={setCharacters}
          key={index}
          link={character.sprites.front_default}
          name={character.name}
          points={points}
          setPoints={setPoints}
          setselectedCharacter={setselectedCharacter}
          selectedCharacters={selectedCharacters}
        />
      ))}
    </div>
  );
};

export default Cards;
