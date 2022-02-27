import React from "react";
import ReactDOM from "react-dom";

function Hello() {
  return <>Hello</>;
}
ReactDOM.render(
  <React.StrictMode>
    <Hello></Hello>
  </React.StrictMode>,
  document.getElementById("root")
);
