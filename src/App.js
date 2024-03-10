import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Text from "./components/Text";
import { texts } from "./Data";
import Contacts from "./components/Contacts";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b4b64";
      showAlert("The dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
              {" "}
            </Route>
            <Route exact path="/contacts" element={<Contacts mode={mode} />}>
              {" "}
            </Route>

            <Route
              exact
              path="/"
              element={
                <>
                  <Text
                    text={texts[currentIndex]}
                    onNextClick={handleNextText}
                  />
                  <TextForm
                    showAlert={showAlert}
                    heading="Practice your typing speed : "
                    mode={mode}
                    text={texts[currentIndex]} // Pass the text data
                  />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
