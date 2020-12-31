import React from 'react';
import { mappingLearType } from '../app-constant';

import './styles/index.css';

const TimingList = ({list, isTileView = false, month, isItCurrentMonth}) => {

  let totalHrs = 0, pl = 0, iq = 0, rjs = 0, js = 0, ts = 0, html = 0, css = 0, ds = 0;
  list && list.forEach(item => {
    totalHrs += parseFloat(item.time);
    if(item.learnType === mappingLearType['pl']) {
      pl += parseFloat(item.time);
    } else if(item.learnType === mappingLearType['iq']) {
      iq += parseFloat(item.time); 
    } else if(item.learnType === mappingLearType['rjs']) {
      rjs += parseFloat(item.time);
    } else if(item.learnType === mappingLearType['js']) {
      js += parseFloat(item.time);
    } else if(item.learnType === mappingLearType['ts']) {
      ts += parseFloat(item.time);
    } else if(item.learnType === mappingLearType['html']) {
      html += parseFloat(item.time);
    } else if(item.learnType === mappingLearType['css']) {
      css += parseFloat(item.time);
    } else if(item.learnType === mappingLearType['ds']) {
      ds += parseFloat(item.time);
    }
  });
  if(isTileView) {
    return (
      <div className={`tileContainer ${isItCurrentMonth && 'selectedTile'}`}>
        <h3>{month} - Total: {Math.floor(totalHrs/60)}{totalHrs < 120 ? 'Hr' : 'Hrs'} {totalHrs%60} Minutes</h3>
        <div className="timeContainer">
          <span>{mappingLearType['html']}</span>
          <span>{html}m</span>
        </div>
        <div className="timeContainer">
          <span>{mappingLearType['css']}</span>
          <span>{css}m</span>
        </div>
        <div className="timeContainer">
          <span>{mappingLearType['rjs']}</span>
          <span>{rjs}m</span>
        </div>
        <div className="timeContainer">
          <span>{mappingLearType['js']}</span>
          <span>{js}m</span>
        </div>
        <div className="timeContainer">
          <span>{mappingLearType['ts']}</span>
          <span>{ts}m</span>
        </div>
        <div className="timeContainer">
          <span>{mappingLearType['ds']}</span>
          <span>{ds}m</span>
        </div>
        <div className="timeContainer">
          <span>{mappingLearType['pl']}</span>
          <span>{pl}m</span>
        </div>
        <div className="timeContainer">
          <span>{mappingLearType['iq']}</span>
          <span>{iq}m</span>
        </div>
      </div>
    )
  }
  return (
    <div className="timeWrapper">
      <span>Total: {Math.floor(totalHrs/60)}{totalHrs < 2 ? 'Hr' : 'Hrs'} {totalHrs%60} Minutes</span>
      <span className={html === 0 ? 'danger' : ''}>{mappingLearType['html']}: {html}m</span>
      <span className={css === 0 ? 'danger' : ''}>{mappingLearType['css']}: {css}m</span>
      <span className={rjs === 0 ? 'danger' : ''}>{mappingLearType['rjs']}: {rjs}m</span>
      <span className={js === 0 ? 'danger' : ''}>{mappingLearType['js']}: {js}m</span>
      <span className={ts === 0 ? 'danger' : ''}>{mappingLearType['ts']}: {ts}m</span>
      <span className={ds === 0 ? 'danger' : ''}>{mappingLearType['ds']}: {ds}m</span>
      <span className={pl === 0 ? 'danger' : ''}>{mappingLearType['pl']}: {pl}m</span>
      <span className={iq === 0 ? 'danger' : ''}>{mappingLearType['iq']}: {iq}m</span>
    </div>
  )
};

export default TimingList;