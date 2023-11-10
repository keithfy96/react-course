import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 leading-loose mt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae, dolor quis voluptate sequi tenetur dignissimos
            blanditiis veritatis laboriosam harum? Rem corporis, maiores ipsa
            beatae nihil in vero. Animi, exercitationem repudiandae.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
