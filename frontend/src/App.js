import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './components/home/Home';
import Login from "./components/login/Login"
import SignUp from './components/signUp/SignUp';
import Landing from './components/landing/Landing';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (  
      <Router>
        <Switch>
        <Route exact path="/">
            <Landing /></Route>
          <Route exact path="/home">
            {user ? <Home /> : <SignUp />}</Route>
          <Route path="/login">{user ? <Redirect to="/home" /> : <Login />}</Route>
        </Switch>
      </Router>
  );
}

export default App;

//testing change