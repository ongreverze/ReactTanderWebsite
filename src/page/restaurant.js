import React, { Component } from 'react'
import Menubar from '../components/menubar'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormRestaurant from '../components/form/formRestaurant'
import Card from '../components/card'
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
