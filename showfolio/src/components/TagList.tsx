import React from 'react';
import style from '../styles/TagList.module.scss';

type TagsProps = {
  Tags: string[]
}

const TagList = ({ Tags }: TagsProps ) => <div className={style.tagGroup}>
  {Tags.map((tag, index) => <div className={`${style.tag} ${index == Tags.length - 1 ? style.tagLast : style.tagRest}`}>
    <p className={style.tagText}>{tag}</p>
  </div>)}
</div>

export default TagList;