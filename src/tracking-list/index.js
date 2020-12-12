import './styles/index.css';

const TrackingList = ({list}) => {

  return(
    <div className="list-container">
      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Date</th>
            <th>Learning Type</th>
            <th>Time</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {list.map((listItem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{listItem.date}</td>
              <td>{listItem.learnType}</td>
              <td>{listItem.time}Hr</td>
              <td>{listItem.comment}</td>
            </tr>
          ))}
        </tbody>
         
      </table>
    </div>
  )
};

export default TrackingList;