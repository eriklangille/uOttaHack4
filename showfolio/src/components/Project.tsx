import React from 'react'
import style from '../styles/Project.module.scss'
import DateRange from './DateRange'

type ProjectProps = {
  Name: string,
  Image?: string,
  ShortDescription: string,
  StartDate: Date,
  EndDate: Date,
  Teammates?: Teammate[]
}

type Teammate = {
  Name: string,
  Role: string,
  Url: string,
}

const Project = ({Name, Image, ShortDescription, StartDate, EndDate, Teammates}: ProjectProps) => {
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
        <div>

        </div>
      </div>
    </div>
  );
}

export default Project