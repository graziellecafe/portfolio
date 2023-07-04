import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14">
        <ProjectsCard
          title="SITE PESSOAL"
          des=" Site pessoal criado utilizando as stacks HTML + CSS. 
              Foi criado numa imersão da Alura."
          src={projectOne}
        />
        <ProjectsCard
          title="RESTAURANTE ALURONI"
          des=" Website construído com HTML + CSS + Javascript + React. Feito para um modelo de um restaurante. "
          src={projectTwo}
        />
        <ProjectsCard
          title="PORTFÓLIO PESSOAL"
          des=" Criado para treinar React com SASS. Um portfólio pessoal que demonstra as tecnologias que tenho conhecimento. "
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects