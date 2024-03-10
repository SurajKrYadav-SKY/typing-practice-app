import React from "react";

const TextArea = ({ text, handleOnChange, mode }) => {
  return (
    <div className="form-group my-2">
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        style={{
          backgroundColor: mode === "dark" ? "grey" : "white",
          color: mode === "dark" ? "white" : "#1b4b64",
        }}
        id="myBox"
        rows="6"
      ></textarea>
    </div>
  );
};

export default TextArea;
