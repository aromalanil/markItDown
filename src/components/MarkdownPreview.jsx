import React, { useState, useEffect } from "react";
import showdown from "showdown";

function MarkdownPreview({ content }) {
  const [html, setHtml] = useState(getHtml(content));

  useEffect(() => {
    setHtml(getHtml(content));
  }, [content]);

  return (
    <div className="markdown-preview">
      <div className="section-title">
        <h3>Preview</h3>
      </div>
      <div
        id="preview"
        className="html-div"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

const getHtml = (markdown) => {
  let converter = new showdown.Converter();
  return converter.makeHtml(markdown);
};

export default MarkdownPreview;
