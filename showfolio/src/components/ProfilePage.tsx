import React, {useState, useEffect} from 'react'
import Profile from './Profile'
import { useParams } from 'react-router-dom'
import axios, { url } from '../utils/axios'

import ProjectList from './ProjectList'
import Header from './Header'

type Link = {
  user: string
}

interface ProjectInfo {
  [key:string]: any;
}

const ProfilePage = () => {
  const [profileInfo, setProfileInfo] = useState();

  let { user } : Link = useParams();

  const getProfile = async (userId: string) => {
    await axios.get(`users/${userId}`)
    .then(res => {
      setProfileInfo(res.data)
    })
    .catch(reason => {
      console.error(reason)
    })
  }

  const getProfileInfo = () => {
    let profile : ProjectInfo = profileInfo || []
    return profile
  }

  const getProjectImage = (projectid: number) => {
    let profile : ProjectInfo = profileInfo || []
    let image = ""
    try {
      image = profile["Projects"][projectid]["Gallery"][0]
    } catch {
      image = ""
    }
    return image
  }

  useEffect(() => {
    getProfile(user)
  }, [user]);

  return (
    <div>
      {getProfileInfo() instanceof Array ? null : 
        <div>
          <Header />
          <Profile 
          Name={getProfileInfo()["name"]} 
          Avatar={`${url}/assets/${getProfileInfo()["Avatar"]}`} 
          Description={getProfileInfo()["description"]}
          />
          <ProjectList Projects={getProfileInfo()["Projects"]} User={user}/>
        </div>
      }
    </div>
  );
}

export default ProfilePage