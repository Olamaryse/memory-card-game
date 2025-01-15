import React, { useState } from "react";
import { useSyncExternalStore } from "react";

const App = () => {
  const [points, setpoints] = useState(0);
  return (
    <div>
      <Cards points={points} setpoints=/>
    </div>
  );
};

export default App;
