import React from "react";
import twitter from "../images/tweet.png";
import github from "../images/GitHub.png";

export default function Socials() {
  return (
    <div className="socials-container">
      <a href="https://twitter.com/aryanraj_60">
        <img src={twitter} className="twitter-icon" />
      </a>
      <a href="https://github.com/aryanraj60">
        <img src={github} className="github-icon" />
      </a>
    </div>
  );
}
