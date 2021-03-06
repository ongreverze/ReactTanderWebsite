import React, { useState, useMemo } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/form/formLogin";
import SignUp from "./components/form/formSignup";
import Restaurant from './page/restaurant';
import Promotion from './page/promotion';
import { UserContext } from './components/Usercontext'


function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setaccessToken] = useState(null);
  const value = useMemo(() => ({ user, setUser, accessToken, setaccessToken}), [user, setUser, accessToken, setaccessToken]);
  return (
    <Router>
      <div className="App">
        <div className="auth-inner">
          <div className="auth-wrapper">
            <UserContext.Provider value={value}>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/restaurant" component={Restaurant} />
              <Route path="/promotion" component={Promotion} />
            </UserContext.Provider>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;