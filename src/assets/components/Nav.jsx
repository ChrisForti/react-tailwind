import React from "react";
import About from "./About";

const Nav = () => {
  return (
    <nav>
      <div>
        <div>
          <span>
            <ul>
              <a href="../logo512.png">
                <img src="./react.svg" />
              </a>
            </ul>
            <ul>
              <a href="../logo512.png">
                <img src="./vite.svg" />
              </a>
            </ul>
            <ul>
              <a href="../phoenixpage.html">
                {" "}
                <img src="./react.svg" />
              </a>
            </ul>
          </span>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <a href="https://github.com/ChrisForti/">Ideas</a>
              </li>
              <li>
                <a href="https://ChrisForti.github.io">Info</a>
              </li>
              <li>
                <About />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
