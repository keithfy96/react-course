import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sequi
            corporis nulla inventore nobis. In molestiae quibusdam dolorem
            accusantium atque?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
