import React, {FunctionComponent } from 'react';
import style from '../styles/SubtitleText.module.scss'

type SubTitleProps = {
}

const SubtitleText: FunctionComponent<SubTitleProps> = ({ children }) => {
  return (
    <div>
      <h2 className={style.text}>{children}</h2>
    </div>
  );
}

export default SubtitleText;