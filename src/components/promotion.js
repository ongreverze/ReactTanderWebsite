import React, { Component } from 'react'
import Menubar from './menubar'
import NavbarLoggedin from './navbarloggedin'
import FormPromotion from './formPromotion'
export default class promotion extends Component {
    render() {
        return (
            <div>
                <h1> </h1>
                <NavbarLoggedin/>
                <Menubar/>
                <FormPromotion/>
            </div>
        )
    }
}