import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'

export default function CoverPage() {
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
      </div>
    )
  }
  
  function Description() {
    return (
      <div className="DescriptionBody">
        <p>
          Dear Douglas Hill,
        </p>
        <p>
          I am writing to apply for an intern or graduate software engineer position at Kamala Tech. I am a 21 year old student who has just graduated from UWA in a double major in Computer Science and Data science, and am mainly looking for a software development role at a startup.
        </p>
        <p>
          My main passion as it pertains to software engineering is web application development. I have experience with Javascript and various web frameworks such as React, Django and Express, and 
          am confident I will be able to leverage my development skills and problem solving skills to be of asset to the Kamala Tech team. I am currently writing a fully functional ecommerce website mainly in React in order to sell supplements and develop my front end development abilities.
        </p>
        <p>
          I have experience working in an agile environment at my previous internship at Spenda, in which I developed a bot in C# which interacts with the Azure Devops API to automate and handle various agile and sprint items such as pbis, bugs and tasks. I believe this bot could be useful 
          in some capacity should I be able to come on board with your company. I am also eager to further develop automation based software.
        </p> 
        <p>
          I believe that I am a great cultural fit, because I love working with and developing connections with a close-knit community. I am very passionate about startups, as I am a huge prononent of the work culture, lifestyle as well as the variety of different challenges startups have to offer.
          The prospect of being able to work at and contribute to a growing startup such as Kamala Tech greatly excites me.
        </p>
        <p>
          Thank you, Jeremy Vuong
        </p>
      </div>
    )
  }