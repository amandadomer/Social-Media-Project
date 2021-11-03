import React from 'react'
import FriendsList from '../friendsList/FriendsList';
import NavBar from '../navBar/NavBar';
import './Friends.css'
import FriendRequests from '../friendRequests/FriendRequests';

function Friends() {
    return (
        <div>
            <NavBar/>
        <div className="container">
            <div className="row">
            <div className="col-6">
                <FriendsList/>
            </div>
            <div className="col-6">
                 <FriendRequests/>
            </div>
            </div>
        </div>
        </div>
)};
export default Friends;