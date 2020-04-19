import React, { useState, useEffect } from "react";
import Split from "react-split";
import MarkdownEdit from "./MarkdownEdit";
import MarkdownPreview from "./MarkdownPreview";

function WorkArea() {
  const [markDown, setMarkDown] = useState("# Hello World");
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
        minSize={100}
        expandToMin={false}
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
