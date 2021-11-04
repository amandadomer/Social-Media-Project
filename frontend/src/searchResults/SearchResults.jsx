import React from 'react'
import NavBar from '../components/navBar/NavBar';
import './SearchResults.css'

function SearchResults() {
    return (
        <div>
        <div className="row">
                <NavBar/>
            </div>
        <div className="searchResults">
        <span className="subHeader">
            Search results
        </span><br></br>
            Friend name Add Friend
            <br></br>
            Friend name Add Friend
            <br></br>
            Friend name Add Friend
        </div>
        </div>
    )
}

export default SearchResults;