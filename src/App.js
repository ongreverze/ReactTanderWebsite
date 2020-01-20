import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Card from "./cad/cards";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Tander</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/promotion"}>Promotion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          
          <Switch>
            <Route exact path='/' component={Card} />
              <Route path="/promotion" component={Card} />
            <div className ="auth-wrapper">
              <div className="auth-inner">
            <Route path="/sign-in" component={Login}/>
            <Route path="/sign-up" component={SignUp} />
            </div>
             </div>
        
          </Switch>
</div>
          </Router>

  );
}

export default App;