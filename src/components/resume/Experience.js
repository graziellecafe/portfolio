import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
      <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Camp Counselor "
            subTitle="YMCA - Savannah ( Geórgia)"
            result="Savannah - Geórgia - EUA "
            des="Working as a camp counselor in the USA at summer camps with children and teenagers. We were responsible for them and developing iterative activities "
          />
          <ResumeCard
            title="Scientific Initiation - Volunteer"
            subTitle="Universidade Federal de Ouro Preto (2021)"
            des="Scientific Initiation with the theme: ''Efficiency Analysis of Decouplers and Design Techniques for PI SISO Controllers for Grinding Processes"
          />
          <ResumeCard
            title="Director of Student Assistance - Integra D.A."
            subTitle="Universidade Federal de Ouro Preto (2020)"
            des="Responsible for the good relationship between students - faculty and university. Responsible for appointing new student representatives for departments and colleges, publicizing internship - trainee - job openings and courses to help students' development in the job market, creating cultural projects involving the entire academic community, and managing social networks."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;