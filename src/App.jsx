import React, { useState } from "react";
import { useSyncExternalStore } from "react";
import Cards from "./components/Cards";
import InfoBar from "./components/InfoBar";

const App = () => {
  const [points, setPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div>
      <InfoBar
        setHighScore={setHighScore}
        highScore={highScore}
        points={points}
      />
      <Cards points={points} setPoints={setPoints} />
    </div>
  );
};

export default App;
