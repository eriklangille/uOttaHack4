import React from 'react';
import style from '../styles/Header.module.scss';

const Header = () => {
  return (
    <div>
      <h1 className={style.logo}>
        showfol.io
      </h1>
    </div>
  );
}

export default Header;