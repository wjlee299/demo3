import { useRef, useState } from "react";
import "./App.css";

function App1() {
  const [name, setName] = useState("");
  const inputName = useRef();

  function focus() {
    inputName.current.focus();
  }

  return (
    <>
      <input
        type="text"
        value={name}
        ref={inputName}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <h2>My name is {name}</h2>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App1;
