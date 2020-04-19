import React from "react";
import MarkDownLogo from "../icons/markdown.svg"
import GitHub from '../icons/github.svg'

function NavBar() {
  return (
    <nav className="navbar">
        <h3 onClick={()=>window.open(window.location.hostname)} className="title"><img src={MarkDownLogo} alt=""/>&nbsp;Markdown Editor</h3>
        <img onClick={()=>window.open('https://github.com/aromalanil/Markdown-Editor')}  className="github" src={GitHub} alt=""/>
    </nav>
  );
}

export default NavBar;
