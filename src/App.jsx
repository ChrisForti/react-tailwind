import React from "react";
import { useState } from "react";
import { CountButton } from "./assets/components/CountButton";
import Nav from "./assets/components/Nav";
import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { NameFunc } from "./assets/components/NameFunction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <h2>Reactor</h2>
      </div>
      <Nav />
      <div>
        <NameFunc name="Custom Name" age={27} />
        {/* <NameCass /> */}
      </div>
      <div></div>
      <div>
        <CountButton />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
