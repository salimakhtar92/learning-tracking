import firebase from 'firebase';
import './styles/index.css';

const LogoutButton = () => {
  const auth = firebase.auth();
  const logout = () => auth.signOut();
  return auth.currentUser && <button className="logout-btn" onClick={logout}>Logout</button>
};

export default LogoutButton;