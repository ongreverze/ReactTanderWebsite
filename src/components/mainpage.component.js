import React, { Component } from 'react'
import NavbarLoggedin from '../components/navbarloggedin.component'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <NavbarLoggedin />
                <h1>MainPage</h1>
            </div>
        )
    }
}
