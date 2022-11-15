import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alerts from "./components/Alerts";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  } 

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", 'success');
      document.title = 'TextUtils - DarkMode'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", 'success');
      document.title = 'TextUtils - LightMode'
    }
  }
  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        {/*<Switch>
        <Route exact path="/about">
            <About mode={mode} />
          </Route>
  <Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze..." mode={mode} />
          {/*</Route>
        </Switch>*/}
      </div>
      {/* {</Router>} */}
    </>
  );
}

export default App;