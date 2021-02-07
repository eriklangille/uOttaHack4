import React from 'react'
import style from '../styles/ProjectCard.module.scss'
import DateRange from './DateRange'
import TagList from './TagList'

type ProjectCardProps = {
  Name: string,
  Image?: string,
  ShortDescription: string,
  StartDate: Date,
  EndDate: Date,
  Tags: string[],
  Teammates?: Teammate[]
}

type Teammate = {
  Name: string,
  Role: string,
  Url: string,
}

const ProjectCard = ({Name, Image, ShortDescription, StartDate, EndDate, Tags, Teammates}: ProjectCardProps) => {
  return (
    <div className={style.project}>
      <DateRange 
        StartDate={StartDate}
        EndDate={EndDate}
      />
      <div className={style.body}>
        <div>
          <img alt="Project" src={Image} />
        </div>
        <div className={style.information}>
          <div className={style.textboxes}>
            <h2 className={style.title}>{Name}</h2>
            <p className={style.shortdescription}>{ShortDescription}</p>
          </div>
          <div>
            <TagList Tags={Tags} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard