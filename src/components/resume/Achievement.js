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
            title="TCC: Finished Undergratuate Course - Eletrical Engineering."
            subTitle="10/10."
            result="Success"
            des="It was research on the area of decouplers and control techniques for mining."
          />
           <ResumeCard
            title="Advanced Javascript"
            result="Success"
            des="Alura"
          />       
            <ResumeCard
            title="Software testing"
            result="Success"
            des="Universidade Federal de Minas Gerais - UFMG"
          />      
            <ResumeCard
            title="React: typing with Typescript "
            result="Success"
            des="Alura"
          />  
            <ResumeCard
            title="React: learning the library"
            result="Success"
            des="Alura"
          />    
            <ResumeCard
            title="Bootcamp UX Design"
            result="Success"
            des="How Bootcamps"
          />   
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;