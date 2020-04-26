import React, { useState, useEffect } from "react";
import Split from "react-split";
import MarkdownEdit from "./MarkdownEdit";
import MarkdownPreview from "./MarkdownPreview";
import placeholder from "../data/placeholder";

function WorkArea() {
  let markdown = localStorage.getItem("markdown") || placeholder;
  const [markDown, setMarkDown] = useState(markdown);
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    let changeOrientation = () => {
      setOrientation(window.innerWidth < 600 ? "vertical" : "horizontal");
    };
    changeOrientation();
    window.onresize = changeOrientation;
  }, []);

  return (
    <div className="work-area">
      <Split
        className="wrapper-card"
        sizes={[50, 50]}
        minSize={orientation === "horizontal" ? 300 : 100}
        expandToMin={true}
        gutterAlign="center"
        direction={orientation}
      >
        <MarkdownEdit content={markDown} changeContent={setMarkDown} />
        <MarkdownPreview content={markDown} />
      </Split>
    </div>
  );
}

export default WorkArea;
