import React, { useState, useEffect } from "react";
import showdown from "showdown";

function MarkdownPreview({ content }) {
  const [html, setHtml] = useState(getHtml(content));

  useEffect(() => {
    setHtml(getHtml(content));
  }, [content]);

  return (
    <div className="markdown-preview">
      <h3 className="section-title">Preview</h3>
      <div className="html-div" dangerouslySetInnerHTML={{ __html: html}}></div>
    </div>
  );
}

const getHtml = (markdown) => {
  let converter = new showdown.Converter();
  return converter.makeHtml(markdown);
};

export default MarkdownPreview;
