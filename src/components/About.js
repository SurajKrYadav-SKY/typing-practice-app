import React from "react";

export default function About({ mode }) {
  return (
    <div style={{ color: mode === "dark" ? "white" : "#1b4b64" }}>
      The goal of this project is to create a web-based application that allows
      users to practice typing. It provides various features like changing text
      case, clearing text, starting and stopping a timer, and providing text
      statistics.
    </div>
  );
}
