import React from "react";
import "./navbar.css";
import NAVLOGO from "../../assets/aban.png";
import { Link } from "react-router-dom";

const Navbar = () => {

    //     function contactclk() {
    //         const home = document.getElementById("home");
    //         const contact = document.getElementById("contact");
    //         const about = document.getElementById("about");
    //         const skill = document.getElementById("skill");
    //                 const exp = document.getElementById("exp");
    //         home.style.display = "none";
    //         contact.style.display = "block";
    //         about.style.display = "none";
    //         skill.style.display ="none";
    //         exp.style.display="none";
    //     }

    //     function homeclk() {
    //         const home = document.getElementById("home");
    //         const contact = document.getElementById("contact");
    //         const about = document.getElementById("about");
    //         const skill = document.getElementById("skill");
    //                 const exp = document.getElementById("exp");
    //         home.style.display = "block";
    //         contact.style.display = "none";
    //         about.style.display = "none";
    //         skill.style.display ="none";
    //         exp.style.display="none";
    //     }

    //     function aboutclck() {
    //         const home = document.getElementById("home");
    //         const contact = document.getElementById("contact");
    //         const about = document.getElementById("about");
    //         const skill = document.getElementById("skill");
    //                 const exp = document.getElementById("exp");
    //         about.style.display = "block";
    //         contact.style.display = "none";
    //         home.style.display = "none";
    //         skill.style.display ="none";
    //         exp.style.display="none";
    //     }
    //     function skillclck() {
    //         const home = document.getElementById("home");
    //         const contact = document.getElementById("contact");
    //         const about = document.getElementById("about");
    //         const skill = document.getElementById("skill");
    //                 const exp = document.getElementById("exp");
    //         about.style.display = "none";
    //         contact.style.display = "none";
    //         home.style.display = "none";
    //         skill.style.display= "block";
    //           exp.style.display="none";
    //     }
    //     function expclck(){
    //  const home = document.getElementById("home");
    //         const contact = document.getElementById("contact");
    //         const about = document.getElementById("about");
    //         const skill = document.getElementById("skill");
    //         const exp = document.getElementById("exp");
    //         about.style.display = "none";
    //         contact.style.display = "none";
    //         home.style.display = "none";
    //         skill.style.display= "none";
    //         exp.style.display="block";


    //     }

    return (
        <>
            <nav className="navBar">
                <img src={NAVLOGO} alt="" width={80} />
                <ul className="list">
                    <li><Link className="navbtn" to="/">Home</Link></li>
                    <li><Link className="navbtn" to="/about">About</Link></li>
                    <li><Link className="navbtn" to="/skills">Skills</Link></li>
                    <li><Link className="navbtn" to="/experience">Experience</Link></li>
                </ul>
                <ul className="list">
                    <li><Link className="navbtn" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;