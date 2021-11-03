import React from 'react'
import FriendsList from '../friendsList/FriendsList';
import NavBar from '../navBar/NavBar';
import FriendRequests from '../friendRequests/FriendRequests';
import './Profile.css'

function Profile (props) {
    return (
        <div className="container">
            
            <div className="row">
                <NavBar/>
            </div>
            <div className="row"> 
            </div>  
            <div className="row">

            <div className="col-6">
                <FriendsList/>
            </div>
            <div className="col-6">
                <FriendRequests/>
            </div>
            </div>
            </div>
        
)};

export default Profile;