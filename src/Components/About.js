import React from "react";
import email from "../images/Button.png";
import linkedIn from "../images/LinkedIn.png";

export default function About() {
  return (
    <>
      <h1 className="main--name">Aryan Raj</h1>
      <h3 className="main--devrole">Blockchain Developer</h3>
      <a href="mailto:aryanraj234.ar@gmail.com">
        <img className="email--button" src={email} />
      </a>

      <a href="https://www.linkedin.com/in/aryan-rajput-3a0760204/">
        <img className="linkedIn--button" src={linkedIn} />
      </a>
      <div className="about-container">
        <h1>About</h1>
        <p>
          I am a blockchain developer with a particular interest in making
          things simple. I try to keep up with security and best practices, and
          am always looking for new things to learn.
        </p>
        <h1>Interests</h1>
        <p>
          Books, Human Psychology, Entrepreneurship, Cybersecurity, Badminton,
          Music.
        </p>
      </div>
    </>
  );
}
