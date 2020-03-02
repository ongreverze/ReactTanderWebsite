import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


export default function Navbarsign() {
    return (
        <>
            <Navbar bg="light" variant="light" className="fixed-top">
                <Navbar.Brand href="/restaurant">Tander</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/sign-in">Login</Nav.Link>
                        <Nav.Link href="/sign-up">SignUp</Nav.Link></Nav>
                </Navbar.Collapse>
            </Navbar>
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
