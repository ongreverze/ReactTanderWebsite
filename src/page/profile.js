import React, { Component } from 'react'
import Menubar from '../components/menubar'
import NavbarLoggedin from '../components/navbar/navbarloggedin'



export default function Profile() {
    return (
        <>
            <NavbarLoggedin/>
                <Menubar/>
                <h1>profile</h1>
        </>
    )
}

// export default class profile extends Component {
//     render() {
//         return (
//             <div>
//                 <NavbarLoggedin/>
//                 <Menubar/>
//                 <h1>profile</h1>
//             </div>
//         )
//     }
// }