import React from "react";
import MarkDownLogo from "../icons/markdown.svg"

function NavBar() {
  return (
    <nav className="navbar">
        <h3 className="title"><img src={MarkDownLogo} alt=""/>&nbsp;Markdown Editor</h3>
        
    </nav>
  );
}

export default NavBar;
