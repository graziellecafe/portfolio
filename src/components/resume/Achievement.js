import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">School Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Completion of course work."
            subTitle="10/10."
            result="Success"
            des="It was research on the area of decouplers and control techniques for mining."
          />
          <ResumeCard
            title="Scientific research."
            result="Success"
            des="Scientific Initiation with the theme: ''Analysis of the Efficiency of Decouplers and Design Techniques of PI SISO Controllers for Milling Processes'"
          />
          <ResumeCard
            title=" Student Assistance Director - Academic Directory Integra D.A."
            result="Success"
            des="Responsible for the good relationship between students - teachers and university. Responsible for nominating new student representatives for departments and collegiate bodies, publicizing internship - trainee - jobs and courses to help students develop in the job market, creating cultural projects involving the entire academic community and managing social networks."
          />
           <ResumeCard
            title="Sales - Fundação Estudar"
            result="Success"
            des="Together with other volunteers, we sought to bring the first edition of the Leadership in Practice course to the city of João Monlevade. Research, sale, partnerships and organization.."
          />          
          <ResumeCard
          title="Counselor"
          result="Success"
          des="English language immersion program through weekly meetings that provided participants with knowledge of how to be a counselor at YMCA's of summer camps in the USA.."
        />         
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;