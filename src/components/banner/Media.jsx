import React from 'react'
import { FaHtml5, FaInstagram, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiJest, SiTypescript } from "react-icons/si";
import { LiaCss3Alt } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";


const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-2xl uppercase font-titleFont mb-4">
            MEET ME AT 
          </h2>
          <div className="flex gap-6 h-60 w-60">
          <a href="https://www.linkedin.com/in/graziellecafe/" className="bannerIcon" >
              <FaLinkedinIn size={40}/>
            </a>
            <a href="https://twitter.com/graziellecafe" className="bannerIcon" >
              <FaTwitter size={40}/>
            </a>
            < a href="https://www.instagram.com/grazielle.cafe/" className="bannerIcon">
              <FaInstagram size={40}/>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="grid gap-6 grid-cols-3">
          <span className="bannerIcon">
              <FaHtml5 size={40} />
            </span>
            <span className="bannerIcon">
              <LiaCss3Alt size={40}/>
            </span>
          <span className="bannerIcon">
              <IoLogoJavascript size={40}/>
            </span>
            <span className="bannerIcon">
                <SiTypescript/>
            </span>
            <span className="bannerIcon">
              <FaReact size={40}/>
            </span>
            <span className="bannerIcon">
              <SiJest size={40}/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media