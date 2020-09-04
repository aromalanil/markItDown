import React from "react";
import MarkDownLogo from "../icons/markdown.svg";
import GitHub from "../icons/github.svg";
import ThemeToggle from './ThemeToggle';

function NavBar() {
  return (
    <nav className="navbar">
      <h3 className="title">
        <img src={MarkDownLogo} alt="" />
        &nbsp;Markdown Editor
      </h3>
      <div className="nav-right">
        <ThemeToggle/>
        <img
          onClick={() =>
            window.open("https://github.com/aromalanil/Markdown-Editor")
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
