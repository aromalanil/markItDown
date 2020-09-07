import React, { useState, useEffect } from "react";
import * as marked from "marked";
import Prism from "prismjs";
import "../utils/prism-imports";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
//css for Prism is imported in ThemeSelector

function MarkdownPreview({ content }) {
  const [html, setHtml] = useState(getHtml(content));
  const handle = useFullScreenHandle();

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    setHtml(getHtml(content));
  }, [content]);

  const handleFullScreen = () =>
    handle.active ? handle.exit() : handle.enter();

  const handleSaveClick = () => {
    let link = document.createElement("a");
    link.href=`data:text/html,${html}`;
    link.download="export.html";
    link.click();
  };

  return (
    <div className="markdown-preview scroll">
      <div className="section-title">
        <h3>Preview</h3>
        <div className="right-section">
          <button className="btn" onClick={handleSaveClick}>
            Save
          </button>
          <button className="btn" onClick={handleFullScreen}>
            Fullscreen
          </button>
        </div>
      </div>
      <FullScreen handle={handle}>
        <div
          id="preview"
          className={`html-div ${handle.active ? "preview-fullscreen" : ""}`}
          dangerouslySetInnerHTML={{ __html: html }}></div>
      </FullScreen>
    </div>
  );
}

const getHtml = (markdown) => {
  return marked(markdown);
};

export default MarkdownPreview;
