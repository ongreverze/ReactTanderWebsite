import React, { Component } from 'react'
import Menubar from './menubar'
import NavbarLoggedin from './navbarloggedin'
export default class profile extends Component {
    render() {
        return (
            <div>
                <NavbarLoggedin/>
                <Menubar/>
                <h1>profile</h1>
            </div>
        )
    }
}