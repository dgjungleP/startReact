import React, { useEffect } from "react";
import "./assest/js/confetti.js";
function Login(props) {
  const myCanvas = React.createRef();

  useEffect(() => {});
  return (
    <>
      <canvas id="canvas" ref={myCanvas} width="100%" height="100%">
        {" "}
      </canvas>

      <span>hello world</span>
    </>
  );
}
export { Login };
