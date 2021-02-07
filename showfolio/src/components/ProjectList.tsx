import React from 'react'
import style from '../styles/ProjectList.module.scss'
import ProjectCard from './ProjectCard';
import {url, webUrl} from '../utils/axios'
import SubtitleText from './SubtitleText';

type ProjectListProps = {
  Projects: Array<ProjectInfo>
  Pinned?: number
}

interface ProjectInfo {
  [key:string]: any;
}

const Project = (project: ProjectInfo, index: number) =>
<ProjectCard 
  Name={project["name"]} 
  key={index}
  Image={`${url}/assets/${project["gallery"][0]}`}
  ShortDescription={project["shortDescription"]}
  StartDate={new Date(`${project["startDate"]} 8:00`)}
  EndDate={new Date(`${project["endDate"]} 8:00`)}
  Tags={project["tags"]}
  Teammates={project["teammates"]}
  Url={`./${project["id"]}`}
/>

const ProjectList = ( { Projects, Pinned } : ProjectListProps) => {
  Pinned = Pinned || 0
  let PinnedProject = Projects[Pinned] || Projects[0]
  return (
    <div className={style.ProjectList}>
      <SubtitleText>FEATURED</SubtitleText>
      <div className={style.separator}/>
      {Project(PinnedProject, Pinned)}
      <div className={style.separator2}/>
      <SubtitleText>OTHER PROJECTS</SubtitleText>
      <div className={style.separator}/>
      {Projects.map((project: ProjectInfo, index: number) => 
        index === Pinned ? null : Project(project, index)
      )}
      <div className={style.separator2}/>
    </div>
  );
}

export default ProjectList