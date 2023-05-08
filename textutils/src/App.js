import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import Alert from "./components/Alert";
// import { ReactDOM } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Wheater dark mode is enabled or not

  // Dark / Light Mode Functionality

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2B3035";
      showAlert(" Welcome to the Dark Side", "dark");
      document.title = "Text Utils - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Welcome to the Light Side ", "warning");
      document.title = "Text Utils - LIght";
    }
  };

  // Alert Functionality
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textbox
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>

          {/* <Textbox showAlert={showAlert} heading="Enter Text to analyze " mode={mode} /> */}
          {/* <About/> */}
        </div>
      </BrowserRouter>
    </>
  );
}
// // ReactDOM.createRoot(document.getElementById('root')).render(
// // <BrowserRouter>
// //   <Routes>
// //       <Route path='/' element={<App/>}/>
// //   </Routes>
// // </BrowserRouter>
//   );
export default App;
