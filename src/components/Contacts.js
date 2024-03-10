import React from "react";

const Contacts = ({ mode }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: mode === "dark" ? "white" : "#1b4b64",
      }}
    >
      For contacts follow the link of my portfolio:
      <a
        href="https://github.com/SurajKrYadav-SKY"
        target="_blank"
        rel="noopener noreferrer"
      >
        click
      </a>
    </div>
  );
};

export default Contacts;
