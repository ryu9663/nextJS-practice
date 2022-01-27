import React, { useState } from "react";

import NavBar from "../components/NavBar";

export default function Main() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
