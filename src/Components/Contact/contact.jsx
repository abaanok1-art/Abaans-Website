import React from "react";
import "./contact.css";
import Seo from "../../Seo";

const Contact = () => {
  return (
    <div id="contact">
      <Seo
        title="Contact"
        description="Contact Abaan Mubeen for web development projects, collaborations, and questions."
        path="/contact"
      />
      <div className="contactpg">
        <h1>Contact</h1>
        <ul className="list2">
          <li>WhatsApp: <a href="https://wa.me/923340004884">03340004884</a></li>
          <li><a href="https://www.youtube.com/@abaan.mubeen" target="_blank" rel="noreferrer">Youtube</a></li>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#tiktok">Tiktok</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;