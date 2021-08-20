import React from "react";
import Signup from "./signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './login'

function App() {
  return (

    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Login} />
            </Switch>
          </AuthProvider>
          </Router>
        </div>
      </Container>
      )
}

      export default App;
