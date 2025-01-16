import React from "react";
import "./Card.css";

const Card = ({
  link,
  name,
  setPoints,
  setCharacters,
  selectedCharacters,
  setSelectedCharacters,
}) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = () => {
    if (selectedCharacters.includes(name)) {
      setPoints(0);
      setSelectedCharacters([]);
    } else {
      setPoints((currentPoints) => currentPoints + 1);
      setSelectedCharacters((prevInfo) => [...prevInfo, name]);
    }

    setCharacters((currentOrder) => shuffleArray([...currentOrder]));
  };

  //   const handleClick = () => {
  //     if (
  //       selectedCharacters.filter((character) => character === name).length > 0
  //     ) {
  //       setPoints(0);
  //       setselectedCharacters([]);
  //     } else {
  //       setPoints((currentPoints) => (currentPoints += 1));
  //       selectedCharacters((prevInfo) => {
  //         return [...prevInfo, name];
  //       });
  //     }

  //     setCharacters((currentOrder) => {
  //       return shuffleArray(...currentOrder);
  //     });
  //   };

  return (
    <div className="card" onClick={handleClick}>
      <div className="image-container">
        <img src={link} alt={name} className="card-image" />
      </div>
      <div className="card-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

//   return (
//     <div className="card" onClick={(e) => handleClick(name)}>
//       <div className="image-container">
//         <img src={link} alt={name} className="card-image" />
//       </div>
//       <div className="card-name">
//         <h3>{name}</h3>
//       </div>
//     </div>
//   );
// };

export default Card;
