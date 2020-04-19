import React from "react";

function MarkdownEdit({ content, changeContent }) {
  const handleEditorChange = (event) => {
    event.preventDefault();
    changeContent(event.target.value);
  };

  const handleClearButton=()=>{
    changeContent("");
    document.getElementById("editor").focus();
  }

  return (
    <div className="markdown-edit scroll">
      <div className="section-title">
        <h3>Markdown</h3>
        <button onClick={handleClearButton} className="btn">
          Clear
        </button>
      </div>
      <textarea
        className="editable"
        value={content}
        onChange={handleEditorChange}
        id="editor"
      ></textarea>
    </div>
  );
}

export default MarkdownEdit;
