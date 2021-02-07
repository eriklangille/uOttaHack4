import React from 'react';
import style from '../styles/DateRange.module.scss'

type DateRange = {
  StartDate: Date,
  EndDate: Date,
}

const formatDate = (date: Date) : string => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', timeZone: "America/Vancouver"}
  return date.toLocaleDateString("en-US", options);
}

const DateRange = ({StartDate, EndDate}: DateRange) => <div className={style.body}>
  <p className={style.date}>
    {formatDate(StartDate)}
  </p>
  <div className={style.separator}/>
  <p className={style.date}>
    {formatDate(EndDate)}
  </p>
</div>

export default DateRange;