import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextTools"
        firstNavLink="Home"
        secondNavLink="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <Textarea mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}
export default App;
