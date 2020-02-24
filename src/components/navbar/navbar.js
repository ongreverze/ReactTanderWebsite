import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";



export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <NavLink className="navbar-brand" to={"/sign-in"}>Tander</NavLink>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/sign-in"}>Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/sign-up"}>Sign up</NavLink>
                                </li>
                                <NavLink className="nav-link" to={"/mainpage"}></NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}


// export default class navbar extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//                     <div className="container">
//                         <NavLink className="navbar-brand" to={"/sign-in"}>Tander</NavLink>
//                         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                             <ul className="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link" to={"/sign-in"}>Login</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link" to={"/sign-up"}>Sign up</NavLink>
//                                 </li>
//                                 <NavLink className="nav-link" to={"/mainpage"}></NavLink>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }
