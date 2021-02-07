import React, { useState, useEffect } from 'react'
import axios, { url } from '../utils/axios'
import { useParams } from 'react-router-dom'

type Link = {
  user: string,
  project: string
}

type SectionProps = {
  title: string,
  body: string
}

const ProjectPage = () => {

  const [projectInfo, setProjectInfo] = useState();

  let { user, project } : Link = useParams();

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
        console.log(projectInfo["Projects"][projectInfo["MainProject"]]);
        projects = projectInfo["Projects"][projectInfo["MainProject"]]
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
    {body.split('\n').map(str => <p>{str}</p>)}
  </div>

  return (
    <div>
      {getMainProject() instanceof Array ? null :
      <div>
        <div>
          <img src={`${url}/assets/${getMainImage()}`} />
          <h1>
            {getMainProject()["name"]}
          </h1>
          <div>
            <Section title="Summary" body={getMainProject()["info"]["summary"]} />
            <Section title="Problem" body={getMainProject()["info"]["problem"]} />
            <Section title="Solution" body={getMainProject()["info"]["solution"]} />
            <Section title="Implementation" body={getMainProject()["info"]["implementation"]} />
            <Section title="Outcome" body={getMainProject()["info"]["outcome"]} />
          </div>
        </div>
      </div>
}
    </div>
  );
}

export default ProjectPage