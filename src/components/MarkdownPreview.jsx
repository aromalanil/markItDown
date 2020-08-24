import React, { useState, useEffect } from "react";
import * as marked from 'marked';


function MarkdownPreview({ content }) {
  const [html, setHtml] = useState(getHtml(content));

  useEffect(() => {
    setHtml(getHtml(content));
  }, [content]);

  const handleSaveButton=()=>{
    
  }

  return (
    <div className="markdown-preview scroll">
      <div className="section-title">
        <h3>Preview</h3>
        <button onClick={handleSaveButton} className="btn">
            Save
          </button>
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
  return marked(markdown);
};

export default MarkdownPreview;
