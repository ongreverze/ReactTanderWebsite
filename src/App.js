import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import MainPage from './components/mainpage.component';
import Navbar from './components/navbar.component';
import NavbarLoggedin from './components/navbarloggedin.component';


function App() {
  return (
  <Router>  
    <div className="App">
       <div className="auth-wrapper">
        <div className="auth-inner">
          <Navbar />
          <NavbarLoggedin />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/mainpage" component={MainPage} />
          </Switch>
        </div>
      </div>
     
    </div>
  </Router>

  );
}

export default App;