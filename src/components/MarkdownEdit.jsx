import React from "react";

function MarkdownEdit({ content, changeContent }) {
  const handleEditorChange = (event) => {
    event.preventDefault();
    changeContent(event.target.value);
  };

  return (
    <div className="markdown-edit">
      <div className="section-title">
        <h3>Markdown</h3>
      </div>
      <textarea
        value={content}
        onChange={handleEditorChange}
        id="editor"
      ></textarea>
    </div>
  );
}

export default MarkdownEdit;
