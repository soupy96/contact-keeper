import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'
import Alerts from './components/layout/Alerts.js'

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AletState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AletState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AletState>
      </ContactState>
    </AuthState>
  );
}

export default App;
