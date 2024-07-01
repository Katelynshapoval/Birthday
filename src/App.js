import "./App.css";
import Questions from "./questions";
import Letter from "./letter";
import { useState, useEffect } from "react";

function App() {
  const [hide, setHide] = useState(true);

  return (
    <div className="App">
      <Questions hideLetter={(hide) => setHide(hide)} />
      <Letter hide={hide} />
    </div>
  );
}

export default App;
