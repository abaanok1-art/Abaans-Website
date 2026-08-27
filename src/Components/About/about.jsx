import React from "react";
import "./about.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Seo from "../../Seo";

const ABOUT = () => {
  return (
    <div id="about">
      <Seo
        title="About"
        description="About Abaan Mubeen — O Levels student learning full-stack web development and building real-world projects."
        path="/about"
      />
      <div className="aboutmain">
        <div className="about-card">
          <h1 className="aboutme">
            <SlArrowLeft /> About Me! <SlArrowRight />
          </h1>
          
          <div className="description">
            <p>
              Hi, I'm Abaan Mubeen, a student studying O Levels and learning Full Stack Web Development. I'm passionate about building modern, responsive, and user-friendly websites.
            </p>
            <p>
              I enjoy working with both the front end and back end of web applications, and I'm always exploring new technologies to improve my skills. My goal is to become a professional full-stack web developer by continuously learning, building real-world projects, and gaining practical experience.
            </p>
            <p>
              I believe that every project is an opportunity to grow and become a better developer. When I'm not coding, I enjoy learning about new technology, solving programming challenges, and creating projects that help me develop my skills.
            </p>
            <p className="thank-you">
              Thank you for visiting my portfolio. I hope you enjoy exploring my work!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABOUT;