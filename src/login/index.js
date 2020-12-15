import firebase from 'firebase';

import './styles/index.css';

const Login = () => {
  const auth = firebase.auth();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="login-container">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    )
};

export default Login;