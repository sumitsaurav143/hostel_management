import React from 'react'
import { Link } from 'react-router-dom'

export default function roomallot() {

    return (
        <>
            <div className="Header">
                <h3>Room Alloter</h3>
                <div>
                    <Link to="/dashboard" id="backbtn">BACK</Link>
                </div>
            </div>
            <div className="bodypart">
            <h3 id="selectgen">Select your gender:-</h3>
                <div id="genders">
                    <button id="gen"><i class="fas fa-male"></i></button>
                    <button id="gen"><i class="fas fa-female"></i></button>
                </div>
            </div>
        </>
    )
}
