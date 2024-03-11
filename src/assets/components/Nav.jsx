import React from "react";
import About from "./About";

const Nav = () => {
  return (
    <nav>
      <div>
        <div>
          <span>
            <ul>
              <img src="./react.svg" />
            </ul>
            <ul>
              <img src="./vite.svg" />
            </ul>
            <ul>Logo</ul>
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
