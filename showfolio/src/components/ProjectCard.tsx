import React from 'react'
import style from '../styles/ProjectCard.module.scss'
import DateRange from './DateRange'
import TagList from './TagList'
import { Link } from 'react-router-dom'

type ProjectCardProps = {
  Name: string,
  Image?: string,
  ShortDescription: string,
  StartDate: Date,
  EndDate: Date,
  Tags: string[],
  Teammates?: Teammate[]
  Url?: string
}

type Teammate = {
  Name: string,
  Role: string,
  Url: string,
}

const ProjectCard = ({Name, Image, ShortDescription, StartDate, EndDate, Tags, Teammates, Url}: ProjectCardProps) => {
  Teammates = Teammates || []
  Url = Url || "#"
  return (
    <div className={style.project}>
      <DateRange 
        StartDate={StartDate}
        EndDate={EndDate}
      />
      <Link to={Url} style={{textDecoration: 'none'}}>
        <div className={style.body}>
          <div className={style.image}>
            <img alt="Project" src={Image} className={style.image} />
          </div>
          <div className={style.information}>
            <div className={style.textboxes}>
              <h2 className={style.title}>{Name}</h2>
              <p className={style.shortdescription}>{ShortDescription}</p>
            </div>
            <div className={style.details}>
              <TagList Tags={Tags} />
              {(Teammates.length === 0)? null:<div className={style.teammates}><i className="material-icons">groups</i><span> {Teammates.length}</span></div>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard