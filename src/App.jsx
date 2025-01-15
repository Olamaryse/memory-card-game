import React, { useState } from "react";
import { useSyncExternalStore } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [points, setPoints] = useState(0);
  const [highScore, sethighScore] = useState(0);
  return (
    <div>
      <Cards points={points} setPoints={setPoints} />
    </div>
  );
};

export default App;
