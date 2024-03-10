import React from "react";

const Text = ({ text, onNextClick }) => {
  return (
    <div className="practice-text">
      <p style={{ background: "white", padding: "20px", borderRadius: "5px" }}>
        {text}
      </p>
      <button className="btn btn-primary" onClick={onNextClick}>
        Chane the text
      </button>
    </div>
  );
};

export default Text;
