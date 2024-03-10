import React from "react";

export default function About({ mode }) {
  return (
    <div
      style={{
        color: mode === "dark" ? "white" : "#1b4b64",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      The goal of this project is to create a web-based application that allows
      users to practice typing. It provides various features like changing text
      case, clearing text, starting and stopping a timer, and providing text
      statistics.
      <div>
        When the timer is stoped, it shows the total time taken and the accuracy
        of the typing.
      </div>
      <div>Click on Clear Text button to reset the timer and accuracy.</div>
    </div>
  );
}
