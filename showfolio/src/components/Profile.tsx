import React from 'react';
import style from '../styles/Profile.module.scss';

type ProfileProps = {
  Name: string,
  Avatar?: string,
  Description: string
}

const Profile = ({ Name, Avatar, Description }: ProfileProps) => {
  return (
    <div className={style.profile}>
      <div className={style.block}>
        <div className={style.title}>
          <img className={style.avatar} src={Avatar} alt="Avatar" />
          <h1 className={style.name}>{Name}</h1>
        </div>
        <p className={style.description}>
          {Description}
        </p>
      </div>
    </div>
  );
}

export default Profile