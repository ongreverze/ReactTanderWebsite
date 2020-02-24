import React, { Component } from 'react'
import NavbarLoggedin from './navbarloggedin'
import Menubar from './menubar'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <NavbarLoggedin/>
                <Menubar/>
                <h1>MainPage</h1>
            </div>
        )
    }
}
