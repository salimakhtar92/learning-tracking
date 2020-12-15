import firebase from 'firebase';

const UserProfile = () => {
  const auth = firebase.auth();
  const  { displayName, email, photoURL } = auth.currentUser;
  return (
    <div className="profile-container">
      <img className="profile-image" src={photoURL} />
      <div className="profile-wrapper">
        <p>{displayName}</p>
        <p>{email}</p>
      </div>
    </div>
  )
};

export default UserProfile;