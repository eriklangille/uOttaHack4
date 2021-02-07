import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import { useParams } from 'react-router-dom'

type Link = {
  user: string,
  project: string
}

const ProjectPage = () => {

  const [projectInfo, setProjectInfo] = useState([]);

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

  useEffect(() => {
    getProject(user, project)
  }, [user, project]);

  return (
    <div>
      {JSON.stringify(projectInfo)}
    </div>
  );
}

export default ProjectPage