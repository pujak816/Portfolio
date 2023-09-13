import React from "react";
import Skills from "./Skills";
import resume from "../assets/Puja's Resume.pdf";

const About = () => {
  return (
    <section
      className="overflow-hidden bg-black/95 flex  max-[1024px]:flex-col "
      id="about_section"
    >
      <div
        className="p-20 text-white w-[50%]  max-[1024px]:w-full max-[1024px]:p-6 max-[1024px]:items-start max-[1024px]:text-left"
        id="about"
      >
        <h1 className="font-extrabold text-[40px] mb-1">PUJA SINGH</h1>
        <h5 className="text-violet-400 mb-10">React Developer</h5>
        <p className=" ">
          Hello, I'm Puja Singh, a passionate React developer. I'm always eager
          to learn new technologies and stay up-to-date with the latest industry
          trends. If you're looking for a dedicated React developer who can
          bring your ideas to life, I'd love to hear from you.
        </p>
        <button className="bg-white/30 px-4 py-1  hover:bg-violet-800 rounded-lg mt-10">
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>{" "}
        </button>
      </div>
      <Skills />
    </section>
  );
};
export default About;
