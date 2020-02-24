import React, { Component } from 'react'
import Menubar from '../components/menubar'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormPromotion from '../components/form/formPromotion'
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
