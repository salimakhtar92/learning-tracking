import React, {useState} from 'react';
import LearningTypeDropdown from '../learning-type';
import TrackingList from '../tracking-list';
import Loader from 'react-loader-spinner'
import firebase from 'firebase';
import TimingList from '../timing-list';
import { Link } from 'react-router-dom';
import AddLearnType from '../add-learn-type';
import { LEARNING_TYPE } from '../app-constant';
import { getCurrentDate } from '../utils';

import './styles/index.css';

const Tracking = ({records, recordsRef}) => {
  const initialValue = {
    learnType: '',
    date: getCurrentDate(),
    time: '',
    comment: ''
  };
  
  const [newData, setNewData] = useState(initialValue);
  const [searchKey, setSearchKey] = useState('');

  const onChangeHandler = ({target: {name, value}}) => {
    setNewData({...newData, [name]: value});
  };

  const resetSearchKey = () => {
    setSearchKey('')
  }

  const validateRequestParam = () => {
    const errorObject = [];
    if(!newData.learnType) {
      errorObject.push('learnType');
    } else if(!newData.comment) {
      errorObject.push('comment');
    } else if(!newData.time) {
      errorObject.push('time');
    }
    return !errorObject.length;
  }

  const onSubmit = async (event) => {

    if(validateRequestParam()) {
      const auth = firebase.auth();
      const  { displayName, email } = auth.currentUser; 
      event.preventDefault();
      newData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      newData.userName = displayName;
      newData.email = email;
      await recordsRef.add(newData);
      setNewData(initialValue)
    } else {
      console.log('All fields are required');
    }
  };

  const onChangeSearch = (event) => {
    setSearchKey(event.target.value)
  }

  return (
    <div className="container-wrapper">
      <AddLearnType 
        onChangeHandler={onChangeHandler} 
        onSubmit={onSubmit}
        newData={newData}
      />
      <div className="searchWrapper">
        <div>
          <LearningTypeDropdown 
            dropdownArray={LEARNING_TYPE}
            onChange={onChangeSearch} 
            value={searchKey} 
            placeholder="Search by"
          />
          <button className="reset-btn" onClick={resetSearchKey}>Reset</button>
        </div>
        <Link to="/reports">Show Reports</Link>
      </div>
      {!!records && <TimingList list={records} />}
      {records ? (records.length ? <TrackingList list={[...records].filter(item => item.learnType.startsWith(searchKey)).reverse()} /> : ( 'No Record found')) : <Loader type="ThreeDots" color="#000000" width={50} height={50} />}
    </div>
  );
};


export default Tracking;