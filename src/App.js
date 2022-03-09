import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success");
    }
  };
  const onblue = () => {
    document.body.style.backgroundColor = "blue";
    console.log("blue");
  };
  const ongreen = () => {
    document.body.style.backgroundColor = "green";
  };
  const onred = () => {
    document.body.style.backgroundColor = "red";
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          togglemode={togglemode}
          onblue={onblue}
          ongreen={ongreen}
          onred={onred}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Textform
                heading="Enter the text to analyze"
                mode={mode}
                showalert={showalert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
