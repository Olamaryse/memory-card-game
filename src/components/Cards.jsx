import React, { useState } from "react";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [setselectedCharacter, setsetselectedCharacter] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto?limit=15offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.result.map((result) =>
          fetch(result.url).then((res) => res.json())
        );
      });
    Promise.all(fetches.then((result) => setCharacters(result)));
  }, []);

  return <div></div>;
};

export default Cards;
