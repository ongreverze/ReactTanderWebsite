import React, { Component } from 'react'
import Menubar from './menubar'
import NavbarLoggedin from './navbarloggedin'
import FormRestaurant from './formRestaurant'
export default class restaurant extends Component {
    render() {
        return (
            <div>
                <NavbarLoggedin/>
                <Menubar/>
                <FormRestaurant/>
            </div>
        )
    }
}
