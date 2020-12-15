
import Tracking from './tracking';
import Reports from './reports';
import firebase from 'firebase';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { daysInMonth } from './utils';
import Login from './login';
import UserProfile from './profile';
import LogoutButton from './logout';
import Header from './header';
import { firebaseConfig } from './app-constant'; 

import './App.css';

import 'firebase/firebase-firestore';
import 'firebase/auth';


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firebaseStore = firebase.firestore();

function TrackingApp() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const days = daysInMonth(year, month);
  const recordsRef = firebaseStore.collection('records');
  const [records] = useCollectionData(recordsRef.orderBy('createdAt').limit(days));
  const [allRecords] = useCollectionData(recordsRef);
  return (
    <div className="App">
      <div className="logout-profile-wrapper">
        <UserProfile />
        <LogoutButton />
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Tracking records={records} recordsRef={recordsRef} />
          </Route>
          <Route exact path="/reports">
            <Reports records={allRecords} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const App = () => {
  const [user] = useAuthState(auth);
 
    const renderComponent = user ? <TrackingApp /> : <Login />
  return (
    <>
      <Header />
      {renderComponent}
    </>
  )
};

export default App;
