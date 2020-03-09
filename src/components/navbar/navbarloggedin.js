import React , {Component} from 'react'
import { Navbar, Nav } from 'react-bootstrap'


// const Navbarloggedin = (props) => {
    
//     return (
//         <>
//             <Navbar bg="light" variant="light" className="fixed-top">
//                 <Navbar.Brand href="/restaurant">Tander</Navbar.Brand>
//                 <Nav className="mr-auto">
//                     <Nav.Link href="/restaurant">Restaurant</Nav.Link>
//                     <Nav.Link href="/promotion">Promotion</Nav.Link>
//                     <Nav.Link href="/help">FAQ</Nav.Link>
//                 </Nav>
//                 <Navbar.Collapse className="justify-content-end">
//                     <Navbar.Text>
//                         Signed in as: <a href="/profile">{props.username}</a>
//                     </Navbar.Text>
//                     <Nav>
//                         <Nav.Link href="/sign-in">Logout</Nav.Link></Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </>
//     )
// }
// export default Navbarloggedin

export default class navbarloggedin extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light" className="fixed-top">
                <Navbar.Brand href="/restaurant">Tander</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/restaurant">Restaurant</Nav.Link>
                    <Nav.Link href="/promotion">Promotion</Nav.Link>
                    <Nav.Link href="/help">FAQ</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/profile"></a>
                    </Navbar.Text>
                    <Nav>
                        <Nav.Link href="/sign-in">Logout</Nav.Link></Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
