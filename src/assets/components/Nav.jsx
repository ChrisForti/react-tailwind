import React from "react";
import About from "./About";

const Nav = () => {
  return (
    <nav>
      <div>
        <div>
          <span>
            <ul>
              <a href="https://github.com/ChrisForti/">Code</a>
            </ul>
            <ul>
              <a href="https://ChrisForti.github.io">Info</a>
            </ul>
            <ul>
              <About />
            </ul>
          </span>
        </div>
        <div>
          <div>
            <ul>
              <a href="../tesla-page.html">
                <img src="./react.svg" />
              </a>
            </ul>
            <ul>
              <a href="../Knife-island.jpg">
                <img src="./vite.svg" />
              </a>
            </ul>
            <ul>
              <a href="../dessert-range.jpg">
                <img src="./react.svg" />
              </a>
            </ul>
            <ul>
              <a href="../reef.jpg">
                <img src="./react.svg" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
