import React from "react";

const TextSummary = ({ text, elapsedTime, accuracy, mode }) => {
  return (
    <div
      className="container my-3"
      style={{ color: mode === "dark" ? "white" : "black" }}
    >
      <h2>Text summary</h2>
      <p>
        {text.split(" ").filter((element) => element.length !== 0).length}{" "}
        words and {text.length} characters
      </p>
      <p>
        <div className="avgTime">
          <p>
            The average person reads 3 words per second, with a range of 2 to
            4.
          </p>
        </div>
        Time required to read the text inside text area: {0.333 * text.split(" ").length}{" "}
        minute
      </p>
      {elapsedTime > 0 && <p>Time elapsed: {elapsedTime.toFixed(2)} seconds</p>}

      {accuracy !== null && <p>Accuracy: {accuracy}%</p>}
    </div>
  );
};

export default TextSummary;
