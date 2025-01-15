import React, { useEffect } from "react";

const InfoBar = ({ points, highScore, setHighScore }) => {
  useEffect(() => {
    setHighScore((currentHighScore) => {
      return points >= currentHighScore ? points : currentHighScore;
    });
  }, [points]);

  return (
    <div className="infoBar-container">
      <h4>Current points: {points} </h4>
      <h4>High Score: {highScore} </h4>
    </div>
  );
};

export default InfoBar;
