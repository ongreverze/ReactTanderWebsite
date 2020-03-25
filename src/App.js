import React, { useState, useMemo } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/form/formLogin";
import SignUp from "./components/form/formSignup";
import Restaurant from './page/restaurant';
import Promotion from './page/promotion';
import Profile from './page/profile';
import Help from './page/help';
import { UserContext } from './components/Usercontext'

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div className="App">
        <div className="auth-inner">
          <div className="auth-wrapper">
            <UserContext.Provider value={value}>
              {/* <Switch> */}

                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/restaurant" component={Restaurant} />
                <Route path="/promotion" component={Promotion} />
                <Route path="/profile" component={Profile} />
                <Route path="/help" component={Help} />
              {/* </Switch> */}
            </UserContext.Provider>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;