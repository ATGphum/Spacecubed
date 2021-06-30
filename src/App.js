import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*
function App() {

  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res));
  }

  useEffect(() => {
    callAPI();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="App-intro">{apiResponse}</p>
    </div>
  );
}
*/

function App() {

  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res));
  }

  useEffect(() => {
    callAPI();
  });
  return (
    <div className="App">
      <Background/>
      <header className="App-header">
        <p>
        </p>
        <a>
        </a>
      </header>
    </div>
  );
}

function TopBar() {

  return (
    <div className="topBar">
      <div>
        Jeremy Vuong
      </div>
      <div>
        0405614518
      </div>
      <div>
        https://www.linkedin.com/in/jeremy-vuong-265423147/
      </div>
    </div>
  )
}

function Background() {

  return (
    <div className="Background">
    </div>  
  )
}

export default App;
