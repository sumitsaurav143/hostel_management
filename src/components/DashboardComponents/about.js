import React from 'react'
import {Link} from 'react-router-dom'

export default function about() {
    return (
        <>
        <div className="Header">
          
        <h3>About Us</h3>
        <div>
        <Link to="/dashboard" id="backbtn">BACK</Link>
        </div>
        </div>
        <div className="bodypart">
            <p className="para">
            What is React?
To cut a long story short, React is a JavaScript library for building User Interfaces. Very often it’s misinterpreted as a tool, framework, language. React developers are able to create large web applications which use data that can change over time, without reloading the page. Its main goal is to be fast, simple and scalable. React processes only user interface in applications (source).

It is simply a JavaScript runtime. Lightweight, fast and modern way to execute code on your computer.
            </p>
            </div>
        </>
    )
}
