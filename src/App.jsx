import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParaGenerator from "./components/ParaGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParaGenerator />
    </>
  );
}

export default App;
