import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 35, marginTop: 30, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
