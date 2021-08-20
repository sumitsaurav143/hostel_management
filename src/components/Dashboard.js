import React, { useState } from 'react'
import { Navbar, Container, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from './AuthContext'
import { useHistory } from 'react-router-dom'
import './dashboard.css'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    function handleLogout() {
        setError('')
        history.push("/")
    }
    return (
        <div className="Main"> 
            <div className="Nav">
                <div>
                <h4>HOSTEL MANAGEMENT</h4>
                </div>
                <div>
                    {currentUser.email}
                    <button id="logoutbtn" onClick={handleLogout}>Log Out</button>
                </div>
            </div>

            <div className="dash">
                <div className="blocks">
                    <h4>Room Allotment</h4>
                </div>
                <div className="blocks">
                    <h4>Ammenities</h4>
                </div>
                <div className="blocks">
                    <h4>Programs</h4>
                </div>
                <div className="blocks">
                    <h4>Gallery</h4>
                </div>
                <div className="blocks">
                    <h4>Room Tour</h4>
                </div>
                <div className="blocks">
                    <h4>About Us</h4>
                </div>
            </div>
         
            
            
        </div>
    )
}
