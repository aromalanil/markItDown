import React from "react";

function MarkdownEdit({ content, changeContent }) {
  const handleEditorChange = (event) => {
    event.preventDefault();
    changeContent(event.target.value);
  };

  const handleClearButton = () => {
    changeContent("");
    document.getElementById("editor").focus();
  };

  const handleCopyButton=()=>{
   copyToClipBoard("editor");
  }

  return (
    <div className="markdown-edit scroll">
      <div className="section-title">
        <h3>Markdown</h3>
        <div className="right-section">
          <button onClick={handleCopyButton} className="btn">Copy</button>
          <button onClick={handleClearButton} className="btn">
            Clear
          </button>
        </div>
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

const copyToClipBoard=(id)=>{
  document.getElementById(id).select();
  document.execCommand("copy");
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) { 
    document.selection.empty();
  }
}

export default MarkdownEdit;
