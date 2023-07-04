import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
 
      {/* part one */}   
    <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-base text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="text-2xl mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Front-End Developer"
            subTitle="Thoughtworks (2021 - 2022)"
            des="Thoughtworks is a premium consulting firm that values the diversity and inclusion of its employees. Work with different people in the world, especially USA "
          />
          <ResumeCard
            title="Web Developer & Intern"
            subTitle="DTI Digital (2021 - 2022)"
            des="Dti digital was my first opportunity as a developer. I worked on 3 projects, one international, with languages like C# and Node and stacks like React"
          />
        </div>
      </div>


      {/* part two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Electrical Engineering"
            subTitle="Universidade Federal de Ouro Preto (2022 - 2013)"
            result="10/10"
            des="At the university I had the opportunity to participate in projects such as Scientific Initiation, Monitorships, and Academic Directories, which gave me a great opportunity to gain knowledge in several areas. "
          />
          <ResumeCard
            title="Administration Technician "
            subTitle="Sebrae (2009 - 2011)"
            result="10/10"
            des="High School concomitant with learning in the Administration area. "
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education