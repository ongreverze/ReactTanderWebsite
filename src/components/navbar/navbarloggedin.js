import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


export default function Navbarloggedin() {
    return (
        <>
            <Navbar bg="light" variant="light" className="fixed-top">
                <Navbar.Brand href="/restaurant">Tander</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/restaurant">Restaurant</Nav.Link>
                    <Nav.Link href="/promotion">Promotion</Nav.Link>
                    <Nav.Link href="/help">FAQ</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/profile">นายกอไก่ ใจดี</a>
                    </Navbar.Text>
                    <Nav>
                        <Nav.Link href="/sign-in">Logout</Nav.Link></Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

// export default class navbarloggedin extends Component {

//     render() {
//         return (
//             <div>
//             <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//                 <div className="container">
//                     <NavLink className="navbar-brand" to={"/sign-in"}>Tander</NavLink>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                         <ul className="navbar-nav ml-auto">
//                             <h4>hello</h4>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to={"/sign-in"}>Logout</NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>

//         )
//     }
// }
