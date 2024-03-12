import React from "react";
import { CountButton } from "./CountButton";

function Title() {
  return (
    <div className="Title">
      <h1>
        Static site<h2>Reactor</h2>
      </h1>

      <div className="Title-Subtitle">
        <CountButton />
      </div>
    </div>
  );
}

export default Title;
