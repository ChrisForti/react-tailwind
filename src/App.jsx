import React from "react";
import useState from "react";
import CountButton from "./assets/components/CountButton";
import Nav from "./assets/components/Nav";
import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CountButton />
        <Nav />
      </div>

      <div>
        <Header />
      </div>
      <div>
        <h2>Reactor</h2>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
