import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [val, seTval] = useState(0);
  const handleUpclick = () => {
    let val = text.toUpperCase();
    setText(val);
    props.showalert("Changed to uppercase", "danger");
  };
  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleSpaceclick = (e) => {
    let newtext = text.split(" ");
    console.log(newtext.length - 1);
    if (newtext.indexOf(" ") >= 0) {
      seTval("true");
    }
  };
  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <label className="form-label"></label>
        <textarea
          name=""
          className="form-control"
          id="mybox"
          cols="30"
          rows="8"
          value={text}
          style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
          onChange={handleOnchange}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpclick}>
          Change to uppercase
        </button>
        <button className="btn btn-primary mt-3" onClick={handleSpaceclick}>
          Count spaces
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.length} characters and {text.split(" ").length - 1} words
        </p>
        <p>IS space available:{val}</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
