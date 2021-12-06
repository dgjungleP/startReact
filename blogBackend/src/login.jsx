import React, { useEffect, useState } from "react";
import "./assest/js/confetti.js";
function Login(props) {
  const myCanvas = React.createRef();

  useEffect(() => {});
  return (
    <div style={{ background: "#000" }}>
      <canvas id="canvas" ref={myCanvas} width="100%" height="100%">
        {" "}
      </canvas>
    </div>
  );
}
export { Login };
