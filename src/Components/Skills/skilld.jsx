import React from "react";
import "./skills.css";
import Seo from "../../Seo";

const SKILLS = () => {
  return (
    <div id="skills">
      <Seo
        title="Skills"
        description="Skills of Abaan Mubeen: HTML, CSS, JavaScript, React, Python, PHP, Java, C#, MySQL, MongoDB, Node.js, Express, Git, and more."
        path="/skills"
      />
      <div className="skills-card">
        <h1>My Skills</h1>
        <ul className="skills-list">
          <li className="skillli">HTML</li>
          <li  className="skillli">CSS</li>
          <li className="skillli" >JavaScript</li>
          <li className="skillli" >React</li>
          <li className="skillli" >Python</li>
          <li  className="skillli">PHP</li>
          <li  className="skillli">Java</li>
          <li  className="skillli">C#</li>
          <li  className="skillli">MySQL</li>
          <li  className="skillli">MongoDB</li>
          <li  className="skillli">Node.js</li>
          <li className="skillli">Express.js</li>
          <li className="skillli">Git</li>
          <li className="skillli">GitHub</li>
          <li className="skillli">Bootstrap</li>
          <li className="skillli">Game Development</li>
        </ul>
      </div>
    </div>
  );
};

export default SKILLS;