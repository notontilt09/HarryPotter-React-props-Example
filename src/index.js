import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HogwartsStudents from "./components/HogwartsStudents";

function App() {
  return (
    <div className="App">
      <HogwartsStudents />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
