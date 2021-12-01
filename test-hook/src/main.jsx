import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You have cliked ${count} times`;
  });
  return (
    <div>
      <p>You have cliked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Clicke Me</button>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById("root"));
