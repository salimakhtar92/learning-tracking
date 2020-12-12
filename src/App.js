
import Tracking from './tracking';
import Reports from './reports';
import firebase from 'firebase';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { daysInMonth } from './utils';
import './App.css';

import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5vY2W3JL7FHEISDqg7RMAeZpqcCLj7IQ",
  authDomain: "learning-tracking-app.firebaseapp.com",
  projectId: "learning-tracking-app",
  storageBucket: "learning-tracking-app.appspot.com",
  messagingSenderId: "775669904936",
  appId: "1:775669904936:web:cbbb9d4a98499d0ee0e71d",
  measurementId: "G-8FW7YY7J29"
};

firebase.initializeApp(firebaseConfig);

const firebaseStore = firebase.firestore();

function App() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const days = daysInMonth(year, month);
  const recordsRef = firebaseStore.collection('records');
  const [records] = useCollectionData(recordsRef.orderBy('createdAt').limit(days));
  const [allRecords] = useCollectionData(recordsRef);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning Tracking Application</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            {records && records.length && <Tracking records={records} recordsRef={recordsRef} />}
          </Route>
          <Route path="/reports">
            <Reports records={allRecords} />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
