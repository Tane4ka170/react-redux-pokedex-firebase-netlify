import React from "react";
import Wrapper from "../sections/Wrapper";

const About = () => {
  return function About() {
    return (
      <div className="profile">
        <h1 className="profile-text">Hi I am Tanya</h1>
        <h2 className="profile-text">The creator of this awesome pokedex</h2>
      </div>
    );
  };
};

export default Wrapper(About);
