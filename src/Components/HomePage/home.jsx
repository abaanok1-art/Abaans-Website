import React from "react";
import './home.css'
import Logo from '../../assets/abaanimg.png'
import SPINER from '../../assets/react_logo_transparent.png'
const Homepage = () => {
    return(
        <>
        <div id="home" className="Homemain">
        <h1 className="Title">Welcome To <br />Abaans Website!</h1>
        {/* spinner */}
        <img  className="spinner" src={SPINER} alt=""width={100} />

        </div>
        
        </>
    )
}
export default Homepage;