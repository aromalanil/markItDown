import React, { useState, useEffect } from "react";
import * as marked from "marked";
import Prism from "prismjs"; //css for Prism is imported in ThemeSelector
import "../utils/prism-imports";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CgSoftwareDownload as SaveIcon } from "react-icons/cg";
import { RiFullscreenFill as FullScreenIcon } from "react-icons/ri";
import { Tooltip } from "@material-ui/core";
import DOMPurify from 'dompurify';

function MarkdownPreview({ content }) {
  const [html, setHtml] = useState(getHtml(content));
  const handle = useFullScreenHandle();

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    const sanitizedHtml = DOMPurify.sanitize(getHtml(content));
    setHtml(sanitizedHtml);
  }, [content]);

  const handleFullScreen = () =>
    handle.active ? handle.exit() : handle.enter();

  const handleSaveClick = () => {
    let link = document.createElement("a");
    link.href = `data:text/html,${html}`;
    link.download = "export.html";
    link.click();
  };

  return (
    <div className="markdown-preview scroll">
      <div className="section-title">
        <h3>Preview</h3>
        <div className="right-section">
        <Tooltip title="Download HTML">
          <button className="btn" onClick={handleSaveClick}>
            <SaveIcon />
          </button>
          </Tooltip>
          <Tooltip title="FullScreen">
            <button className="btn" onClick={handleFullScreen}>
              <FullScreenIcon />
            </button>
          </Tooltip>
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
