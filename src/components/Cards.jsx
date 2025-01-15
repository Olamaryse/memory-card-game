import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = ({ points, setPoints }) => {
  const [characters, setCharacters] = useState([]);
  const [setselectedCharacter, setsetselectedCharacter] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0")
      .then((res) => res.json())
      .then((data) => {
        if (!data.results) {
          throw new Error("Unexpected API response format");
        }
        const fetches = data.results.map((result) =>
          fetch(result.url).then((res) => res.json())
        );

        Promise.all(fetches).then((result) => setCharacters(result));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="card-container">
      {characters?.map((character, index) => (
        <Card
          key={index}
          link={character.sprites.front_default}
          name={character.name}
          points={points}
          setPoints={setPoints}
          //   setCharacters={setCharacters}
          //   selectedCharacters={selectedCharacters}
          setselectedCharacter={setselectedCharacter}
        />
      ))}
    </div>
  );
};

export default Cards;
