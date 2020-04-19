import React from "react";

function MarkdownEdit({ content, changeContent }) {
  const handleEditorChange = (event) => {
      event.preventDefault();
      changeContent(event.target.value);
  };

  return (
    <div className="markdown-edit">
      <h3 className="section-title">Markdown</h3>
      <textarea value={content} onChange={handleEditorChange} id="editor"></textarea>
    </div>
  );
}

export default MarkdownEdit;
