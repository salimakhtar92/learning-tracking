import React, { useState } from 'react';
import TimingList from '../timing-list';
import { Link } from 'react-router-dom';
import Dropdown from '../learning-type';
import { YEARS, MONTHS } from '../app-constant';

import './styles/index.css';

const Reports = ({records = []}) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = MONTHS[new Date().getMonth()];
  const [year, setYear] = useState(currentYear);
  const janRecords = [], febRecords = [], marRecords = [], aprRecords = [], mayRecords = [], junRecords = [];
  const julRecords = [], augRecords = [], sepRecords = [], octRecords = [], novRecords = [], decRecords = [];
  let totalHours = 0;
  
  records.forEach(record => {
    totalHours += record.date.startsWith(year) && parseFloat(record.time); 
    if(record.date.startsWith(`${year}-01`)) {
      janRecords.push(record);
    } else if(record.date.startsWith(`${year}-02`)) {
      febRecords.push(record);
    } else if(record.date.startsWith(`${year}-03`)) {
      marRecords.push(record);
    } else if(record.date.startsWith(`${year}-04`)) {
      aprRecords.push(record);
    } else if(record.date.startsWith(`${year}-05`)) {
      mayRecords.push(record);
    } else if(record.date.startsWith(`${year}-06`)) {
      junRecords.push(record);
    } else if(record.date.startsWith(`${year}-07`)) {
      julRecords.push(record);
    } else if(record.date.startsWith(`${year}-08`)) {
      augRecords.push(record);
    } else if(record.date.startsWith(`${year}-09`)) {
      sepRecords.push(record);
    } else if(record.date.startsWith(`${year}-10`)) {
      octRecords.push(record);
    } else if(record.date.startsWith(`${year}-11`)) {
      novRecords.push(record);
    } else if(record.date.startsWith(`${year}-12`)) {
      decRecords.push(record);
    }
  });

  const onYearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="reports-container">
      <div className="go-back">
        <Link to='/'>Go Back</Link>
      </div>
      <h2>Total - {totalHours}Hrs in the year {year}</h2>
      <Dropdown 
         dropdownArray={YEARS}
         onChange={onYearChangeHandler} 
         value={year} 
        //  placeholder="Sort by"
      />
      <div className="reportsWrapper">
        <TimingList list={janRecords} isTileView month="Jan" isItCurrentMonth={currentMonth === 'Jan'} />
        <TimingList list={febRecords} isTileView month="Feb" isItCurrentMonth={currentMonth === 'Feb'} />
        <TimingList list={marRecords} isTileView month="Mar" isItCurrentMonth={currentMonth === 'Mar'} />
        <TimingList list={aprRecords} isTileView month="Apr" isItCurrentMonth={currentMonth === 'Apr'} />
        <TimingList list={mayRecords} isTileView month="May" isItCurrentMonth={currentMonth === 'May'} />
        <TimingList list={junRecords} isTileView month="Jun" isItCurrentMonth={currentMonth === 'Jun'} />
        <TimingList list={julRecords} isTileView month="Jul" isItCurrentMonth={currentMonth === 'Jul'} />
        <TimingList list={augRecords} isTileView month="Aug" isItCurrentMonth={currentMonth === 'Aug'} />
        <TimingList list={sepRecords} isTileView month="Sep" isItCurrentMonth={currentMonth === 'Sep'} />
        <TimingList list={octRecords} isTileView month="Oct" isItCurrentMonth={currentMonth === 'Oct'} />
        <TimingList list={novRecords} isTileView month="Nov" isItCurrentMonth={currentMonth === 'Nov'} />
        <TimingList list={decRecords} isTileView month="Dec" isItCurrentMonth={currentMonth === 'Dec'} />
      </div>
    </div>
  );
};

export default Reports;