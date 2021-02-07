import React, {FunctionComponent } from 'react';
import style from '../styles/InfoBox.module.scss';

type InfoBoxProps = {
  Title: string,
  Style?: string,
}

const InfoBox: FunctionComponent<InfoBoxProps> = ({ children, Title, Style }) => {
  Style = Style || ""
  return (
    <div className={style.infobox}>
        <div className={style.title}>
            <p>
                {Title}
            </p>
        </div>
        <div className={`${style.content} ${style[`${Style}`]}`}>
            {children}
        </div>
    </div>
  );
}

export default InfoBox