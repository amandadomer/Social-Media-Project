import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from './components/landing/Landing'; 
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home';
import SearchBar from './components/searchBar/SearchBar'
import Login from "./components/login/Login"
import SignUp from './components/signUp/SignUp';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div>
      {/* <Landing /> */}
      {/* <SignUp />  */}
      {/* <NavBar/>       */}
      {/* <Home/> */}
      <Profile/>       
      <Router>
        <Switch>
          <Route exact path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//testing change