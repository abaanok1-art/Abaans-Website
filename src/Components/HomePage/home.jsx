import React from "react";
import './home.css'
import SPINER from '../../assets/react_logo_transparent.png'
import Seo from '../../Seo'

const Homepage = () => {
    return(
        <>
        <Seo
            title="Abaan Mubeen | Full Stack Web Developer"
            description="Portfolio of Abaan Mubeen, an O Levels student and full-stack web developer building modern React websites."
            path="/"
        />
        <div id="home" className="Homemain">
        <h1 className="Title">Welcome To <br />Abaans Website!</h1>
        <p className="intro">
            I&apos;m Abaan Mubeen, a student and full-stack web developer. I build modern, responsive websites with React, JavaScript, and Node.js.
        </p>
        <img className="spinner" src={SPINER} alt="React logo" width={100} />
        </div>
        </>
    )
}
export default Homepage;