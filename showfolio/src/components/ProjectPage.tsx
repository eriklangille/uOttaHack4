import React, { useState, useEffect } from 'react'
import axios, { url } from '../utils/axios'
import { useParams, Link } from 'react-router-dom'
import style from '../styles/ProjectPage.module.scss';
import InfoBox from './InfoBox';
import {formatDate} from './DateRange'

type Params = {
  user: string,
  project: string
}

type SectionProps = {
  title: string,
  body: string
}

interface ProjectInfo {
  [key:string]: any;
}

const ProjectPage = () => {

  const [projectInfo, setProjectInfo] = useState();

  let { user, project } : Params = useParams();

  const getProject = async (userId: string, projectId: string) => {
    await axios.get(`users/${userId}/${projectId}`)
    .then(res => {
      setProjectInfo(res.data)
    })
    .catch(reason => {
      console.error(reason)
    })
  }

  const getMainProject = () => {
    let projects = []
    if (projectInfo != null) {
      // console.log("PROJECTINFO")
      // console.log(projectInfo)
      try {
        // console.log(projectInfo["Projects"][projectInfo["MainProject"]]);
        let proj : ProjectInfo = projectInfo || []
        projects = proj["Projects"][proj["MainProject"]]
      } catch {
        projects = []
      }
    }
    return projects
  }

  const getMainImage = () => {
    let projects = getMainProject()
    let result = ""
    if (!(projects instanceof Array)) {
      try {
        result = projects["gallery"][0]
      } catch {
        result = ""
      }
    }
    return result
  }

  useEffect(() => {
    getProject(user, project)
  }, [user, project]);

  const Section = ({ title, body } : SectionProps) => <div>
    <h2>{title}</h2>
    {body.split('\n').map((str, index) => <p key={index}>{str}</p>)}
  </div>

  return (
    <div className={style.projectpage}>
      {getMainProject() instanceof Array ? null :
      <div className={style.container}>
        <div className={style.controlbar}>
          <Link to={`/${user}`} style={{textDecoration: 'none'}}>
            <i className="material-icons">arrow_back</i>
          </Link>
          <div className={style.separator}/>
        </div>
        <div className={style.closebutton}>
          <Link to={`/${user}`} style={{textDecoration: 'none'}}>
            <i className="material-icons">close</i>
          </Link>
        </div>
        
        <div className={style.main}>
          <img src={`${url}/assets/${getMainImage()}`} alt="" className={style.image} />
          <div className={style.longform}>
            <h1>
              {getMainProject()["name"]}
            </h1>
            <Section title="Summary" body={getMainProject()["info"]["summary"]} />
            <Section title="Problem" body={getMainProject()["info"]["problem"]} />
            <Section title="Solution" body={getMainProject()["info"]["solution"]} />
            <Section title="Implementation" body={getMainProject()["info"]["implementation"]} />
            <Section title="Outcome" body={getMainProject()["info"]["outcome"]} />
          </div>
        </div>
        <div className={style.secondary}>
          <InfoBox Title="Timeline">
            <p>{formatDate(new Date(`${getMainProject()["startDate"]} 8:00`))} – {formatDate(new Date(`${getMainProject()["endDate"]} 8:00`))}</p>
          </InfoBox>
          <InfoBox Title="Team">
            {getMainProject()["teammates"].map((member: ProjectInfo, index: number) => <> 
              <a key={index} href={member["url"]}>{member["name"]}</a>
              <p key={`p_${index}`}>{member["role"]}</p>
            </>)}
          </InfoBox>
          <InfoBox Title="Links" Style="links">
            {Object.entries(getMainProject()["links"]).map(([key, value]) => 
              <p key={key}><a href={`${value}`}>View on {key}</a></p>
            )}
          </InfoBox>
          <InfoBox Title="Tags" Style="tags">
            <div>
              {getMainProject()["tags"].map((tag: ProjectInfo, index: number) =>
                <span key={index}>{tag}</span>
              )}
            </div>
          </InfoBox>
            </div>
      </div>
}
    </div>
  );
}

export default ProjectPage