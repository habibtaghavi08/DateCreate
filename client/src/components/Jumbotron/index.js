import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 10, marginTop: 30, textAlign: "center",color:"#EC576B", backgroundColor: "black" , border: "10px solid #4EC5C1", }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
