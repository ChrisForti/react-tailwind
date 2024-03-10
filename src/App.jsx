import React from "react";
import { useState } from "react";
import { CountButton } from "./assets/components/CountButton";
import { RadioGroup } from "@headlessui/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RadioGroup />
      </div>
      <h1 className="hue-rotate-180">Static site</h1>
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
