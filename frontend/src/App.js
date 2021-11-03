import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from './components/landing/Landing'; 
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home';
import SearchBar from './components/searchBar/SearchBar'
import Login from "./components/login/Login"
import SignUp from './components/signUp/SignUp';

import Friends from './components/friends/Friends';

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <SignUp />  */}
      {/* <NavBar/>       */}
      {/* <Home/> */}
      {/* <Friends/>        */}
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