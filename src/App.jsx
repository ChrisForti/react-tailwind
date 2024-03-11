import React from "react";
import { useState } from "react";
import { CountButton } from "./assets/components/CountButton";
import Nav from "./assets/components/Nav";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <h1>Static site</h1>
      </div>
      <div>
        <CountButton />
      </div>
      <div></div>
    </>
  );
}

export default App;
