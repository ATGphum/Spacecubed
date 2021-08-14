import React, { Component, useEffect, useRef, useState } from 'react'
import '../App.css'

export default function SkillBoxes() {
    var dragula = require('react-dragula');
    const boxRef = useRef(null);;
    useEffect(() => {
      if(boxRef.current){
        var container = boxRef.current;
      }
      dragula([container]);
    });
  
    return (
      <div input ref={boxRef} className="SkillBoxes">
        <div style={{backgroundColor: "#01204b"}}className="SkillBox">
          HTML
        </div>
        <div style={{backgroundColor: "#9dd317"}}className="SkillBox">
          CSS
        </div>
        <div style={{backgroundColor: "#01204b"}}className="SkillBox">
          Javascript
        </div>
        <div style={{backgroundColor: "#9dd317"}}className="SkillBox">
          C#
        </div>
        <div style={{backgroundColor: "#01204b"}}className="SkillBox">
          Teamwork
        </div>
        <div style={{backgroundColor: "#9dd317"}}className="SkillBox">
          Quick Learner
        </div>
        <div style={{backgroundColor: "#01204b"}}className="SkillBox">
          Passionate
        </div>
        <div style={{backgroundColor: "#9dd317"}}className="SkillBox">
          Reliable
        </div>
        <div style={{backgroundColor: "#01204b"}}className="SkillBox">
          Friendly
        </div>
        <div style={{backgroundColor: "#9dd317"}}className="SkillBox">
          Startups
        </div>
        <div style={{backgroundColor: "#01204b"}}className="SkillBox">
          Gym
        </div>
        <div style={{backgroundColor: "#9dd317"}}className="SkillBox">
          Web-Development
        </div> 
        <div style={{backgroundColor: "#01204b"}}className="SkillBox">
          Contact
          <div className="Contacts">
            <p>jeremyvuong.dshs@gmail.com</p>
            <p>0405614518</p>
            <a className="Linkedin" href="https://www.linkedin.com/in/jeremy-vuong-265423147/" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div> 
      </div>
    )
  }