import React from 'react'
import NavBar from '../navBar/NavBar';
import Post from '../post/Post';
import Feed from '../feed/Feed';
import './NewsFeed.css'

function NewsFeed () {
    return (
        <div>
            <NavBar/>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <Post/>
                <Feed/>
                <Feed/>
                <Feed/>
                <Feed/>
        </div>
            </div>
            </div>
        </div>
)};

export default NewsFeed;