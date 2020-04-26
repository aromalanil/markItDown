import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import placeholder from "../data/placeholder";

function MarkdownEdit({ content, changeContent }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(content===''){
      localStorage.setItem("markdown",placeholder);
    }
    else{
      localStorage.setItem("markdown",content);
    }
  }, [content])

  const handleEditorChange = (event) => {
    event.preventDefault();
    changeContent(event.target.value);
  };

  const handleClearButton = () => {
    changeContent("");
    document.getElementById("editor").focus();
  };

  const handleCopyButton = () => {
    copyToClipBoard("editor");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="markdown-edit scroll">
      <div className="section-title">
        <h3>Markdown</h3>
        <div className="right-section">
          <button onClick={handleCopyButton} className="btn">
            Copy
          </button>
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

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          <AlertTitle>Copied</AlertTitle>
          The markdown is copied to your clipboard
        </Alert>
      </Snackbar>
    </div>
  );
}

const copyToClipBoard = (id) => {
  document.getElementById(id).select();
  document.execCommand("copy");
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
};

export default MarkdownEdit;
