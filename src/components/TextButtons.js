import React from "react";

const TextButtons = ({
  handleUpClick,
  handleLowClick,
  handleClearClick,
  handleStartTimer,
  handleStopTimer,
}) => {
  return (
    <div className="container">
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        onClick={handleClearClick}
      >
        Clear text
      </button>
      <button
        className="btn btn-success mx-1 my-1"
        onClick={handleStartTimer}
      >
        Start Timer
      </button>
      <button className="btn btn-danger mx-1 my-1" onClick={handleStopTimer}>
        Stop Timer
      </button>
    </div>
  );
};

export default TextButtons;
