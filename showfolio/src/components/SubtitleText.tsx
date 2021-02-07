import React, {FunctionComponent } from 'react';
import style from '../styles/SubtitleText.module.css'

type SubTitleProps = {
}

const SubtitleText: FunctionComponent<SubTitleProps> = ({ children }) => {
  return (
    <div>
      <h4 className={style.text}>{children}</h4>
    </div>
  );
}

export default SubtitleText;