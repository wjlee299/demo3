import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import ThemeProvider from "./ThemeContext";

import "./App.css";

function App() {

  return (
    <>
    <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
