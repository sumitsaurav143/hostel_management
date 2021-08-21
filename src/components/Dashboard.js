import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css'
import home from './DashboardComponents/home'
import about from './DashboardComponents/about'
import roomallot from './DashboardComponents/roomallot';

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    function handleLogout() {
        setError('')
        history.push("/")
    }
    return (
        <div className="dashbd">
            <div className="Nav">

                <h4><b>HOSTEL MANAGEMENT</b></h4>
                <div>
                   
                    <button id="logoutbtn" onClick={handleLogout}>Log Out</button>
                </div>
            </div>

            <div className="dash">
                <div className="leftpanel">
                    <div className="propic">
                       
                        </div>
                        <h5 id="userid">{currentUser.email}</h5>
                </div>
                <div className="rightpanel">
                    <Router>
                        <Switch>
                            <Route exact path="/dashboard" component={home} />
                            <Route path="/dashboard/about" component={about} />
                            <Route path="/dashboard/roomallot" component={roomallot} />
                        </Switch>
                    </Router>
                </div>
            </div>

        </div>
    )
}
