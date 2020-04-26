import React , {Component, useContext} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { UserContext } from '../Usercontext'
import {NavLink} from "react-router-dom";



export default function Navbarloggedin () {
    const {user,setUser} = useContext(UserContext);

        return (
           
            <Navbar bg="light" variant="light" className="fixed-top">
                <Navbar.Brand>Tander</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="/restaurant">Restaurant</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/promotion">Promotion</NavLink></Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {user}<a href="/profile"></a>
                    </Navbar.Text>
                    <Nav>
                    <Nav.Link><NavLink to="/sign-in" onClick ={ () => {setUser(null)}}>Logout</NavLink></Nav.Link></Nav>
                </Navbar.Collapse>
            </Navbar>
          

        )

}
