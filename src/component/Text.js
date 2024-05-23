import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleRemoveSpace = () => {
    let newText = text.trim().replace(/\s+/g, " ");
    setText(newText);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h2>{props.heading}</h2>
          </label>

          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <span className="button-spacing"></span>{" "}
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <span className="button-spacing"></span>{" "}
        <button className="btn btn-primary" onClick={handleRemoveSpace}>
          Clear Extra Space
        </button>
        <span className="button-spacing"></span>{" "}
        <button className="btn btn-primary" onClick={handleClearText}>
          Clear Text
        </button>
        <div className="container">
          <h2>Text Summary</h2>
          <p>
            You have {text.split(" ").length} words and {text.length} characters
          </p>
          <p>It will take {0.008 * text.split(" ").length} minutes to read</p>
        </div>
      </div>
    </div>
  );
}
