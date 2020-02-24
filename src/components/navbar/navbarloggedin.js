import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class navbarloggedin extends Component {
    
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to={"/sign-in"}>Tander</NavLink>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <h4>hello</h4>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/sign-in"}>Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
        )
    }
}
