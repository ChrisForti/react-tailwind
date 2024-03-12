import React from "react";
import About from "./About";

const Nav = () => {
  return (
    <nav>
      <div>
        <div>
          <span>
            <ul>
              <li>
                <a href="https://github.com/ChrisForti/">Code</a>
              </li>
              <li>
                <a href="https://ChrisForti.github.io">Info</a>
              </li>
              <li>
                <About />
              </li>
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
              <a href="../logo512.png">
                {" "}
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
