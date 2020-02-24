import React, { Component } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import Menubar from '../components/menubar'


export default function Mainpage() {
    return (
        <>
            <NavbarLoggedin/>
                <Menubar/>
                <h1>MainPage</h1>
        </>
    )
}

// export default class MainPage extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
