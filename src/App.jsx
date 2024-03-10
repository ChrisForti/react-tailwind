import React from "react";
import { useState } from "react";
import { CountButton } from "./assets/components/CountButton";
import NavBar from "./assets/components/NavBar";
import RadioGroup from "./assets/components/RadioGroup";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <h1>Static site</h1>
      <div>
        <link rel="CountButton" href="/assets/App" />
        <CountButton />
      </div>
      <div>
        <RadioGroup />
      </div>
    </>
  );
}

export default App;
