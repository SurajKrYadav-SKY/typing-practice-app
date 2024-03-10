import React from "react";

export default function About({ mode }) {
  return (
    <div
      style={{
        color: mode === "dark" ? "white" : "#1b4b64",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div style={{ fontSize: "20px" }}>
        The goal of this project is to create a web-based application that
        allows users to practice typing. It provides various features like
        changing text case, clearing text, starting and stopping a timer, and
        providing text statistics.
      </div>
      <div style={{ fontSize: "16x" }}>
        When the timer is stoped, it shows the total time taken and the accuracy
        of the typing.
      </div>
      <div style={{ fontSize: "16px" }}>
        Click on Clear Text button to reset the timer and accuracy.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="./icons/gestures.png"
          alt=""
          style={{ width: "40px", height: "40px" }}
        />
      </div>
      <div style={{ fontSize: "16px", fontWeight: "bold" }}>Thankyou!</div>
    </div>
  );
}
