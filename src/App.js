import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changeRedTheme = () => {
    if (theme === "red") {
      setTheme(null);
      if (mode === "light") {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "grey";
      }
    } else {
      setTheme("red");
      document.body.style.backgroundColor = " #B22B27";
    }
  };

  const changeYellowTheme = () => {
    if (theme === "yellow") {
      setTheme(null);
      if (mode === "light") {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "grey";
      }
    } else {
      setTheme("yellow");
      document.body.style.backgroundColor = "#EFD033";
    }
  };

  const changeGreenTheme = () => {
    if (theme === "green") {
      setTheme(null);
      if (mode === "light") {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "grey";
      }
    } else {
      setTheme("green");
      document.body.style.backgroundColor = "#71BC68";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      if (theme === null) {
        document.body.style.backgroundColor = "grey";
      }
      showAlert("Dark mode enabled successfully!", "success");
    } else {
      setMode("light");
      if (theme === null) document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled successfully!", "success");
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
        changeRedTheme={changeRedTheme}
        changeYellowTheme={changeYellowTheme}
        changeGreenTheme={changeGreenTheme}
        theme={theme}
      />
      <Alert alert={alert} />
      <div className="container">
        <Textarea
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
          theme={theme}
        />
      </div>
    </>
  );
}
export default App;
