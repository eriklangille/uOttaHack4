import React from 'react';
import Avatar from '../users/scottlangille/avatar.jpg';
import style from '../styles/Profile.module.scss';

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.block}>
        <div className={style.title}>
          <img className={style.avatar} src={Avatar} alt="Avatar" />
          <h1 className={style.name}>Scott Langille</h1>
        </div>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>
    </div>
  );
}

export default Profile