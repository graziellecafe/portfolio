import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { logo } from "../../assets/index"

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Front-End Developer", "Fullstack Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Grazielle Café</span> 
          <img src={logo} alt="logo"/>
        </h1>
        <h2 className="text-6xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-2xl font-bodyFont leading-8 tracking-wide">
        I'm a software developer with a passion for continuos learning and knowledge sharing. 
        I want to especialize in front-end with HTML, CSS, React, Typescript and Jest and want to learn more about the back-end world using Node Js. 
        </p>
        <p className="text-2xl font-bodyFont leading-8 tracking-wide">
        At the moment I want to work as a front-end developer creating user experiences in an interactive and responsive way.
        </p>

      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner