import React from "react";
import Signup from "./signup";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './login'
import NotFound from './notfound'
import './style.css'

function App() {
  return (

    <div className="main_container">
      
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/signup" component={Signup} />
              <Route exact path="/hostel_management" component={Login} />
              <Route exact path="/" component={Login} />
              <Route component={NotFound}/>
            </Switch>
          </AuthProvider>
          </Router>
        </div>
      </div>
      )
}

 export default App;
