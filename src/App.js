import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import MainPage from './components/mainpage';
import Restaurant from './components/restaurant';
import Promotion from './components/promotion';
import Profile from './components/profile';
import Help from './components/help';

function App() {
  return (
    <Router>  
    <div className="App">
      <div className="auth-inner">
      <div className="auth-wrapper">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/mainpage" component={MainPage} />
            <Route path="/restaurant" component={Restaurant} />
            <Route path="/promotion" component={Promotion} />
            <Route path="/profile" component={Profile} />
            <Route path="/help" component={Help} />
          </Switch>
     </div></div>
    </div>
  </Router>
  );
}

export default App;