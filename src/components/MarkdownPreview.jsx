import React, { useState, useEffect } from "react";
import * as marked from "marked";
import Prism from 'prismjs';
import '../utils/prism-imports';
//css for Prism is imported in ThemeSelector

function MarkdownPreview({ content }) {
  const [html, setHtml] = useState(getHtml(content));

  useEffect(()=>{
    Prism.highlightAll();
  })

  useEffect(() => {
    setHtml(getHtml(content));
  }, [content]);

  return (
    <div className="markdown-preview scroll">
      <div className="section-title">
        <h3>Preview</h3>
        <a href={`data:text/html,${html}`} download="export.html" className="btn">
          Save
        </a>
      </div>
      <div
        id="preview"
        className="html-div"
        dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

const getHtml = (markdown) => {
  return marked(markdown);
};

export default MarkdownPreview;
