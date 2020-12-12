
import { getCurrentDate, getThreeDaysAgoDate } from '../utils';
import Dropdown from '../learning-type';
import { LEARNING_TYPE, TIMINGS } from '../app-constant';
import './styles/index.css';

const AddLearnType = ({onChangeHandler, onSubmit, newData}) => {
  const isDisabled = () => {
    return !newData.date || !newData.learnType || !newData.comment || !newData.time;
  };
  return (
    <form className="container" onSubmit={onSubmit}>
        <input 
          className="date" 
          type="date" 
          name="date" 
          onChange={onChangeHandler} 
          value={newData.date || getCurrentDate()} 
          min={getThreeDaysAgoDate()}
          max={getCurrentDate()}
        />
        <Dropdown 
          dropdownArray={LEARNING_TYPE}
          onChange={onChangeHandler} 
          value={newData.learnType} 
          placeholder="Select learn type"
          name="learnType"
        />
        {/* <input
          className="time"
          type="number"
          name="time"
          onChange={onChangeHandler} 
          value={newData.time}
          placeholder="Time"
        /> */}
        <Dropdown 
          dropdownArray={TIMINGS}
          onChange={onChangeHandler} 
          value={newData.time} 
          name="time"
          placeholder="Select Time(in Hr)"
        />
        <input 
          className="comment" 
          type="text" 
          name="comment" 
          onChange={onChangeHandler} 
          value={newData.comment} 
          placeholder="Write comment here..."
        />
        <button disabled={isDisabled()} type="submit" className="add-button">Add</button>
      </form>
  )
};

export default AddLearnType