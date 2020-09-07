import React from "react";
import MarkDownLogo from "./Logo";
import GitHub from "../icons/github.svg";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <nav className="navbar">
      <h3 className="title">
        <MarkDownLogo />
        &nbsp;markItDown
      </h3>
      <div className="nav-right">
        <ThemeToggle />
        <img
          onClick={() =>
            window.open("https://github.com/aromalanil/markItDown")
          }
          className="github"
          src={GitHub}
          alt=""
        />
      </div>
    </nav>
  );
}

export default NavBar;
