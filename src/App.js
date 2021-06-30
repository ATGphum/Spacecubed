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

  return (
    <div className="App">
      <Page/> 
    </div>
  );
}

function Page() {
  return (
    <div className="Page">
      <Background/>
      <Title/>
      <CoverPage/>
      <SkillBoxes/>
    </div>
  )
}

function TopBar() {

  return (
    <div className="TopBar">
      <div>
        Jeremy Vuong
      </div>
      <div>
        0405614518
      </div>
      <div>
        Linkedin
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

function Title() {

  return (
    <div className="Title">
      <div className="InitialTitle">DEAR</div> 
      <Logo/>
    </div>
  )
}

function Logo() {
  return (
    <div className="Logo">
    </div>
  )
}

function CoverPage() {
  return (
    <div className="CoverPage">
      <DescriptionHeader/>
      <Description/>
    </div>
  )
}

function DescriptionHeader() {
  return (
    <div className="DescriptionHeader">
      Cover Letter
    </div>
  )
}

function Description() {
  return (
    <div className="DescriptionBody">
      <p>
        Hi! I'm Jeremy, a 21 year old student at UWA who is soon to finish his degree in computer science
        and Data science. Throughout my 3 years at this uni, I've learnt and dabbled in various
        programming languages and software, writing things from iphone apps to cryptocurrency trading bots.
      </p>
      <p>
        Upon recently picking up web development, i can confidently say that I would love to pursue a further career in web development with Spacecubed. Although I definitely would not
        say that I am yet an expert when it comes to this field, I am extremely motivated and am a quick learner, and believe that given the chance,
        I would become a great asset to your team. To show my eagerness, I have quickly coded this site in react for my cover letter and to get in a little practice :)
        I have experience working in an agile environment at my previous internship at Spenda, in which I in fact developed a bot to automate and handle various agile and sprint items such as pbis, bugs and tasks.
      </p> 
      <p>
        I believe that I am a great cultural fit, because I love working with and developing connections with 
        a close-knit community. Ever since watching a netflix show called "Startup", I have developed an interest in startup culture, and would love to see startups up close in a real co-working environment.
        The prospect of being able to both experience this and work to directly improve the startup culture across Perth greatly excites me.
      </p>
      <p>
        Thank you, Jeremy Vuong
      </p>
    </div>
  )
}

function SkillBoxes() {
  return (
    <div className="SkillBoxes">
      <div style={{backgroundColor: "#e4588e"}}className="SkillBox">
        Skills
        <ul className="BoxList">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>C#</li>
        </ul>
      </div>
      <div style={{backgroundColor: "#ef9e44"}}className="SkillBox">
        Strengths
        <ul className="BoxList">
          <li>Teamwork</li>
          <li>Quick learner</li>
          <li>Passionate</li>
          <li>Friendly</li>
          <li>Reliable</li>
        </ul>
      </div>
      <div style={{backgroundColor: "#b4cc32"}}className="SkillBox">
        Passions
        <ul className="BoxList">
          <li>Startups</li>
          <li>Gym</li>
          <li>Culture</li>
          <li>Web Development</li>
          <li>Music</li>
        </ul>
      </div>
      <div style={{backgroundColor: "#9ed3e0"}}className="SkillBox">
        Contact
        <div className="Contacts">
          <p>jeremyvuong.dshs@gmail.com</p>
          <p>0405614518</p>
          <a href="https://www.linkedin.com/in/jeremy-vuong-265423147/" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default App;
