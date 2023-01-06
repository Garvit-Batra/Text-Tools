//Type rfc for boilerplate code
import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");
  function handleOnChange(event) {
    setText(event.target.value);
  }
  function handleUcase() {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  }
  function handleLcase() {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  }
  function handleClearCase() {
    setText("");
    props.showAlert("Cleared Text!", "success");
  }
  function handleSpaceCase() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  let btnColor = "primary";
  if (props.mode === "light" && props.theme === null) {
    btnColor = "primary";
  }
  if (props.theme === "red") {
    btnColor = "danger";
  } else if (props.theme === "yellow") {
    btnColor = "warning";
  } else if (props.theme === "green") {
    btnColor = "success";
  } else {
    btnColor = "primary";
  }

  let words = 0;
  if (text.charAt(text.length - 1) === " ") {
    words = text.split(" ").length - 1;
  } else if (text.length > 0) {
    words = text.split(" ").length;
  }
  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <div className="mb-3 mx-5 my-5">
          <h2>Enter your text</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <div className="mx-5">
          <button
            className={`btn btn-${
              // props.mode === "light" ? "primary" : "dark"
              btnColor
            } mx-1`}
            onClick={handleUcase}
          >
            Convert to Uppercase
          </button>
          <button
            className={`btn btn-${
              // props.mode === "light" ? "primary" : "dark"
              btnColor
            } mx-1`}
            onClick={handleLcase}
          >
            Convert to Lowercase
          </button>
          <button
            className={`btn btn-${
              // props.mode === "light" ? "primary" : "dark"
              btnColor
            } mx-1`}
            onClick={handleClearCase}
          >
            Clear Text
          </button>
          <button
            className={`btn btn-${
              // props.mode === "light" ? "primary" : "dark"
              btnColor
            } mx-1`}
            onClick={handleSpaceCase}
          >
            Remove Spaces
          </button>
        </div>
        <div className="mb-3 mx-5 my-5">
          <h2>Text Summary</h2>
          <p>
            {words} Words , {text.length} Characters
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0 ? text : "Enter text above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
