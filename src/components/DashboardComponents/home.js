import React from 'react'
import '../style.css'
import {Link} from 'react-router-dom'
export default function home() {

    return (
        <>
             <div className="blocks">
             <Link to="/dashboard/roomallot">Room Allotment</Link>
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
                <Link to="/dashboard/about">About</Link>
                </div>
        </>
    )
}
