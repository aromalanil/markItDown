import React, { useEffect, useState, useRef } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import placeholder from "../data/placeholder";
import { MdContentCopy as CopyIcon } from "react-icons/md";
import { MdDelete as CleanIcon } from "react-icons/md";
import { Tooltip } from "@material-ui/core";

function MarkdownEdit({ content, changeContent }) {
  const [open, setOpen] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    if (content === "") {
      localStorage.setItem("markdown", placeholder);
    } else {
      localStorage.setItem("markdown", content);
    }
  }, [content]);

  const handleEditorChange = (event) => {
    event.preventDefault();
    changeContent(event.target.value);
  };

  const handleClearButton = () => {
    changeContent("");
    editorRef.current.focus();
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
          <Tooltip title="Copy to Clipboard">
            <button onClick={handleCopyButton} className="btn">
              <CopyIcon />
            </button>
          </Tooltip>
          <Tooltip title="Clean">
            <button onClick={handleClearButton} className="btn">
              <CleanIcon />
            </button>
          </Tooltip>
        </div>
      </div>
      <textarea
        className="editable"
        value={content}
        onChange={handleEditorChange}
        id="editor"
        ref={editorRef}></textarea>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled">
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
