const Profile = ({isLoggedIn}) => {
    return ( 
        <div className = 'profile-container'>
            {isLoggedIn ? 'My Name is Ben': 'hi, Please Log In'}
        </div>
     );
}

export default Profile;