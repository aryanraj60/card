import React from "react";
import Profile from "./Profile";
import About from "./About";
import Socials from "./Socials";

export default function Main() {
  return (
    <div className="main--container">
      <Profile />
      <About />
      <Socials />
    </div>
  );
}
