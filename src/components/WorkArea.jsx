import React, { useState } from "react";
import Split from "react-split";
import MarkdownEdit from "./MarkdownEdit";
import MarkdownPreview from "./MarkdownPreview";


function WorkArea() {
  const [markDown, setMarkDown] = useState("# Hello World");

  return (
    <div className="work-area">
      <Split
        className="wrapper-card"
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <MarkdownEdit content={markDown} changeContent={setMarkDown} />
        <MarkdownPreview content={markDown} />
      </Split>
    </div>
  );
}

export default WorkArea;
