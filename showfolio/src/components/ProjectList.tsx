import React from 'react'
import style from '../styles/ProjectList.module.scss'
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <div className={style.ProjectList}>
      <ProjectCard 
        Name="uOttaHack4"
        Image={process.env.PUBLIC_URL + '/users/scottlangille/uOttahacks/image.png'}
        ShortDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." 
        StartDate={new Date("2021-02-05 8:00")}
        EndDate={new Date("2021-02-07 8:00")}
        Tags={["ReactJS", "Adobe XD", "Node.js", "Express", "TypeScript"]}
        Teammates={[
                    {
                    Name: "Scott Langille",
                    Role: "UI/UX Designer",
                    Url: "#"
                    },
                    {
                    Name: "Erik Langille",
                    Role: "Full-Stack Developer",
                    Url: "#"
                    }
                  ]}
      />
    </div>
  );
}

export default ProjectList